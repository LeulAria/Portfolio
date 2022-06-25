import { defineDocumentType, makeSource } from "contentlayer/source-files";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: [`**/*.mdx`,],
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});