// @ts-check
import { readFile } from 'node:fs/promises'
import { normalize } from 'node:path'
import { cwd } from 'node:process';

/**
 * @typedef {import('vite').Plugin} Plugin_2
 * @typedef {`${string}/${string}.tsx` | `${string}/${string}.jsx`} EntryPoint
 */

/**
 * @param {string} str
 */
function isInNodeModules(str) {
  const nm = "node_modules";
  return str.includes(nm);
}

/**
 * @type {EntryPoint}
 */
const defaultEntryPoint = "routes/index.tsx";
const defaultDefFile = "routes/types/index.d.ts"

/**
 * @param {string} id
 * @param {EntryPoint} entryPoint
 */
function isEntryPoint(id, entryPoint) {
  return id.includes(entryPoint || defaultEntryPoint);
}

/**
 * @param {{ entryPoint: EntryPoint, definitionFile: `${string}/${string}.d.ts` }} param0
 * @returns {Plugin_2[]}
 */
function routerAutocomplete({ entryPoint, definitionFile: df }) {
  /**
   * @type {Plugin_2}
   */
  const plugin = {
    name: "nixix-router-autocomplete",
    apply: "serve",
    enforce: "post",
    transform: async (code, id, opts) => {
      switch (true) {
        case !isInNodeModules(id):
        case opts?.ssr:
          if (isEntryPoint(id, entryPoint)){
            const definitionFile = await readFile(normalize(`${cwd()}/${df || defaultDefFile}`), { encoding: 'utf-8' })
            console.log(definitionFile, code);
          }
      }
    },
  };

  return [plugin];
}

const interfaceAugmentation = `
declare module "nixix/router" {
  interface RouteLink {
    to: GenRoutePath;
  }

  interface FormActionProps {
    action: GenRoutePath;
  }
}

`

export default routerAutocomplete;
