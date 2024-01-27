import { TextField } from "nixix/view-components";
import { SearchIcon } from "./Icons";
import { concat } from "nixix/primitives";

const SearchBar = ({"bind:ref": ref, ...props}: Nixix.HTMLAttributes<HTMLDivElement>): someView => {
  return (
    <div className={concat`w-4/5 max-w-[200px] h-1/2 rounded-full border border-border_1 py-1 px-3 font-medium items-center gap-2  ${props?.className}`} >
      <SearchIcon />
      <TextField on:blur={props?.["on:blur"]} bind:ref={ref as any} placeholder="Search..." className="w-4/5 h-full border-none focus:outline-none text-[#A3A3A3]" />
    </div>
  )
}

export default SearchBar;