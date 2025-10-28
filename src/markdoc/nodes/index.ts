import image from "./image.ts"
import link from "./link.ts"
import fence from "./fence.ts"
import type { Config } from "markdoc-svelte"

const nodes: Config["nodes"] = {
  image,
  link,
  fence
}

export default nodes
