import { HStack } from "nixix/view-components";
import Section from "./Section";
import { GraphDown, UpArrow, GraphIcons, GraphUp, DownArrow } from "./Icons";
import { Show } from "nixix/hoc";
import { concat, memo, signal } from "nixix/primitives";
import { formatNum } from "@/lib";
import Capsule from "./Capsule";

type KeyofGraphs = Helpers.Keyof<typeof GraphIcons>;

const graphNames: {
  [index in KeyofGraphs]: string;
} = {
  income: "Total Income",
  order: "Total Order",
  refund: "Total Refund",
  sales: "Average Sales",
};

const upClass = "text-text_4 bg-bg_2";
const downClass = "text-text_9 bg-bg_3";

const Graph = (props?: TGraph & { name: KeyofGraphs }): someView => {
  const Icon = GraphIcons[props?.name!];
  const [increase] = signal<boolean>(props?.increase!);
  const growth = memo(() => {
    return increase.value ? upClass : downClass;
  }, [increase]);
  return (
    <Section.Bordered className='font-normal px-3 pt-2 pb-2 column justify-between text-text_11 '>
      <HStack className='w-full h-fit items-center justify-between'>
        <div className='fit p-2 border border-border_1 rounded-full'>
          <Icon />
        </div>

        <div className='fit'>
          <Show
            switch={increase}
            when={() => increase.value}
            fallback={<GraphDown />}>
            <GraphUp />
          </Show>
        </div>
      </HStack>

      <h1>{graphNames[props!.name]}</h1>

      <p className='text-lg text-text_1 '>
        {props?.name === "income" ? formatNum(props?.total, 3, 'USD') : props?.total}
      </p>

      <Capsule className='w-full h-fit items-center justify-between text-sm'>
        <div
          className={concat`fit px-2 py-1 rounded-full ${growth} flex items-center gap-2`}>
          <Show
            switch={increase}
            when={() => increase.value}
            fallback={<DownArrow />}>
            <UpArrow />
          </Show>
          <p>{props?.percentage}%</p>
        </div>
        <p className='text-[12px]'>vs. previous month</p>
      </Capsule>
    </Section.Bordered>
  );
};

export default Graph;
