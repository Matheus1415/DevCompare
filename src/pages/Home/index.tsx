import { HomeLayout } from "@/layouts/HomeLayout";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Diagram } from "./components/Diagram";

export function Home() {
  return (
    <HomeLayout>
      <Header />
      <Table />
      <Diagram/>
    </HomeLayout>
  );
}
