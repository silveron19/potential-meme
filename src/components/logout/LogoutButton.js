'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoutConfirmModal from './LogoutConfirmModal';
import CustomButton from '../button';
import { createSupabaseBrowserClient } from '@/utils/supabase/supabaseClient';

export default function LogoutButton({ text = 'Logout', showConfirmModal }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  const handleLogout = async () => {
    await performLogout();
  };

  const performLogout = async () => {
    setLoading(true);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Logout error:', error);
        alert('Gagal logout: ' + error.message);
      } else {
        router.push('/login');
        router.refresh();
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert('Terjadi kesalahan saat logout');
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <CustomButton
        onClick={handleLogout}
        text={loading ? 'Logging out...' : text}
        disabled={loading}
        bgcolor={'bg-(--primary)'}
      />

      {showModal && (
        <LogoutConfirmModal
          open={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={performLogout}
          loading={loading}
        />
      )}
    </>
  );
}
