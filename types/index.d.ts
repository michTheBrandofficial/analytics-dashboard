import orders from '@/src/data/last-orders.json'
import { EmptyObject } from 'nixix';
export {}

declare global {
  // types 
  interface int extends Number {}
  interface str extends String {}

  type TOrder = typeof orders['id-geeg1ad'];

  // helper types
  namespace Helpers {
    type Keyof<T extends EmptyObject<any>> = keyof T;
  }
}