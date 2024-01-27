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
