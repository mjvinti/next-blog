import Image from "next/image";

import classes from "./post-header.module.css";

const PostHeader = ({ image, title }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image alt={title} height={150} src={image} width={200} />
    </header>
  );
};

export default PostHeader;
