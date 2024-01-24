import { TextField } from "nixix/view-components";
import { SearchIcon } from "./Icons";

const SearchBar = (): someView => {
  return (
    <div className="w-60 h-1/2 rounded-full border border-border_1 py-1 px-3 font-medium flex items-center gap-2 ">
      <SearchIcon />
      <TextField placeholder="Search..." className="w-1/2 h-full border-none focus:outline-none text-[#A3A3A3]" />
    </div>
  )
}

export default SearchBar;