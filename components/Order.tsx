import { formatNum } from "@/lib";
import { DocDownload } from "./Icons";

const Order = (props: TOrder): someView => {
  return (
    <div className='w-full h-fit grid geeg-grid-cols-5 place-content-center items-center pr-4'>
      <div className='fit flex items-center gap-3 mr-auto'>
        <img
          src={props.pfp}
          alt='Pfp'
          width={"auto"}
          height={"auto"}
        />
        <p className='min-w-fit text-text_6'>{props.name}</p>
      </div>
      <p className='min-w-fit text-text_7'>{props.date}</p>
      <p className='min-w-fit text-text_8'>{formatNum(props.amount, 0, "USD")}</p>
      <p className={`min-w-fit ${props.status === "Paid" ? "text-text_4" : "text-text_9"}`}>
      {props.status}
      </p>
      <div className='fit flex gap-1 items-center text-sm text-text_8'>
        <DocDownload />
        <p>View</p>
      </div>
    </div>
  );
};

export default Order;
