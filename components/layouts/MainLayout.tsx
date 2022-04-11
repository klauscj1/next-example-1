import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../Navbar";

import styles from "./MainLayout.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
  pageName: String;
}
export const MainLayout: FC<Props> = ({ children, pageName }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageName} - clauschocho.dev</title>
        <meta name="description" content={`${pageName} page`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
