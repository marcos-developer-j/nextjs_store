"use client";
import styles from "app/sass/global-error.module.sass";
import Image from "next/image";
export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image
        src={"/images/error.png"}
        alt="Imagen de error"
        width={500}
        height={500}
      />
      <p className={styles.Error__message}>
        Al parecer ha ocurrido un error, pero no te sientas mal porque no se que
        decirte ni nosotros sabemos que fue lo que paso
      </p>
      <button className={styles.Error__button} onClick={reset}>
        click para volver a intentarlo
      </button>
    </main>
  );
}
