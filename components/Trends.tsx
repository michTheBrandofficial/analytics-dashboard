import { HStack, VStack } from "nixix/view-components";
import Section from "./Section";
import Capsule from "./Capsule";
import { ChevronDown } from "./Icons";
import { For } from "nixix/hoc";
import { formatNum, makeArray, random } from "@/lib";
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
  const highestClass = "bg-gradient-to-b from-grad_1000 from-50% to-grad_0";
  const lowClass = "bg-grad_10";
  type THeight = "h-1/5" | "h-2/5" | "h-1/2" | "h-[60%]" | "h-4/5" | "";
  const heights: THeight[] = ["h-1/2", "h-1/5", "h-2/5", "h-4/5", "h-[60%]"];

  return (
    <HStack className='full relative z-10 items-end justify-between gap-2 lg:gap-0 '>
      <For each={makeArray(12)}>
        {(_, i) => {
          const heightClass = random(heights);
          const bgClass = heightClass === "h-4/5" ? highestClass : lowClass;
          return (
            <div
              className={`w-[22px] h-1/5 rounded-t-full ${heightClass} ${bgClass}`}
            />
          );
        }}
      </For>
    </HStack>
  );
};

const Trends = (): someView => {
  const numbers: int[] = [50, 40, 30, 20, 10, 5, 0];

  return (
    <Section.Bordered className='w-full p-4 pb-5 column gap-4 font-Jakarta_Sans lg:w-auto lg:grid lg:geeg-grid-rows-0-1'>
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
        <VStack className='w-fit h-full pb-6 column gap-3 justify-between text-sm lg:gap-0 '>
          <For each={numbers}>
            {(item) => <p>{formatNum(item * 1000, 0)}</p>}
          </For>
        </VStack>

        <VStack className='flex-grow overflow-scroll no-scroll '>
          <VStack className='h-full w-fit column lg:w-full'>
            <VStack className='w-full h-full relative lg:flex-grow'>
              <DottedLines />
              <Histogram />
            </VStack>

            <HStack className='w-full min-h-6 pt-2 items-center justify-between gap-10 text-sm mt-auto lg:gap-0'>
              <Months />
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Section.Bordered>
  );
};

export default Trends;
