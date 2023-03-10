import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

const DUMMY_POSTS = [
  {
    date: "2022-02-10",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
  },
  {
    date: "2022-02-10",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
  },
  {
    date: "2022-02-10",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
  },
  {
    date: "2022-02-10",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
