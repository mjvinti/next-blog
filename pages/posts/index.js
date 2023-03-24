import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default AllPostsPage;
