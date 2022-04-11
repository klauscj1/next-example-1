import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout pageName={"Contact"}>
      <h2>Contact page</h2>
      <h1 className={"title"}>
        Ir a <Link href="/home"> Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
