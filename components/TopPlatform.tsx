import { entries, showIncrease } from "@/lib";
import Section from "./Section";
import data from "@/src/data/top-platforms.json";
import { For } from "nixix/hoc";

type TPlatfromMetric = (typeof data)[Helpers.Keyof<typeof data>];

const colors = ["bg-purple", "bg-blue", "bg-orange", "bg-red"];

const Platform = ({
  lastPercentage,
  currentPercentage,
  ...props
}: TPlatfromMetric & { key?: number }) => {
  const price = Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(props?.price)

  return (
    <div className='w-full h-fit column gap-3'>
      <h1 className='font-semibold text-text_3'>{props?.name}</h1>
      <div className='w-full h-3 bg-gray rounded-full'>
        <div
          className={`h-full ${colors[props?.key!]} rounded-full`} style={{
            width: `${currentPercentage}%`
          }} ></div>
      </div>
      <div className='w-full h-fit flex items-center justify-between text-text_10'>
        <p>{price}</p>
        <p>{showIncrease(currentPercentage - lastPercentage)}%</p>
      </div>
    </div>
  );
};

const TopPlatform = (): someView => {
  return (
    <Section className='column gap-4'>
      <div className='w-full h-fit flex justify-between items-center'>
        <h1>Top Platform</h1>
        <h1 className='text-text_4'>See All</h1>
      </div>

      <section className='w-full flex-grow column gap-4 font-Jakarta_Sans'>
        <For each={entries(data)}>
          {([, platform], i) => {
            return (
              <Platform
                {...platform}
                key={i}></Platform>
            );
          }}
        </For>
      </section>
    </Section>
  );
};

export default TopPlatform;
