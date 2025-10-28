import { Markdoc } from "markdoc-svelte"
import type { Config } from "markdoc-svelte"

const fence: Config["nodes"] = {
  fence: {
    render: "CodeBlock",
    attributes: {
      ...Markdoc.nodes.fence.attributes,
      language: { type: String },
      content: { type: String }
    }
  }
}

export default fence.fence
