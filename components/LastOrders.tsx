import { For } from "nixix/hoc";
import { HStack, VStack } from "nixix/view-components";

const LastOrderTable = () => {
  const columns = ["Name", "Date", "Amount", "Status", "Invoice"];
  return (
    <section className='w-full flex-grow space-y-3'>
      <HStack className='w-full h-fit pr-4 text-text_5 text-sm gap-20'>
        <For each={columns}>
          {(column, i) => {
            return <h1 className={i === 0 ? 'mr-auto' : ''} >{column}</h1>;
          }}
        </For>
      </HStack>
      <div className="w-full border-y border-border_4" />
    </section>
  );
};

const LastOrders = (): someView => {
  return (
    <VStack className='font-Jakarta_Sans font-semibold bg-white border border-border_1 rounded-xl p-3 column gap-3'>
      <div className='w-full h-fit flex justify-between items-center'>
        <h1>Last Orders</h1>
        <h1 className='text-text_4'>See All</h1>
      </div>
      <LastOrderTable />
    </VStack>
  );
};

export default LastOrders;
