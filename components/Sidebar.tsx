import { VStack } from "nixix/view-components";
import { SideBarIcons, ThemeIcons, ToolIcons } from "./Icons";
import { For } from "nixix/hoc";

const Sidebar = (): someView => {
  return (
    <VStack className='w-fit h-full bg-bg-1 border-2 border-border-1 py-3 column gap-3'>
      <div className='w-full h-fit px-4'>
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
        <div className="w-1 h-6 rounded-s-full bg-black absolute top-2 right-0" />
      </div>

      {/* Theme */}
      <div className='w-full h-fit column items-center justify-center bg-transparent gap-4'>
        <For each={ThemeIcons}>
          {(Icon) => (
            <div className='w-fit h-fit cursor-pointer'>
              <Icon />
            </div>
          )}
        </For>
      </div>

      {/* Tools */}
      <div className='mt-auto w-full h-fit column items-center justify-center bg-transparent gap-4'>
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
