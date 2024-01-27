import { For } from "nixix/hoc";

const Months = (): someView => {
  const months: str[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return <For each={months}>{(month) => <p>{month}</p>}</For>;
};

export default Months;
