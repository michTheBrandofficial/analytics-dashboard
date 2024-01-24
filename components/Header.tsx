import { Calendar, ChevronDown, SolarBell } from "./Icons";
import SearchBar from "./SearchBar";

const Header = (): someView => {
  const baseSize = 30;
  return (
    <header className='w-full h-[72px] px-4 bg-white border-b-2 border-border_1 flex items-center font-Jakarta_Sans font-semibold'>
      <h1 className='text-xl'>Dashboard</h1>
      <section className='w-fit h-full ml-auto flex items-center gap-6'>
        <SearchBar />
        <div className='fit flex items-center gap-2 text-sm text-text_1 font-Inter font-medium'>
          <Calendar />
          <p>November 15, 2023</p>
        </div>

        <section className='fit h-full flex items-center gap-4'>
          <div className='fit p-2 border border-border_1 rounded-full'>
            <SolarBell />
          </div>

          <div className='min-w-40 min-h-1/2 rounded-full border border-border_1 px-2 py-1 font-medium flex items-center gap-2 '>
            <img
              src='/images/justin.png'
              width={baseSize}
              height={baseSize}
              alt='Justin Bergson'
            />
            <div className='flex-grow h-fit font-Inter font-normal column items-end justify-between'>
              <h1 className='text-text_3 text-sm'>Justin Bergson</h1>
              <p className='text-text_2 text-[12px]'>Justin@gmail.com</p>
            </div>
            <ChevronDown />
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
