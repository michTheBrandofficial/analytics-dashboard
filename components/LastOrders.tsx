import { For } from "nixix/hoc";
import { HStack, VStack } from "nixix/view-components";
import Divider from "./Divider";
import data from "@/public/data/last-orders.json";
import { entries } from "@/lib";
import Order from "./Order";

const LastOrderTable = () => {
  const columns = ["Name", "Date", "Amount", "Status", "Invoice"];
  return (
    <section className='w-full flex-grow column gap-4'>
      <HStack className='w-full h-fit pr-4 text-text_5 text-sm grid geeg-grid-cols-5'>
        <For each={columns}>
          {(column, i) => {
            return <h1>{column}</h1>;
          }}
        </For>
      </HStack>
      <Divider />
      <VStack className='w-full flex-grow column  font-Jakarta_Sans font-medium text-sm gap-4'>
        {/* Order */}
        <For each={entries(data)}>
          {([, item]) => {
            return (
              <div className="fit w-full column gap-4 last:no-divider">
                <Order {...item} />
                <Divider />
              </div>
            );
          }}
        </For>
      </VStack>
    </section>
  );
};

const LastOrders = (): someView => {
  return (
    <VStack className='h-fit font-Jakarta_Sans font-semibold bg-white border border-border_1 rounded-xl p-4 pb-5 column gap-4'>
      <div className='w-full h-fit flex justify-between items-center'>
        <h1>Last Orders</h1>
        <h1 className='text-text_4'>See All</h1>
      </div>
      <LastOrderTable />
    </VStack>
  );
};

export default LastOrders;
