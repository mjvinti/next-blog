import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const PostContent = ({ post: { content, image, paragraph, slug, title } }) => {
  const imagePath = `/images/posts/${slug}/${image}`;
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       alt={image.alt}
    //       height={300}
    //       src={`/images/posts/${slug}/${image.src}`}
    //       width={600}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              alt={image.alt}
              height={300}
              src={`/images/posts/${slug}/${image.properties.src}`}
              width={600}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
