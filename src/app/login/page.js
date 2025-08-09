import CustomButton from '@/components/button';
import Image from 'next/image';
import { signUpWithGoogle, signInWithGoogle } from './action';

export default function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='text-center'>
        {/* Logo + Teks AntiJudol */}
        <div className='flex items-center justify-center mb-6 gap-2'>
          <Image
            src='/logojudol.png'
            alt='AntiJudol Logo'
            width={32}
            height={32}
            className='w-8 h-8'
          />
          <h1 className='text-[30px] font-bold text-black'>AntiJudol</h1>
        </div>

        {/* Tombol Masuk */}
        <form action={signInWithGoogle}>
          <CustomButton
            icon={
              <Image
                src='https://www.google.com/favicon.ico'
                alt='Google Logo'
                width={20}
                height={20}
                className='w-5 h-5'
              />
            }
            text={<span className='text-[16px]'>Masuk dengan Google</span>}
            variant='fill'
            bgcolor='bg-gray-200'
            textColor='text-gray-800'
            width='280px'
            type='submit'
          />
        </form>
      </div>
    </div>
  );
}
