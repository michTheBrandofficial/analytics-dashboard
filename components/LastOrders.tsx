import { For } from "nixix/hoc";
import { HStack, VStack } from "nixix/view-components";
import Divider from "./Divider";
import data from "@/src/data/last-orders.json";
import { entries } from "@/lib";
import Order from "./Order";
import Section from "./Section";

const LastOrderTable = () => {
  const columns = ["Name", "Date", "Amount", "Status", "Invoice"];
  return (
    <VStack className='flex-grow overflow-x-auto no-scroll'>
      <VStack className="h-full w-[210%] column gap-4 bsm:w-[150%] sm:bsm:w-full">
        <HStack className='w-full h-fit pr-4 justify-between text-text_5 text-sm grid geeg-grid-cols-5 sm:w-full'>
          <For each={columns}>
            {(column, i) => {
              return <h1 key={i}>{column}</h1>;
            }}
          </For>
        </HStack>
        <Divider />
        <VStack className='w-full flex-grow column font-Jakarta_Sans font-medium text-sm gap-4'>
          {/* Order */}
          <For each={entries(data)}>
            {([, item], index) => {
              return (
                <div key={index} className='fit w-full column gap-4 last:no-divider'>
                  <Order {...item} />
                  <Divider />
                </div>
              );
            }}
          </For>
        </VStack>
      </VStack>
    </VStack>
  );
};

const LastOrders = (): someView => {
  return (
    <Section.Bordered className='column gap-4 px-4 pb-5'>
      <div className='w-full h-fit flex justify-between items-center pt-4 bg-inherit sticky top-0'>
        <h1>Last Orders</h1>
        <h1 className='text-text_4'>See All</h1>
      </div>
      <LastOrderTable />
    </Section.Bordered>
  );
};

export default LastOrders;
