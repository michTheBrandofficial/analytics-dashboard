import { callRef, concat, memo, signal } from "nixix/primitives";
import Capsule from "./Capsule";
import { Calendar, ChevronDown, SearchIcon, SolarBell } from "./Icons";
import SearchBar from "./SearchBar";
import Section from "./Section";
import { delay } from "@/lib";
import { setSidebarDisplay } from "@/src/reactive";

const Header = (): someView => {
  const baseSize = 30;
  const [display, setDisplay] = signal<boolean>(true);
  const inputRef = callRef<HTMLInputElement>();
  const displayMemo = memo(() => {
    if (display.value) return ["flex", "hidden"] as const;
    else {
      delay(() => inputRef.current?.focus());
      return ["hidden", "flex"];
    }
  }, [display]);
  const handleBlur = () => {
    window.innerWidth < 1024 && setDisplay(!display.value);
  };

  const [menuDisplay, setMenuDisplay] = signal<"flex" | "hidden">("hidden");
  const rotationMemo = memo(
    () => (menuDisplay.value === "flex" ? "rotate-180" : "rotate-0 "),
    [menuDisplay]
  );
  return (
    <header className='w-screen min-h-[72px] px-4 bg-white border-b-2 border-border_1 flex items-center font-Jakarta_Sans sticky top-0 z-[25] font-semibold lg:w-full'>
      <h1 className='text-xl'>Dashboard</h1>
      <section className='w-fit h-full ml-auto items-center gap-4 flex lg:gap-6 '>
        <SearchIcon
          className={concat`${displayMemo[0]} lg:hidden`}
          on:click={() => setDisplay(false)}
        />
        <SearchBar
          on:blur={handleBlur}
          bind:ref={inputRef}
          className={concat`ml-auto ${displayMemo[1]} lg:flex lg:w-60 lg:max-w-none `}
        />
        <div className='fit items-center gap-2 text-sm text-text_1 font-Inter font-medium hidden lg:flex'>
          <Calendar />
          <p>November 15, 2023</p>
        </div>

        <section
          className={concat`fit h-full items-center gap-2 ${displayMemo[0]} relative lg:gap-4`}>
          <div className='fit p-2 border border-border_1 rounded-full'>
            <SolarBell />
          </div>

          <Capsule.Bordered
            on:click={() =>
              setMenuDisplay((prev) => (prev === "flex" ? "hidden" : "flex"))
            }
            className={concat`min-w-fit p-1 font-medium gap-2 ${displayMemo[0]} lg:min-w-40 lg:px-2`}>
            <img
              src='/images/justin.png'
              width={baseSize}
              height={baseSize}
              alt='Justin Bergson'
            />
            <div
              className={`flex-grow h-fit font-Inter font-normal items-end justify-between hidden lg:column`}>
              <h1 className='text-text_1 text-sm'>Justin Bergson</h1>
              <p className='text-text_2 text-[12px]'>Justin@gmail.com</p>
            </div>
            <ChevronDown
              className={concat`${rotationMemo} transition-all duration-500 hidden lg:block `}
            />
          </Capsule.Bordered>

          {/* menu */}
          <Section.Bordered
            on:click={() => setMenuDisplay("hidden")}
            className={concat`w-[160%] h-40 px-4 py-5 absolute z-40 top-14 right-0 ${menuDisplay} focus:text-red-300 lg:w-full lg:h-60`}>
            <p on:click={() => setSidebarDisplay("column")}>Menu</p>
          </Section.Bordered>
        </section>
      </section>
    </header>
  );
};

export default Header;
