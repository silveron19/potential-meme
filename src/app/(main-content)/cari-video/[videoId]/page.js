'use client';

import CustomButton from '@/components/button';
import CustomVideoCard from '@/components/card/VideoCard';
import CommentThread from '@/components/comment/CommentThread';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { getUserAccessToken } from '@/app/login/action';

export default function VideoDetails() {
  const { videoId } = useParams();
  const [commentData, setCommentData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCommentIds, setSelectedCommentIds] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/comment?id=${videoId}`,
          {
            withCredentials: true,
          }
        );

        const data = await response.data;

        if (data) {
          setCommentData(data);
        }
      } catch (error) {
        console.error('Gagal mengambil komentar:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const CheckUserRole = async () => {
      try {
        const providerToken = await getUserAccessToken();

        const response = await axios.post(
          `http://localhost:8000/check-user-role?video_id=${videoId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${providerToken}`,
            },
            withCredentials: true,
          }
        );

        const data = await response.data;

        console.log(data);

        if (data) {
          localStorage.setItem('userChannelId', data.user_channel_id);

          setUserData(data);
        }
      } catch (error) {
        console.error('Gagal mengambil peran pengguna:', error);
      }
    };

    if (videoId) {
      fetchComments();
      CheckUserRole();
    }
  }, [videoId]);

  const handleDetectGamblingComments = async () => {
    if (!commentData?.data?.length) return;

    const filteredData = commentData.data.map((item) => ({
      account_age_gap_days: item.account_age_gap_days,
      channel_id: item.channel_id,
      comment: item.comment,
      comment_id: item.comment_id,
      comment_published_at: item.comment_published_at,
      like_count: item.like_count,
      video_id: item.video_id,
    }));

    try {
      const response = await axios.post(
        'http://localhost:8000/predict',
        {
          data: filteredData,
        },
        {
          withCredentials: true,
        }
      );

      const predictionResult = response.data;

      setPredictions(predictionResult.data || predictionResult);
    } catch (error) {
      console.error('Gagal melakukan prediksi:', error);
    }
  };

  const handleDeleteComments = async () => {
    if (!selectedCommentIds.length)
      return alert('Pilih komentar terlebih dahulu');
    try {
      const providerToken = await getUserAccessToken();
      await axios.post(
        `http://localhost:8000/comments/delete`,
        { comment_ids: selectedCommentIds },
        {
          headers: { Authorization: `Bearer ${providerToken}` },
          withCredentials: true,
        }
      );
      alert('Komentar berhasil dihapus');
      setSelectedCommentIds([]);
    } catch (error) {
      console.error('Gagal menghapus komentar:', error);
    }
  };

  const handleBanUsers = async () => {
    if (!selectedCommentIds.length)
      return alert('Pilih komentar terlebih dahulu');
    try {
      const providerToken = await getUserAccessToken();
      await axios.post(
        `http://localhost:8000/users/ban`,
        { comment_ids: selectedCommentIds },
        {
          headers: { Authorization: `Bearer ${providerToken}` },
          withCredentials: true,
        }
      );

      alert('User berhasil dilarang');
      setSelectedCommentIds([]);
    } catch (error) {
      console.error('Gagal melarang user:', error);
    }
  };

  const handleReportComments = async () => {
    if (!selectedCommentIds.length)
      return alert('Pilih komentar terlebih dahulu');
    try {
      const providerToken = await getUserAccessToken();
      let userChannelId = localStorage.getItem('userChannelId');

      const response = await axios.post(
        `http://localhost:8000/report-comments`,
        { comment_ids: selectedCommentIds, reporter_channel_id: userChannelId },
        {
          headers: { Authorization: `Bearer ${providerToken}` },
          withCredentials: true,
        }
      );

      if (response) {
        alert('Berhasil mengajukan laporan komentar');
        console.log(response);
        setSelectedCommentIds([]);
      }
    } catch (error) {
      console.error('Gagal melaporkan komentar user:', error);
    }
  };

  return (
    <div className='h-full flex flex-col px-6 pt-6 bg-white gap-5'>
      <CustomVideoCard
        title={commentData?.data?.[0]?.video_title}
        badgeText={userData?.role || 'loading'}
        url={`https://www.youtube.com/embed/${videoId}`}
      />
      <div className='flex-1 flex flex-col gap-2'>
        <div className='flex gap-4'>
          <h3 className='font-semibold text-base'>Daftar Komentar</h3>
          <button className='flex items-center justify-center gap-1'>
            <Image
              src='/icon/filter.svg'
              alt='Star Icon'
              width={24}
              height={24}
            />
            <p className='text-sm font-semibold'>Filter</p>
          </button>
        </div>
        <div className='flex gap-4 flex-wrap'>
          {/* Tombol Deteksi Komentar Judi - semua role */}
          <CustomButton
            text={'Deteksi Komentar Judi'}
            style={{
              gap: '0.2rem',
              background: 'linear-gradient(180deg, #FF0000, #C80000)',
            }}
            variant='fill'
            onClick={handleDetectGamblingComments}
          >
            <Image
              src='/icon/ai-white.svg'
              alt='AI Icon'
              width={18}
              height={18}
            />
          </CustomButton>

          {/* Tombol hanya untuk moderator dan owner */}
          {['moderator', 'owner'].includes(userData.role) && (
            <>
              <CustomButton
                text={'Daftar Situs Judi'}
                style={{
                  gap: '0.2rem',
                }}
                variant='outline'
              >
                <Image
                  src='/icon/gambling.svg'
                  alt='Gambling Icon'
                  width={18}
                  height={18}
                />
              </CustomButton>

              <CustomButton
                text={'Hapus Komentar'}
                borderColor='border-(--primary)'
                textColor='text-(--primary)'
                style={{
                  gap: '0.2rem',
                }}
                variant='outline'
                onClick={handleDeleteComments}
                disabled={!selectedCommentIds.length}
              >
                <Image
                  src='/icon/trash-red.svg'
                  alt='Trash Icon'
                  width={18}
                  height={18}
                />
              </CustomButton>
            </>
          )}

          {/* Tombol hanya untuk owner */}
          {userData.role === 'owner' && (
            <CustomButton
              text={'Ban User dari Channel'}
              borderColor='border-(--primary)'
              textColor='text-(--primary)'
              style={{
                gap: '0.2rem',
              }}
              variant='outline'
              onClick={handleBanUsers}
              disabled={!selectedCommentIds.length}
            >
              <Image
                src='/icon/ban.svg'
                alt='Ban Icon'
                width={18}
                height={18}
              />
            </CustomButton>
          )}
          {/* Tombol Laporkan Komentar - semua role */}
          <CustomButton
            text={'Laporkan Komentar'}
            borderColor='border-(--orange)'
            textColor='text-(--orange)'
            style={{
              gap: '0.2rem',
            }}
            variant='outline'
            onClick={handleReportComments}
            disabled={!selectedCommentIds.length}
          >
            <Image
              src='/icon/warning.svg'
              alt='Warning Icon'
              width={18}
              height={18}
            />
          </CustomButton>
        </div>
        <CommentThread
          comments={commentData.data}
          isLoading={isLoading}
          predictions={predictions}
          onSelectionChange={setSelectedCommentIds}
        />
      </div>
    </div>
  );
}
