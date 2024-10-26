"use client";
import classNames from "classnames/bind";
import { useState } from "react";
import Image from "next/image";
import styles from "./Description.module.sass";
export const Description = () => {
  const [hasBorder, setBorder] = useState(false);
  const handleClick = () => setBorder(!hasBorder);
  const ctx = classNames.bind(styles);
  const buttonStyles = ctx("Description__button", {
    "Description__button--border": hasBorder,
  });
  console.log(hasBorder);
  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="Productos marketplace"
            width={500}
            height={300}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow s Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
