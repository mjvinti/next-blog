import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          alt="An image showing Mario"
          height={300}
          src="/images/site/mario.png"
          width={300}
        />
      </div>
      <h1>Hi, I am Mario</h1>
      <p>
        I blog about web development - especially front end frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
