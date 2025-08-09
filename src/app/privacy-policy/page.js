export default function PrivacyPolicy() {
  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold text-indigo-900 mb-6'>
        Privacy Policy – AntiJudol.ai
      </h1>
      <p className='mb-4 text-gray-700'>
        <strong className='font-semibold text-indigo-800'>
          Tanggal Efektif:
        </strong>{' '}
        9 Agustus 2025
      </p>

      <p className='mb-6 text-gray-700'>
        AntiJudol.ai (“kami”, “kita”, atau “platform”) menghargai privasi Anda.
        Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
        menggunakan, dan melindungi informasi pribadi pengguna saat menggunakan
        layanan kami.
      </p>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>
          1. Informasi yang Kami Kumpulkan
        </h2>
        <p className='mb-3 text-gray-700'>
          Kami mengumpulkan informasi berikut:
        </p>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>
            <strong className='font-semibold text-indigo-700'>
              Informasi Akun Google:
            </strong>{' '}
            Nama, alamat email, foto profil, dan ID akun melalui Google Sign-In.
          </li>
          <li>
            <strong className='font-semibold text-indigo-700'>
              Data YouTube:
            </strong>{' '}
            Melalui izin OAuth (scope youtube.force-ssl), kami dapat mengakses
            komentar pada video YouTube yang Anda miliki atau moderasi, untuk
            mendeteksi dan menghapus komentar yang terindikasi promosi judi
            online.
          </li>
          <li>
            <strong className='font-semibold text-indigo-700'>
              Data Aktivitas Platform:
            </strong>{' '}
            Riwayat video yang dianalisis, daftar komentar terdeteksi, serta
            tindakan moderasi yang dilakukan.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>
          2. Tujuan Penggunaan Data
        </h2>
        <p className='mb-3 text-gray-700'>Kami menggunakan data Anda untuk:</p>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>
            Mengidentifikasi Anda sebagai pemilik channel, moderator, atau
            penonton.
          </li>
          <li>
            Melakukan analisis komentar YouTube menggunakan AI untuk mendeteksi
            promosi judi online.
          </li>
          <li>
            Memfasilitasi penghapusan komentar, pemblokiran pengguna, atau
            pelaporan ke YouTube.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>
          3. Penyimpanan dan Keamanan Data
        </h2>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>
            Data hanya disimpan di server yang aman dan dikelola oleh penyedia
            layanan terpercaya (Supabase &amp; Google Cloud).
          </li>
          <li>
            Akses ke data dibatasi hanya untuk fungsi aplikasi yang relevan.
          </li>
          <li>
            Kami tidak membagikan atau menjual data pribadi Anda kepada pihak
            ketiga tanpa persetujuan Anda.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>
          4. Pembagian Data
        </h2>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>
            <strong className='font-semibold text-indigo-700'>
              Dengan YouTube API:
            </strong>{' '}
            Untuk menjalankan fungsi hapus komentar, ban user, atau pelaporan,
            data dikirim ke API resmi YouTube.
          </li>
          <li>
            <strong className='font-semibold text-indigo-700'>
              Dengan Pihak Berwenang:
            </strong>{' '}
            Jika diwajibkan oleh hukum, kami dapat membagikan data kepada
            otoritas terkait.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>
          5. Hak Anda
        </h2>
        <p className='mb-3 text-gray-700'>Anda berhak untuk:</p>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>Meminta salinan data Anda.</li>
          <li>Meminta penghapusan data dari sistem kami.</li>
          <li>
            Menarik izin OAuth YouTube kapan saja melalui Google Security
            Settings.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>
          6. Perubahan Kebijakan
        </h2>
        <p className='text-gray-700'>
          Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan
          akan diumumkan di situs resmi kami.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>Kontak</h2>
        <p className='text-gray-700'>
          Email:{' '}
          <a
            href='mailto:mykisah09@gmail.com'
            className='text-indigo-600 underline'
          >
            mykisah09@gmail.com
          </a>
        </p>
        <p className='text-gray-700'>
          Alamat: Universitas Hasanuddin, Makassar, Indonesia
        </p>
      </section>
    </div>
  );
}
