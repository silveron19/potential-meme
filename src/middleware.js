import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  // Base response where Supabase will set refreshed cookies
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

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // Helper: forward any cookies set on `response` to another response (e.g., redirect)
  const forwardCookies = (target) => {
    response.cookies.getAll().forEach((cookie) => {
      // Copy cookie options if present
      target.cookies.set(cookie.name, cookie.value, cookie);
    });
    return target;
  };

  // Redirect jika user sudah login tapi akses /login
  if (request.nextUrl.pathname === '/login' && user) {
    const redirectRes = NextResponse.redirect(
      new URL('/cari-video', request.url)
    );
    return forwardCookies(redirectRes);
  }

  // Halaman yang butuh autentikasi
  const protectedRoutes = ['/cari-video', '/video-kamu'];
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !user) {
    const redirectRes = NextResponse.redirect(
      new URL('/privacy-policy', request.url)
    );
    return forwardCookies(redirectRes);
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
};
