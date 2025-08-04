'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import CustomCheckbox from '../CustomCheckbox';

const comments = [
  {
    username: '@sore',
    comment:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    confidence: 0.75,
    reported: 0,
  },
  {
    username: '@windut',
    comment:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    confidence: 0.8,
    reported: 0,
  },
  {
    username: '@johnson',
    comment:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    confidence: 0.1,
    reported: 0,
  },
  {
    username: '@wikawika',
    comment:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    confidence: 0.86,
    reported: 0,
  },
  {
    username: '@sore',
    comment:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    confidence: 0.75,
    reported: 0,
  },
];

export default function CommentThread() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(() => comments.map(() => false));
  const rowRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setSelectedIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowDown') {
        setSelectedIndex((prev) => Math.min(comments.length - 1, prev + 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        toggleCheckbox(selectedIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, isChecked]);

  useEffect(() => {
    const selectedRow = rowRefs.current[selectedIndex];
    if (selectedRow) {
      selectedRow.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [selectedIndex]);

  const toggleCheckbox = (index) => {
    setIsChecked((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className='scroll-smooth'>
      <table className='w-full'>
        <tbody>
          {comments.map((user, index) => (
            <tr
              ref={(el) => (rowRefs.current[index] = el)}
              key={index}
              className={`transition-colors duration-0 ${
                index === selectedIndex ? 'bg-(--gray)' : ''
              } transition`}
              onClick={() => setSelectedIndex(index)}
            >
              <td className='px-6 py-3 text-center'>
                <CustomCheckbox
                  checked={isChecked[index]}
                  onChange={() => toggleCheckbox(index)}
                />
              </td>

              <td className='px-6 py-3 text-gray-800'>
                <div className='flex flex-col gap-2 text-black'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src='/icon/profile.svg'
                      alt='Profile Icon'
                      width={36}
                      height={36}
                    />
                    <div className='flex-1'>
                      <p className='text-base font-bold truncate'>
                        {user.username}
                      </p>
                      <p className='text-base line-clamp-3 break-words mt-1'>
                        {user.comment}
                      </p>
                      <div className='flex items-center gap-2 mt-2'>
                        <Image
                          src='/icon/warning.svg'
                          alt='Warning Icon'
                          width={16}
                          height={16}
                        />
                        <p className='text-sm'>
                          Total Laporan:{' '}
                          <span className='font-bold'>{user.reported}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>

              <td className='px-6 py-3 text-gray-600 text-center'>
                <button className='flex items-center justify-center w-6 h-6 gap-1'>
                  <Image
                    src='/icon/ai-star.svg'
                    alt='Star Icon'
                    width={24}
                    height={24}
                  />
                  <p className='text-base font-bold'>
                    {comments[index].confidence * 100}%
                  </p>
                </button>
              </td>

              <td className='px-6 py-3 text-(--gray) text-center'>
                <button className='flex items-center justify-center w-6 h-6'>
                  <Image
                    src='/icon/trash.svg'
                    alt='Trash Icon'
                    width={24}
                    height={24}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
