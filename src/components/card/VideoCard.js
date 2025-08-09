import Image from 'next/image';

// Valid role types
const ROLE_TYPES = {
  viewer: {
    text: 'Viewer',
    color: 'text-[#6B6B6B]',
    bg: 'bg-[#F5F5F5]',
    dot: '•',
  },
  moderator: {
    text: 'Moderator',
    color: 'text-[#2563EB]',
    bg: 'bg-[#EBF4FF]',
    dot: '⚡',
  },
  owner: {
    text: 'Pemilik Channel',
    color: 'text-[#ED2B2A]',
    bg: 'bg-[#FFEAEA]',
    dot: '👑',
  },
  loading: {
    text: 'Loading...',
    color: 'text-[#6B6B6B]',
    bg: 'bg-[#F3F4F6]',
    dot: '⏳',
  },
};

const CustomVideoCard = ({ thumbnail, title, badgeText, url }) => {
  const normalizedBadge = badgeText?.toLowerCase();

  const roleConfig = ROLE_TYPES[normalizedBadge] || ROLE_TYPES['loading'];

  return (
    <div className='flex items-start gap-4 rounded bg-white w-fit'>
      {/* Thumbnail 16:9 */}
      <div className='w-[330px] rounded flex items-center justify-center bg-white'>
        {thumbnail || (
          <iframe
            src={url}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='size-full aspect-video rounded-lg'
          ></iframe>
        )}
      </div>

      {/* Konten kanan */}
      <div className='flex flex-col text-left justify-between h-[90px] py-0.5'>
        {/* Title */}
        <h2 className='text-[18px] font-semibold text-[#2D2D2D] leading-snug line-clamp-3 break-words mb-[8px]'>
          {title}
        </h2>

        {/* Role + Badge */}
        <div className='mt-auto'>
          <p className='text-[12px] text-[#6B6B6B]'>Roles Anda dalam video:</p>
          <div
            className={`inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-[12px] font-semibold ${roleConfig.color} ${roleConfig.bg} w-fit`}
          >
            <span className='mr-1 text-[16px] leading-none'>
              {roleConfig.dot}
            </span>
            {roleConfig.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoCard;
