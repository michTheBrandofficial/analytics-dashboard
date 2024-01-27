import { For } from "nixix/hoc";
import Graph from "./Graph";
import Section from "./Section";
import data from '@/src/data/graphs.json'
import { entries } from "@/lib";

const Graphs = (): someView => {
  return (
    <Section className='column place-content-center p-0 pb-0 gap-3 font-Jakarta_Sans bsm:grid bsm:grid-cols-2 bsm:grid-rows-2  '>
      <For each={entries(data)}>
        {([id, value]) => {
          return <Graph {...value} name={id} />;
        }}
      </For>
    </Section>
  );
};

export default Graphs;
