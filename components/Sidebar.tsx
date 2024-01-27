import { VStack } from "nixix/view-components";
import { SideBarIcons, ThemeIcons, ToolIcons } from "./Icons";
import { For } from "nixix/hoc";
import { callReaction, callRef, concat, memo, store } from "nixix/primitives";
import { sidebarDisplay } from "@/src/reactive";
import { delay } from "@/lib";

/**
 * @todo remove hidden class
 */
const Sidebar = (): someView => {
  const iconProps = {
    width: 24,
    height: 24,
    className: 'transition-all duration-700'
  } as const;

  const arr = ["white", "#b2abab"] as ("white" | "#b2abab")[];
  const [theme, setTheme] = store<("white" | "#b2abab")[]>(arr);
  const slideMemo = memo(() => {
    return theme[0].value === "white" ? "translate-y-0" : "translate-y-[140%]";
  }, [theme]);

  const sidebarRef = callRef<HTMLElement>()

  callReaction(() => {
    if (sidebarDisplay.value === 'column') {
      delay(() =>  sidebarRef.current?.classList.replace('-translate-x-[100%]', 'translate-x-0'))
    }
  }, [sidebarDisplay])

  return (
    <VStack bind:ref={sidebarRef} className={concat`w-fit h-screen bg-bg_1 border-r-2 border-border_1 pb-3 gap-3 fixed top-0 z-30  overflow-y-scroll ${sidebarDisplay} no-scroll transition-all duration-500 -translate-x-[100%] lg:relative lg:h-full lg:column lg:translate-x-0 `}>
      <div className='w-full h-fit pt-3 px-4 sticky top-0 bg-white z-30'>
        <img
          src={"/images/logo.svg"}
          alt='Geegpay logo'
        />
      </div>

      {/* Sidebar icons */}
      <div className='w-full h-fit column items-center justify-center bg-transparent gap-4 relative'>
        <For each={SideBarIcons}>
          {(Icon) => (
            <div className='w-fit h-fit cursor-pointer'>
              <Icon />
            </div>
          )}
        </For>
        <div className='w-1 h-6 rounded-s-full bg-black absolute top-2 right-0' />
      </div>

      {/* Theme */}
      <div
        className='w-full h-fit column items-center justify-center bg-transparent gap-4 relative'
        on:click={() =>
          setTheme(() => {
            const reverse = arr.reverse();
            return reverse;
          })
        }>
        <div className='w-10 h-10 bg-transparent grid place-content-center cursor-pointer relative z-10'>
          <ThemeIcons.Sun
            {...iconProps}
            fill={theme[0]}
          />
        </div>
        <div className='w-10 h-10 bg-transparent grid place-content-center cursor-pointer relative z-10'>
          <ThemeIcons.Moon
            {...iconProps}
            fill={theme[1]}
          />
        </div>

        <div
          className={concat`w-10 h-10 rounded-full bg-bg_4 absolute top-0 transition-all duration-700 ${slideMemo} z-0`}
        />
      </div>

      {/* Tools */}
      <div className='mt-auto w-full h-fit column items-center justify-center bg-transparent gap-4 '>
        <For each={ToolIcons}>
          {(Icon) => (
            <div className='w-fit h-fit cursor-pointer'>
              <Icon />
            </div>
          )}
        </For>
      </div>
    </VStack>
  );
};

export default Sidebar;
