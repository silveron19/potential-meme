'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  // Ambil videoId dari berbagai format URL YouTube
  const extractVideoId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match?.[1];
  };

  const handleSearch = async () => {
    const videoId = extractVideoId(inputValue);
    if (!videoId) {
      alert('Link YouTube tidak valid!');
      return;
    }

    // Redirect ke halaman hasil pencarian dengan query videoId
    router.push(`/cari-video/${videoId}`);
  };

  return (
    <div className='flex items-center w-1/2'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Masukkan Link/ID Video untuk Deteksi Komentar Judi Online'
        className='px-4 py-2.5 text-gray-700 focus:outline-none bg-white w-full'
      />
      <button
        onClick={handleSearch}
        className='px-4 py-2.5 flex items-center justify-center text-white bg-[var(--primary)]'
      >
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M9.9175 16.335C8.26363 16.335 6.86407 15.7621 5.71881 14.6162C4.57354 13.4703 4.00061 12.0708 4 10.4175C3.99939 8.76424 4.57233 7.36468 5.71881 6.2188C6.86528 5.07294 8.26485 4.5 9.9175 4.5C11.5701 4.5 12.97 5.07294 14.1171 6.2188C15.2642 7.36468 15.8368 8.76424 15.835 10.4175C15.835 11.0851 15.7288 11.7148 15.5164 12.3065C15.3039 12.8983 15.0156 13.4218 14.6515 13.877L19.7496 18.9751C19.9165 19.142 20 19.3544 20 19.6124C20 19.8703 19.9165 20.0827 19.7496 20.2496C19.5827 20.4165 19.3703 20.5 19.1124 20.5C18.8544 20.5 18.642 20.4165 18.4751 20.2496L13.377 15.1515C12.9218 15.5156 12.3983 15.8039 11.8065 16.0164C11.2148 16.2288 10.5851 16.335 9.9175 16.335ZM9.9175 14.5142C11.0555 14.5142 12.0229 14.1161 12.8198 13.3198C13.6167 12.5235 14.0148 11.5561 14.0142 10.4175C14.0136 9.27891 13.6155 8.31178 12.8198 7.5161C12.0241 6.72043 11.0567 6.32198 9.9175 6.32077C8.7783 6.31955 7.81117 6.718 7.0161 7.5161C6.22103 8.31421 5.82259 9.28134 5.82077 10.4175C5.81895 11.5537 6.21739 12.5211 7.0161 13.3198C7.81481 14.1185 8.78194 14.5167 9.9175 14.5142Z' />
        </svg>
      </button>
    </div>
  );
}
