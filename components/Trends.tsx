import { HStack, VStack } from "nixix/view-components";
import Section from "./Section";
import Capsule from "./Capsule";
import { ChevronDown } from "./Icons";
import { For } from "nixix/hoc";
import { formatNum } from "@/lib";
import Months from "./Months";

const DottedLines = ({ count }: { count?: number }) => {
  return (
    <section className='full column justify-between absolute z-0 left-0 top-0'>
      {Array(9)
        .fill("")
        .map((_) => (
          <div className='w-full h-[1px] dotted-border' />
        ))}
    </section>
  );
};

const Histogram = () => {
  return <HStack className='full relative z-10 items-end justify-between '>
    <div className="w-[22px] h-1/2 rounded-t-full bg-grad_10 " />
    <div className="w-[22px] h-1/2 rounded-t-full bg-grad_10 " />
  </HStack>;
};

const Trends = (): someView => {
  const numbers: int[] = [50, 40, 30, 20, 10, 5, 0];

  return (
    <Section.Bordered className='p-4 pb-5 grid geeg-grid-rows-0-1 gap-4 font-Jakarta_Sans'>
      <HStack className='w-full h-fit justify-between items-center'>
        <h1>Sales Trends</h1>
        <div className='fit flex gap-2 items-center text-text_6 text-sm'>
          <p>Sort by:</p>
          <Capsule.Bordered className='fit px-2 py-1 gap-1 text-[12px] text-text_6'>
            <p>Weekly</p>
            <ChevronDown />
          </Capsule.Bordered>
        </div>
      </HStack>
      <HStack className='w-full flex gap-4 text-text_2'>
        <VStack className='w-fit h-full pb-6 column justify-between text-sm '>
          <For each={numbers}>
            {(item) => <p>{formatNum(item * 1000, 0)}</p>}
          </For>
        </VStack>

        <VStack className='flex-grow overflow-scroll no-scroll  '>
          <VStack className='h-full w-full column '>
            <VStack className='w-full flex-grow relative '>
              <DottedLines />
              <Histogram />
            </VStack>

            <HStack className='w-full min-h-6 pt-2 items-center justify-between text-sm mt-auto'>
              <Months />
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Section.Bordered>
  );
};

export default Trends;
