import React from "react";
import Link from "next/link";
import Layout from "./layout";
import style from "./style.module.css";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <div className={style.Navcontent}>
      <Layout>
        <nav>
          <ul>
            <Link href="/">
              <a className={style.Links}>Home</a>
            </Link>
            <Link href="/feed" activeClassName={style.active}>
              <a className={style.Links}>Feed</a>
            </Link>
          </ul>
        </nav>
      </Layout>
    </div>
  );
};

export default Nav;
