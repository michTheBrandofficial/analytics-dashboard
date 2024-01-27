import { EmptyObject } from "nixix";

export function entries<T extends EmptyObject<any>>(obj: T) {
  return Object.entries(obj);
}

export function has$(str: string) {
  return str.startsWith("$") ? str : `$${str}`;
}

export function showIncrease(num: int) {
  const str = String(num);
  return str.startsWith("-") ? str : str.startsWith("+") ? str : `+${str}`;
}

export function formatNum(value: any, fixed: number, currency?: 'USD') {
  const config = currency ? { style: 'currency', currency } : { style: undefined }

  return Intl.NumberFormat(undefined, { ...config, maximumFractionDigits: fixed }).format(
    value
  );
}

export function makeArray(length: int) {
  return Array(length).fill('')
}

export function len(arr:any[]) {
  return arr.length;
}

export function random<T>(arr: T[]) {
  const item = arr[Math.floor(Math.random() * (len(arr) - 1))]
  console.log(item);
  return item;
}