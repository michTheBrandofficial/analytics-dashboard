import { VStack } from "nixix/view-components";
import {SideBarIcons, ThemeIcons, ToolIcons} from './Icons'

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
      <div className="w-full h-fit column items-center justify-center bg-transparent gap-4">
        {SideBarIcons.map(Icon => (
          <div className="w-fit h-fit cursor-pointer"><Icon /></div>
        ))}
      </div>

      {/* Theme */}
      <div className="w-full h-fit column items-center justify-center bg-transparent gap-4">
        {ThemeIcons.map(Icon => (
          <div className="w-fit h-fit cursor-pointer"><Icon /></div>
        ))}
      </div>

      {/* Tools */}
      <div className="mt-auto w-full h-fit column items-center justify-center bg-transparent gap-4">
        {ToolIcons.map(Icon => (
          <div className="w-fit h-fit cursor-pointer"><Icon /></div>
        ))}
      </div>
    </VStack>
  );
};

export default Sidebar;
