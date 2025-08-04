import Link from 'next/link';

export default function SidebarItem({ href, icon, text, isActive, showText }) {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 rounded-lg transition-colors duration-300 gap-1  ${
        isActive ? 'bg-[var(--gray)] text-[var(--primary)]' : ''
      }`}
    >
      <div className='flex items-center justify-center'>
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d={icon || ''} />
        </svg>
      </div>

      <span
        className={`transition-all duration-300 whitespace-nowrap text-sm font-medium ${
          showText
            ? 'opacity-100 max-w-xs scale-100'
            : 'opacity-0 max-w-0 scale-95'
        }`}
      >
        {text}
      </span>
    </Link>
  );
}
