import { signal } from "nixix/primitives";

export const [sidebarDisplay, setSidebarDisplay] = signal<'hidden' | 'column'>('hidden')