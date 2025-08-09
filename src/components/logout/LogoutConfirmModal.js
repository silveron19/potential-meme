import MyKisahModal from '../modal/modal';

export default function LogoutConfirmModal({
  open,
  onClose,
  onConfirm,
  loading,
}) {
  return (
    <MyKisahModal
      open={open}
      onClose={onClose}
      width='320px'
      title='Konfirmasi Logout'
      subtitle='Apakah Anda yakin ingin keluar dari akun?'
      actionText={loading ? 'Logging out...' : 'Ya, Logout'}
      cancelText='Batal'
      onAction={onConfirm}
      actionStyle={{ backgroundColor: '#dc2626', color: 'white' }}
    >
      <div className='flex flex-col items-center text-center py-4'>
        <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4'>
          <svg
            className='w-8 h-8 text-red-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
        </div>
        <p className='text-gray-600 text-sm'>
          Anda akan keluar dari akun dan diarahkan ke halaman login.
        </p>
      </div>
    </MyKisahModal>
  );
}
