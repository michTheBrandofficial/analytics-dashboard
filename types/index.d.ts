import orders from '@/public/data/last-orders.json'
export {}

declare global {
  // types 
  type TOrder = typeof orders['id-geeg1ad'];

  // helper types
  namespace Helpers {

  }
}