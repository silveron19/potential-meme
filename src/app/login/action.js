'use client';

import { createSupabaseBrowserClient } from '@/utils/supabase/supabaseClient';
import { redirect } from 'next/navigation';

export async function signInWithGoogle() {
  const supabase = createSupabaseBrowserClient();

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/';
    // Make sure to include `https://` when not localhost.
    url = url.startsWith('http') ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.endsWith('/') ? url : `${url}/`;
    return url;
  };

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getURL(),
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      scopes: 'https://www.googleapis.com/auth/youtube.force-ssl',
    },
  });

  if (error) {
    console.error('Error signing in with Google:', error);
    redirect('/error');
  }
}

// export async function signUpWithGoogle() {
//   const supabase = await createClientServer();

//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//     options: {
//       redirectTo: `${
//         process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
//       }/auth/callback`,
//       scopes: 'https://www.googleapis.com/auth/youtube.force-ssl',
//     },
//   });

//   if (error) {
//     console.error('Error signing up with Google:', error);
//     redirect('/error');
//   }

//   if (data.url) {
//     redirect(data.url);
//   }
// }

export async function getUserAccessToken() {
  const supabase = createSupabaseBrowserClient();

  const { data, error } = await supabase.auth.getSession();

  if (error || !data?.session) {
    console.error('Error getting session:', error);
    return null;
  }
  console.log(data);
  return data.session.provider_token;
}
