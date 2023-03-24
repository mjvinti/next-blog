import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps({ params: { slug } }) {
  const post = getPostData(slug);
  return { props: { post }, revalidate: 600 };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
