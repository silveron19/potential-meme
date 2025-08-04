import Image from 'next/image';

export default function CustomCheckbox({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className='w-6 h-6'
    >
      {checked ? (
        <Image
          src='/icon/fill-checkbox.svg'
          alt='Star Icon'
          width={24}
          height={24}
        />
      ) : (
        <Image
          src='/icon/outline-checkbox.svg'
          alt='Star Icon'
          width={24}
          height={24}
        />
      )}
    </button>
  );
}
