export default function AuthCodeError() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='text-center p-8'>
        <h1 className='text-2xl font-bold text-red-600 mb-4'>
          Authentication Error
        </h1>
        <p className='text-gray-600 mb-6'>
          Terjadi kesalahan saat melakukan autentikasi dengan Google. Silakan
          coba lagi.
        </p>
        <a
          href='/login'
          className='inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
        >
          Kembali ke Login
        </a>
      </div>
    </div>
  );
}
