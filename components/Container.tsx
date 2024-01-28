import { VStack } from "nixix/view-components";
import Header from "./Header";
import LastOrders from "./LastOrders";
import TopPlatform from "./TopPlatform";
import Trends from "./Trends";
import Graphs from "./Graphs";

const Container = (): someView => {
  return (
    <VStack className="w-full h-full bg-white column lg:flex-grow lg:w-auto lg:h-full overflow-y-scroll no-scroll" >
      <Header />
      <VStack className="w-full h-fit bg-white p-4 gap-4 column lg:grid lg:geeg-grid-cols-2 lg:geeg-grid-rows-2 xl:geeg-grid-rows-2-1" >
        <Trends />
        <Graphs />
        <LastOrders />
        <TopPlatform />
      </VStack>
    </VStack>
  )
}

export default Container;