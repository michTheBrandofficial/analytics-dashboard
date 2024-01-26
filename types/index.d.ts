import orders from "@/src/data/last-orders.json";
import graphs from "@/src/data/graphs.json";
import platforms from "@/src/data/top-platforms.json";
import { EmptyObject } from "nixix";
export {};

declare global {
  // types
  interface int extends Number {}
  interface str extends String {}

  type TOrder = (typeof orders)["id-geeg1ad"];

  type TGraph = (typeof graphs)[Helpers.Keyof<typeof graphs>];

  type TPlatfrom = (typeof platforms)[Helpers.Keyof<typeof platforms>];

  // helper types
  namespace Helpers {
    type Keyof<T extends EmptyObject<any>> = keyof T;
  }
}
