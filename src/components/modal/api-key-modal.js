'use client';

import Image from 'next/image';
import MyKisahModal from './modal';

export default function MyKisahApiModal({ open = false, onClose = () => {} }) {
  return (
    <MyKisahModal open={open} onClose={onClose} width='300px'>
      <MyKisahApiKeyModalContent
        profile={{
          name: 'My Kisah',
          username: '@mykisah',
          badgeIcon: 'g',
        }}
      />
    </MyKisahModal>
  );
}

function MyKisahApiKeyModalContent({
  profile = {
    name: 'My Kisah',
    username: '@mykisah',
    avatarUrl: null,
    badgeIcon: 'g',
  },
}) {
  return (
    <div className='flex flex-col items-center text-center'>
      {/* Avatar */}
      <div className='relative mb-2'>
        <div className='w-20 h-20 relative rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-500'>
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt='Avatar'
              className='object-cover rounded-full'
              fill
            />
          ) : (
            <svg
              className='w-10 h-10 text-gray-400'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9 8c0-2.5 5-4 9-4s9 1.5 9 4v1H3v-1z'
              />
            </svg>
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className='font-semibold text-lg'>{profile.name}</h3>
      <p className='text-sm text-gray-500'>{profile.username}</p>

      {/* Divider */}
      <div className='w-full border-t mt-4 mb-4' />
    </div>
  );
}
