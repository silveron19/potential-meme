'use client';

import Image from 'next/image';
import { useEffect, useState, useRef, useMemo } from 'react';
import CustomCheckbox from '../CustomCheckbox';

const COMMENTS_PER_PAGE = 10;

export default function CommentThread({
  comments: dataComments,
  isLoading,
  predictions = [],
  onSelectionChange, // <- Tambahan prop
}) {
  const allComments = useMemo(() => {
    if (!dataComments || dataComments.length === 0) return [];

    return dataComments.map((data) => {
      const prediction = predictions.find(
        (pred) => pred.comment_id === data.comment_id
      );

      return {
        username: data.username,
        comment: data.comment,
        comment_id: data.comment_id,
        confidence: prediction?.confidence ?? 0,
        prediction: prediction?.prediction ?? 0,
        reported: data.reported ?? 0,
      };
    });
  }, [dataComments, predictions]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allComments.length / COMMENTS_PER_PAGE);

  const paginatedComments = useMemo(() => {
    const start = (currentPage - 1) * COMMENTS_PER_PAGE;
    return allComments.slice(start, start + COMMENTS_PER_PAGE);
  }, [allComments, currentPage]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCommentIds, setSelectedCommentIds] = useState([]); // <- simpan id
  const rowRefs = useRef([]);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedCommentIds); // kirim ke parent setiap perubahan
    }
  }, [selectedCommentIds, onSelectionChange]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [paginatedComments]);

  const toggleCheckbox = (commentId) => {
    setSelectedCommentIds((prev) =>
      prev.includes(commentId)
        ? prev.filter((id) => id !== commentId)
        : [...prev, commentId]
    );
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const getConfidenceStyle = (confidence, prediction) => {
    if (confidence === 0) return { color: '#6B7280' };
    if (prediction === 1 && confidence > 0.5) return { color: '#DC2626' };
    return { color: '#059669' };
  };

  const getConfidenceText = (confidence) => {
    if (confidence === 0) return '-';
    return `${(confidence * 100).toFixed(2)}%`;
  };

  if (isLoading) {
    return (
      <div className='w-full text-center py-6'>
        <p className='text-gray-500'>Memuat komentar...</p>
      </div>
    );
  }

  if (!dataComments || dataComments.length === 0) {
    return (
      <div className='w-full text-center py-6'>
        <p className='text-gray-400'>Tidak ada komentar</p>
      </div>
    );
  }

  return (
    <div className='scroll-smooth h-full flex-1'>
      <table className='w-full'>
        <tbody>
          {paginatedComments.map((comment, index) => (
            <tr
              ref={(el) => (rowRefs.current[index] = el)}
              key={comment.comment_id}
              className={`scroll-mb-16 transition-colors duration-0 ${
                index === selectedIndex ? 'bg-(--gray)' : ''
              } ${
                comment.prediction === 1 && comment.confidence > 0.5
                  ? 'bg-red-50 border-l-4 border-red-500'
                  : ''
              } transition`}
              onClick={() => setSelectedIndex(index)}
            >
              <td className='px-6 py-3 text-center'>
                <CustomCheckbox
                  checked={selectedCommentIds.includes(comment.comment_id)}
                  onChange={() => toggleCheckbox(comment.comment_id)}
                />
              </td>

              <td className='px-6 py-3 text-gray-800 max-w-md'>
                <div className='flex flex-col gap-2 text-black'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src='/icon/profile.svg'
                      alt='Profile Icon'
                      width={36}
                      height={36}
                    />
                    <div className='flex-1'>
                      <p className='text-base font-bold'>{comment.username}</p>
                      <p className='text-base line-clamp-3 break-words mt-1'>
                        {comment.comment}
                      </p>
                      <div className='flex items-center gap-4 mt-2'>
                        <div className='flex items-center gap-2'>
                          <Image
                            src='/icon/warning.svg'
                            alt='Warning Icon'
                            width={16}
                            height={16}
                          />
                          <p className='text-sm'>
                            Total Laporan:{' '}
                            <span className='font-bold'>
                              {comment.reported}
                            </span>
                          </p>
                        </div>
                        {comment.prediction === 1 &&
                          comment.confidence > 0.5 && (
                            <div className='flex items-center gap-2'>
                              <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                              <p className='text-sm text-red-600 font-semibold'>
                                Terdeteksi Judi
                              </p>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </td>

              <td className='px-6 py-3 text-gray-600 text-center'>
                <div className='flex items-center justify-center gap-1'>
                  <Image
                    src='/icon/ai-star.svg'
                    alt='Star Icon'
                    width={24}
                    height={24}
                  />
                  <p
                    className='text-base font-bold'
                    style={getConfidenceStyle(
                      comment.confidence,
                      comment.prediction
                    )}
                  >
                    {getConfidenceText(comment.confidence, comment.prediction)}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='sticky bottom-0 bg-white flex justify-between items-center p-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='px-4 py-2 border rounded disabled:opacity-50'
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='px-4 py-2 border rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
}
