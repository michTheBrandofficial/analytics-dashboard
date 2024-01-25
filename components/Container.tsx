import { VStack } from "nixix/view-components";
import Header from "./Header";
import LastOrders from "./LastOrders";

const Container = (): someView => {
  return (
    <VStack className="flex-grow h-full bg-white column" >
      <Header />
      <VStack className="w-full flex-grow bg-white grid grid-cols-2 p-4 gap-4" >
        <LastOrders />
      </VStack>
    </VStack>
  )
}

export default Container;