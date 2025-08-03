import { HomeLayout } from "@/layouts/HomeLayout";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

export function Home() {
  return (
    <HomeLayout>
      <Header />
      <Table />
    </HomeLayout>
  );
}
