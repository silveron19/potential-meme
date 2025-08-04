import Searchbar from '@/components/Searchbar';

export default function CariVideo({ children }) {
  return (
    <div className='p-6 min-h-full bg-[#f3f3f3] flex justify-center items-center'>
      <div className='flex flex-col items-center gap-8 w-full space-y-6'>
        <div className='flex items-center gap-1'>
          <p className='text-2xl'>🎰</p>
          <span className='text-xl font-bold'>Anti Judol</span>
        </div>
        <Searchbar />
      </div>
    </div>
  );
}
