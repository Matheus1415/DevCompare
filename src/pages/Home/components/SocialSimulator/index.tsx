import { useState } from "react";
import {
  Group,
  Text,
  Title,
  Table,
  Badge,
  SimpleGrid,
  Tooltip,
} from "@mantine/core";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import Swal from "sweetalert2";

type User = { id: number; name: string };
type Relation = { from: number; to: number; type: "friend" | "follow" };

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bruno" },
  { id: 3, name: "Carla" },
];

export default function SocialSimulator() {
  const [relations, setRelations] = useState<Relation[]>([]);

  const helpButton = () => {
    Swal.fire({
      title: "Simulador de Rede Social",
      html: `
        <p>Esta sessão demonstra <strong>relações simétricas e não simétricas</strong>:</p>
        <ul class="list-group list-group-flush text-start">
            <li class="list-group-item d-flex align-items-start">
            <i class="bx bx-user-plus me-2 fs-5 text-primary"></i>
            <div>
                <strong>Amizade</strong> (simétrica): Se A é amigo de B, B também é amigo de A.
            </div>
            </li>
            <li class="list-group-item d-flex align-items-start">
            <i class="bx bx-show me-2 fs-5 text-warning"></i>
            <div>
                <strong>Seguir</strong> (não simétrica): A segue B, mas B pode não seguir A.
            </div>
            </li>
        </ul>
        <p class="mt-3">
            Você pode clicar nos botões para criar conexões entre usuários e visualizar como os tipos de relação funcionam.
        </p>
        `,
      icon: "info",
      confirmButtonText: "Entendi",
    });
  };

  function addRelation(from: number, to: number, type: "friend" | "follow") {
    const exists = relations.some(
      (r) => r.from === from && r.to === to && r.type === type
    );

    if (exists) {
      Swal.fire({
        icon: "warning",
        title: "Relação já existe",
        text: `A relação ${
          type === "friend" ? "Amizade" : "Seguindo"
        } entre esses usuários já foi adicionada.`,
        confirmButtonText: "OK",
      });
      return;
    }

    if (type === "friend") {
      setRelations((prev) => [
        ...prev,
        { from, to, type },
        { from: to, to: from, type },
      ]);
    } else {
      setRelations((prev) => [...prev, { from, to, type }]);
    }
  }

  function removeRelation(r: Relation) {
    const relationsFiltered = relations.filter(
      (res) => !(res.from === r.from && res.to === r.to && res.type === r.type)
    );
    setRelations(relationsFiltered);
  }

  return (
    <Card className="mt-6">
      <Button
        className="btn-sm d-flex justify-content-center align-items-center gap-1 btn-info"
        onClick={helpButton}
      >
        <i className="bx bxs-info-circle" style={{ fontSize: "16px" }}></i>{" "}
        Tutorial
      </Button>
      <div>
        <Title order={2} className="mb-3">
          Simulador de Rede Social
        </Title>
        <Text className="mb-4">
          Crie conexões entre usuários para entender relações{" "}
          <Badge color="green" variant="light">
            Simétricas
          </Badge>{" "}
          (amizade) e{" "}
          <Badge color="blue" variant="light">
            Não Simétricas
          </Badge>{" "}
          (seguindo).
        </Text>

        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 992, cols: 2, spacing: "md" },
            { maxWidth: 576, cols: 1, spacing: "sm" },
          ]}
        >
          {users.map((u) => (
            <Card
              key={u.id}
              shadow="sm"
              radius="md"
              padding="md"
              className="text-center"
            >
              <div className="mb-2">
                <span
                  className="badge bg-primary rounded-circle p-3 fs-6"
                  style={{
                    maxWidth: "80px!important",
                    maxHeight: "80px!important",
                  }}
                >
                  {u.name.charAt(0).toUpperCase()}
                </span>
              </div>

              <Title order={4} mb="xs">
                {u.name}
              </Title>
              <Text size="sm" color="dimmed" mb="md">
                Conectar com:
              </Text>

              <div className="d-flex justify-content-center align-items-center gap-1">
                {users
                  .filter((x) => x.id !== u.id)
                  .map((target) => (
                    <Group key={target.id}>
                      <Tooltip label={`Amizade com ${target.name}`}>
                        <Button
                          variant="info"
                          size="icon"
                          onClick={() => addRelation(u.id, target.id, "friend")}
                          className="d-flex btn-sm align-items-center gap-1 flex-grow-1"
                        >
                          <i className="bx bx-user-plus fs-5"></i>
                        </Button>
                      </Tooltip>

                      <Tooltip label={`Seguir ${target.name}`}>
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => addRelation(u.id, target.id, "follow")}
                          className="d-flex btn-sm align-items-center gap-1 flex-grow-1"
                        >
                          <i className="bx bx-show fs-5"></i>
                        </Button>
                      </Tooltip>
                    </Group>
                  ))}
              </div>
            </Card>
          ))}
        </SimpleGrid>

        <Card className="mt-2">
          <Title order={4} className="mb-3">
            Relações Criadas
          </Title>
          {relations.length === 0 ? (
            <Text color="dimmed" align="center" my="md">
              Nenhuma conexão criada ainda.
            </Text>
          ) : (
            <div className="table-responsive">
              <Table
                striped
                highlightOnHover
                withBorder
                className="text-center"
              >
                <thead className="table-light">
                  <tr>
                    <th>Origem</th>
                    <th>Tipo de Relação</th>
                    <th>Destino</th>
                    <th>Simetria</th>
                    <th>Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {relations.map((r, idx) => {
                    const fromUser = users.find((u) => u.id === r.from)?.name;
                    const toUser = users.find((u) => u.id === r.to)?.name;
                    // Verifica se é simétrica
                    const isSymmetric = relations.some(
                      (rel) =>
                        rel.from === r.to &&
                        rel.to === r.from &&
                        rel.type === r.type
                    );
                    return (
                      <tr key={idx}>
                        <td>{fromUser}</td>
                        <td>
                          {r.type === "friend" ? (
                            <Badge
                              color="green"
                              variant="filled"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <i className="bx bx-user-plus me-1"></i> Amizade
                            </Badge>
                          ) : (
                            <Badge
                              color="blue"
                              variant="filled"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <i className="bx bx-show me-1"></i> Seguindo
                            </Badge>
                          )}
                        </td>
                        <td>{toUser}</td>
                        <td>
                          <Badge
                            color={isSymmetric ? "teal" : "yellow"}
                            variant="light"
                          >
                            {isSymmetric ? "Simétrica" : "Não Simétrica"}
                          </Badge>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            rounded="round"
                            className="btn-sm"
                            size="icon"
                            onClick={() => removeRelation(r)}
                          >
                            <i
                              className="bx bx-x-circle"
                              style={{ fontSize: "16px" }}
                            ></i>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
        </Card>
      </div>
    </Card>
  );
}
