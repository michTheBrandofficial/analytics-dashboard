import { For } from "nixix/hoc";
import Graph from "./Graph";
import Section from "./Section";
import data from '@/src/data/graphs.json'
import { entries } from "@/lib";

const Graphs = (): someView => {
  return (
    <Section className='grid grid-cols-2 grid-rows-2 p-0 pb-0 gap-3 font-Jakarta_Sans '>
      <For each={entries(data)}>
        {([id, value]) => {
          return <Graph {...value} name={id} />;
        }}
      </For>
    </Section>
  );
};

export default Graphs;
