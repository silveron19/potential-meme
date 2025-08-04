import CommentThread from '@/components/comment/CommentThread';
import Image from 'next/image';

export default function VideoKamu() {
  return (
    <div className='h-full flex flex-col p-6 bg-white gap-6 overflow-auto '>
      <div className='flex gap-4'>
        <h3 className='font-semibold text-base'>Daftar Komentar</h3>
        <button className='flex items-center justify-center gap-1'>
          <Image
            src='/icon/filter.svg'
            alt='Star Icon'
            width={24}
            height={24}
          />
          <p className='text-sm font-semibold'>Filter</p>
        </button>
      </div>
      {/* Button Deteksi Judi dll. */}
      <CommentThread />
    </div>
  );
}
