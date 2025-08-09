'use client';

import { useEffect } from 'react';
import CustomButton from '../button';
import LogoutButton from '../logout/LogoutButton';

export default function MyKisahModal({
  open,
  onClose,
  width,
  height,
  title,
  subtitle,
  children,
  actions = null,
  onAction,
  hideCancel,
  actionText,
  cancelText = 'Batalkan',
  actionStyle,
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4'
      onClick={onClose}
    >
      <main
        className='bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative flex flex-col gap-4'
        onClick={(e) => e.stopPropagation()}
        style={{
          width: width || '100%',
          maxWidth: '100%',
          height: height || 'auto',
        }}
      >
        {(!!title || !!subtitle) && (
          <section className='flex flex-col gap-1 items-center'>
            {title && (
              <h2 className='text-xl font-semibold text-center text-red-600'>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className='text-sm text-center text-gray-500 mt-1'>
                {subtitle}
              </p>
            )}
          </section>
        )}

        {children}

        {/* {actions ?? (
          <section className='mt-6 flex justify-end gap-2'>
            {!hideCancel && (
              <CustomButton
                onClick={onClose}
                text={cancelText}
                variant='outlined'
              />
            )}
            <CustomButton
              onClick={onAction}
              text={actionText}
              style={actionStyle}
              variant='fill'
              bgcolor={'bg-(--primary)'}
            />
          </section>
        )} */}
        <LogoutButton
          text='Keluar'
          variant='outlined'
          showConfirmModal={false}
        />
      </main>
    </div>
  );
}
