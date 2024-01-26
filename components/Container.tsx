import { VStack } from "nixix/view-components";
import Header from "./Header";
import LastOrders from "./LastOrders";
import TopPlatform from "./TopPlatform";

const Container = (): someView => {
  return (
    <VStack className="flex-grow h-full bg-white column" >
      <Header />
      <VStack className="w-full flex-grow bg-white grid geeg-grid-cols-2 p-4 gap-4" >
        <LastOrders />
        <TopPlatform />
      </VStack>
    </VStack>
  )
}

export default Container;