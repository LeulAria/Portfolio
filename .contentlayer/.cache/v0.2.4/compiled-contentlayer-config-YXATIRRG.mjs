// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: [`**/*.md`],
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YXATIRRG.mjs.map
