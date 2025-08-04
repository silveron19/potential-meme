import Image from 'next/image';

export default function Topbar({ onToggleSidebar }) {
  return (
    <nav className='border-b border-gray-300 px-6 py-4 flex items-center justify-between'>
      <div className='flex items-center gap-8'>
        <button
          className='flex items-center justify-center w-10 h-10'
          onClick={onToggleSidebar}
        >
          <Image
            src='/icon/hamburger.svg'
            alt='Hamburger Icon'
            width={18}
            height={12}
          />
        </button>
        <div className='flex items-center gap-2'>
          <p className='text-2xl'>🎰</p>
          <span className='text-xl font-bold'>Anti Judol</span>
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex items-center'>
          <Image
            src='/icon/ri_question-fill.svg'
            alt='Question Icon'
            width={36}
            height={36}
          />
        </div>
        <div className='flex items-center'>
          <Image
            src='/icon/profile.svg'
            alt='Question Icon'
            width={36}
            height={36}
          />
        </div>
      </div>
    </nav>
  );
}
