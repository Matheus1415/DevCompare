import { HomeLayout } from "@/layouts/HomeLayout";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Diagram } from "./components/Diagram";
import SocialSimulator from "./components/SocialSimulator";

export function Home() {
  return (
    <HomeLayout>
      <Header />
      <Table />
      <Diagram/>
      <SocialSimulator/>
    </HomeLayout>
  );
}
