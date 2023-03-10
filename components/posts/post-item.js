import Image from "next/image";
import Link from "next/link";

import classes from "./post-item.module.css";

const PostItem = ({ post: { date, excerpt, image, slug, title } }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    imagePath = `/images/posts/${slug}/${image}`,
    linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            alt={title}
            href={slug}
            fill
            priority
            sizes="100%"
            src={imagePath}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
