import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { useTech } from "@/context/data";
import { DataTable } from "mantine-datatable";
import { Pagination } from "@mantine/core";
import { useState } from "react";

export function Table() {
  const { techData } = useTech();

  const [page, setPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [searchName, setSearchName] = useState("");

  const handleChangeSelect = (value) => {
    setRecordsPerPage(Number(value));
    setPage(1);
  };

  const filteredData = techData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase()) ||
      item.teams.some((team) =>
        team.toLowerCase().includes(searchName.toLowerCase())
      )
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
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

  const badgeVariants = [
    "bg-label-primary",
    "bg-label-secondary",
    "bg-label-success",
    "bg-label-danger",
    "bg-label-warning",
    "bg-label-info",
    "bg-label-dark",
  ];

  function getRandomVariant() {
    const index = Math.floor(Math.random() * badgeVariants.length);
    return badgeVariants[index];
  }

  return (
    <Card height="height-100">
      <h3 className="card-title">Lista de dados</h3>
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-md-between align-items-md-center mb-3">
        <div className="col-12 col-md-2 col-lg-1 flex-shrink-0">
          <Select
            id="selectRecordsPerPage"
            options={options}
            onChangeValue={handleChangeSelect}
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
        withPagination={false}
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
            render: (record) => (
              <div className="d-flex flex-wrap gap-1">
                {record.teams.map((team, idx) => (
                  <Badge key={idx} className={getRandomVariant()}>
                    {team}
                  </Badge>
                ))}
              </div>
            ),
          },
        ]}
        records={paginatedData}
        noRecordsText="Parece que não há registros na tabela"
        minHeight={300}
      />

      {totalPages > 1 && (
        <div
          className="d-flex justify-content-between align-items-center mt-3 bg-label-primary"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {`Exibindo ${(page - 1) * recordsPerPage + 1} a ${Math.min(
              page * recordsPerPage,
              filteredData.length
            )} de ${filteredData.length} resultados encontrados`}
          </div>

          <Pagination
            total={totalPages}
            value={page}
            onChange={setPage}
            size="sm"
            styles={{
              control: {
                borderColor: "#dee2e6",
                color: "#343a40",
              },
            }}
          />
        </div>
      )}
    </Card>
  );
}
