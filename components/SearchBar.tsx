import { TextField } from "nixix/view-components";
import { SearchIcon } from "./Icons";

const SearchBar = (props?: Nixix.HTMLAttributes<HTMLDivElement>): someView => {
  return (
    <div className={"w-4/5 max-w-[150px] h-1/2 rounded-full border border-border_1 py-1 px-3 font-medium items-center gap-2 " + props?.className} >
      <SearchIcon />
      <TextField placeholder="Search..." className="w-4/5 h-full border-none focus:outline-none text-[#A3A3A3]" />
    </div>
  )
}

export default SearchBar;