import { VStack } from "nixix/view-components";
import Header from "./Header";
import LastOrders from "./LastOrders";
import TopPlatform from "./TopPlatform";
import Trends from "./Trends";
import Graphs from "./Graphs";

const Container = (): someView => {
  return (
    <VStack className="flex-grow h-full bg-white column" >
      <Header />
      <VStack className="w-full h-fit bg-white grid geeg-grid-cols-2 geeg-grid-rows-2 p-4 gap-4" >
        <Trends />
        <Graphs />
        <LastOrders />
        <TopPlatform />
      </VStack>
    </VStack>
  )
}

export default Container;