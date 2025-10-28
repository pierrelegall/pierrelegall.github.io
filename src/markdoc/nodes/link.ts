import { Markdoc } from "markdoc-svelte"
import type { Config } from "markdoc-svelte"

const link: Config["nodes"] = {
  link: {
    render: "Link",
    attributes: {
      ...Markdoc.nodes.link.attributes
    }
  }
}

export default link.link
