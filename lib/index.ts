import { EmptyObject } from "nixix";

export function entries<T extends EmptyObject<any>>(obj: T) {
  return Object.entries(obj)
}

export function has$(str: string) {
  return str.startsWith('$') ? str : `$${str}`;
}

export function showIncrease(num: int) {
  const str = String(num);
  return str.startsWith('-') ? str : (
    str.startsWith('+') ? str : `+${str}`
  )
}