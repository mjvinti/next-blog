import PostItem from "./post-item";

import classes from "./posts-grid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post, i) => (
        <PostItem key={i} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
