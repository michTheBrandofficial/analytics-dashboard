import Capsule from "./Capsule";
import { Calendar, ChevronDown, SearchIcon, SolarBell } from "./Icons";
import SearchBar from "./SearchBar";

const Header = (): someView => {
  const baseSize = 30;
  return (
    <header className='w-screen min-h-[72px] px-4 bg-white border-b-2 border-border_1 flex items-center font-Jakarta_Sans sticky top-0 z-[25] font-semibold lg:w-full'>
      <h1 className='text-xl'>Dashboard</h1>
      <section className='w-fit h-full ml-auto items-center gap-6 flex '>
        <SearchIcon className={'lg:hidden'} />
        <SearchBar className="hidden lg:flex lg:w-60 lg:max-w-none " />
        <div className='fit items-center gap-2 text-sm text-text_1 font-Inter font-medium hidden lg:flex'>
          <Calendar />
          <p>November 15, 2023</p>
        </div>

        <section className='fit h-full items-center gap-4 flex'>
          <div className='fit p-2 border border-border_1 rounded-full'>
            <SolarBell />
          </div>

          <Capsule.Bordered className='min-w-40 min-h-1/2  px-2 py-1 font-medium gap-2 hidden lg:flex '>
            <img
              src='/images/justin.png'
              width={baseSize}
              height={baseSize}
              alt='Justin Bergson'
            />
            <div className='flex-grow h-fit font-Inter font-normal column items-end justify-between'>
              <h1 className='text-text_1 text-sm'>Justin Bergson</h1>
              <p className='text-text_2 text-[12px]'>Justin@gmail.com</p>
            </div>
            <ChevronDown />
          </Capsule.Bordered>
        </section>
      </section>
    </header>
  );
};

export default Header;
