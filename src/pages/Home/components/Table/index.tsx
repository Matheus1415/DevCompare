import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { useTech } from "@/context/data";
import { DataTable } from "mantine-datatable";
import { useState } from "react";

export function Table() {
  const { techData, setTechData } = useTech();
  
  const data = techData;

  const [page, setPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [searchName, setSearchName] = useState("");
  const [searchDescription, setSearchDescription] = useState("");

  const handleChargeSelect = (value) => {
    setRecordsPerPage(Number(value));
    setPage(1);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase()) &&
      item.description.toLowerCase().includes(searchDescription.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (page - 1) * recordsPerPage,
    page * recordsPerPage
  );

  const options = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
  ];

  return (
    <Card height="height-100">
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-md-between align-items-md-center mb-3">
        <div className="col-12 col-md-2 col-lg-1 flex-shrink-0">
          <Select
            id="selectRecordsPerPage"
            options={options}
            onChangeValue={handleChargeSelect}
          />
        </div>
        <div className="col-12 col-md-8 col-lg-8 d-flex gap-1 gap-md-4 justify-content-between align-items-center flex-shrink-0">
          <Input
            id="filterCategorie"
            placeholder="Filtre uma Tecnologia"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </div>

      <DataTable
        className="custom-table"
        striped
        highlightOnHover
        columns={[
          {
            accessor: "id",
            title: "ID",
            render: (record) => <>#{record.id}</>,
          },
          {
            accessor: "name",
            title: "Tecnologia",
          },
          {
            accessor: "teams",
            title: "Times",
            render: (record) => record.teams.join(", "),
          },
          {
            accessor: "category",
            title: "Categoria",
          },
          {
            accessor: "description",
            title: "Descrição",
          },
        ]}
        records={paginatedData}
        totalRecords={filteredData.length}
        recordsPerPage={recordsPerPage}
        page={page}
        onPageChange={setPage}
        noRecordsText="Parece que não há registros na tabela"
        minHeight={300}
      />
    </Card>
  );
}
