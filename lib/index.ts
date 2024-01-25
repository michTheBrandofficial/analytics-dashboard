import { EmptyObject } from "nixix";

export function entries<T extends EmptyObject<any>>(obj: T) {
  return Object.entries(obj)
}

export function has$(str: string) {
  return str.startsWith('$') ? str : `$${str}`;
}