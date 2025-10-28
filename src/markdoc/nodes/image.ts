import { Markdoc } from "markdoc-svelte"
import type { Config } from "markdoc-svelte"

const image: Config["nodes"] = {
  image: {
    render: "Image",
    attributes: {
      ...Markdoc.nodes.image.attributes
    }
  }
}

export default image.image
