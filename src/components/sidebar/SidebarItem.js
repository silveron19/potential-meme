import Link from 'next/link';

export default function SidebarItem({ href, icon, text, isActive, showText }) {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 rounded-lg transition-colors duration-300 gap-2 ${
        isActive ? 'bg-(--gray) text-(--primary)' : ''
      }`}
    >
      <div className='flex items-center justify-center flex-shrink-0'>
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d={icon || ''} />
        </svg>
      </div>

      <span
        className={`transition-all duration-300 whitespace-nowrap text-sm font-medium overflow-hidden ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </span>
    </Link>
  );
}
