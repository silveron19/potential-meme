import Head from 'next/head';
import CustomButton from '@/components/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='text-center'>
        {/* Logo + Teks AntiJudol */}
        <div className='flex items-center justify-center mb-6 gap-2'>
          <Image
            src='/logojudol.png'
            alt='AntiJudol Logo'
            className='w-8 h-8'
          />
          <h1 className='text-[30px] font-bold text-black'>AntiJudol</h1>
        </div>

        {/* Tombol Daftar */}
        <CustomButton
          icon={
            <Image
              src='https://www.google.com/favicon.ico'
              alt='Google Logo'
              className='w-5 h-5'
            />
          }
          text={<span className='text-[16px]'>Daftar dengan Google</span>}
          variant='fill'
          bgcolor='bg-gray-200'
          textColor='text-gray-800'
          width='280px'
        />

        {/* Divider */}
        <div className='my-4'>
          <div className='h-px bg-gray-300 w-[280px] mx-auto'></div>
        </div>

        {/* Sudah Punya Akun */}
        <p className='text-red-500 mb-2 font-bold text-[12px]'>
          Sudah Punya Akun?
        </p>

        {/* Tombol Masuk */}
        <CustomButton
          icon={
            <Image
              src='https://www.google.com/favicon.ico'
              alt='Google Logo'
              className='w-5 h-5'
            />
          }
          text={<span className='text-[16px]'>Masuk dengan Google</span>}
          variant='fill'
          bgcolor='bg-gray-200'
          textColor='text-gray-800'
          width='280px'
        />
      </div>
    </div>
  );
}
