import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data, error } = await supabase.auth.getUser();

  // Redirect jika user sudah login tapi akses /login
  if (request.nextUrl.pathname === '/login' && data) {
    return NextResponse.redirect(new URL('/cari-video', request.url));
  }

  // Halaman yang butuh autentikasi
  const protectedRoutes = ['/cari-video', '/video-kamu'];
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !data) {
    return NextResponse.redirect(new URL('/privacy-policy', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
  runtime: 'experimental-edge',
};
