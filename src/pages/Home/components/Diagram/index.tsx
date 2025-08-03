import { Card } from "@/components/Card";
import { Select } from "@/components/Select";
import {
  VennIntersection,
  VennDifference,
  VennEquality,
} from "@/components/VennDiagram2";
import { useTech } from "@/context/data";
import { useState } from "react";
import { Title, Text, Paper, List } from "@mantine/core";
import { Badge } from "@/components/Badge";

export function Diagram() {
  const { techData } = useTech();

  const [primaryTeam, setPrimaryTeam] = useState<string>("Time A");
  const [secondaryTeam, setSecondaryTeam] = useState<string>("Time B");
  const [diagramTypeSelected, setDiagramTypeSelected] =
    useState<string>("intersection");

  const teamOptions = [
    { value: "Time A", label: "Time A" },
    { value: "Time B", label: "Time B" },
    { value: "Time C", label: "Time C" },
    { value: "Time D", label: "Time D" },
  ];

  const diagramTypeOptions = [
    { value: "intersection", label: "Interseção" },
    { value: "difference", label: "Diferença" },
  ];

  const techsA = techData.filter((tech) => tech.teams.includes(primaryTeam));
  const techsB = techData.filter((tech) => tech.teams.includes(secondaryTeam));

  const namesA = techsA.map((t) => t.name);
  const namesB = techsB.map((t) => t.name);

  const intersection = namesA.filter((name) => namesB.includes(name));
  const difference = namesA.filter((name) => !namesB.includes(name));

  const isEqual =
    namesA.length === namesB.length &&
    namesA.every((name) => namesB.includes(name));

  let DiagramComponent = null;
  let diagramType: "equal" | "intersection" | "difference" = "intersection";

  const context = {
    teamA: primaryTeam,
    teamB: secondaryTeam,
    namesA,
    namesB,
  };

  if (isEqual) {
    diagramType = "equal";
    DiagramComponent = <VennEquality />;
  } else {
    if (diagramTypeSelected === "intersection") {
      diagramType = "intersection";
      DiagramComponent = (
        <VennIntersection
          setA={namesA.length}
          setB={namesB.length}
          intersectionSize={intersection.length}
        />
      );
    }

    if (diagramTypeSelected === "difference") {
      diagramType = "difference";
      DiagramComponent = (
        <VennDifference
          setA={namesA.length}
          setB={namesB.length}
          differenceSize={difference.length}
        />
      );
    }
  }

  return (
    <Card height="height-300" className="mt-5">
      <div className="row g-4 mb-4">
        <div className="col-6">
          <h3 className="card-title">Diagrama com base nos conjuntos</h3>
          <div className="d-flex flex-column flex-md-row gap-2 justify-content-md-between align-items-md-center mb-3">
            <div className="col-12 col-md-4 col-lg-4 flex-shrink-0">
              <Select
                id="selectPrimaryTeam"
                options={teamOptions}
                defaultValue="Time A"
                onChangeValue={(value) => setPrimaryTeam(value)}
              />
            </div>

            <div className="col-12 col-md-4 col-lg-4 flex-shrink-0">
              <Select
                id="selectSecondaryTeam"
                options={teamOptions}
                defaultValue="Time B"
                onChangeValue={(value) => setSecondaryTeam(value)}
              />
            </div>

            <div className="col-12 col-md-4 col-lg-4 flex-shrink-0">
              <Select
                id="selectDiagramType"
                options={diagramTypeOptions}
                defaultValue="intersection"
                onChangeValue={(value) => setDiagramTypeSelected(value)}
              />
            </div>
          </div>

          {DiagramComponent}
        </div>

        <div className="col-6">
          <Explanation context={context} typeDiagram={diagramType} />
        </div>
      </div>
    </Card>
  );
}

export function Explanation({
  context,
  typeDiagram,
}: {
  context: {
    teamA: string;
    teamB: string;
    namesA: string[];
    namesB: string[];
  };
  typeDiagram: "equal" | "intersection" | "difference";
}) {
  const getTitle = () => {
    switch (typeDiagram) {
      case "equal":
        return "Conjuntos Iguais (A = B)";
      case "intersection":
        return "Interseção de Conjuntos (A ∩ B)";
      case "difference":
        return "Diferença de Conjuntos (A − B)";
    }
  };

  const getDescription = () => {
    switch (typeDiagram) {
      case "equal":
        return `Os conjuntos A (${context.teamA}) e B (${context.teamB}) possuem exatamente os mesmos elementos.`;
      case "intersection":
        return `Os conjuntos A (${context.teamA}) e B (${context.teamB}) possuem elementos em comum.`;
      case "difference":
        return `O conjunto A (${context.teamA}) possui elementos que não estão presentes em B (${context.teamB}).`;
    }
  };

  const renderBadges = (items: string[]) => (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: 4 }}
    >
      {items.map((name, idx) => (
        <Badge key={idx} variant="label-primary">
          {name}
        </Badge>
      ))}
    </div>
  );

  const getListItems = () => {
    const intersection = context.namesA.filter((name) =>
      context.namesB.includes(name)
    );

    const difference = context.namesA.filter(
      (name) => !context.namesB.includes(name)
    );

    switch (typeDiagram) {
      case "equal":
        return (
          <>
            <List.Item>
              Conjuntos são iguais quando possuem os{" "}
              <strong>mesmos elementos</strong>, independentemente da ordem.
            </List.Item>
            <List.Item>
              Exemplo:
              <div style={{ marginTop: 4 }}>
                Elementos do time A = 
                {renderBadges(context.namesA)}
                Elementos do time B =
                {renderBadges(context.namesB)}
              </div>
              → A = B.
            </List.Item>
          </>
        );
      case "intersection":
        return (
          <>
            <List.Item>
              A <strong>interseção</strong> representa os elementos que estão em
              A <em> e </em> também em B. Exemplo:
              <div style={{ marginTop: 4 }}>
                Elementos do time A = {renderBadges(context.namesA)}
                Elementos do time B = {renderBadges(context.namesB)}
                Elementos do time A ∩ B = {renderBadges(intersection)}
              </div>
            </List.Item>
          </>
        );
      case "difference":
        return (
          <>
            <List.Item>
              A <strong>diferença</strong> A − B contém os elementos que estão
              em A <em>mas não</em> em B.{" "}
            </List.Item>
            <List.Item>
              Exemplo:{" "}
              <div style={{ marginTop: 4 }}>
                Elementos do time B = {renderBadges(context.namesA)}
                Elementos do time B = {renderBadges(context.namesB)}
                Diferença entre A e B = {renderBadges(difference)}
              </div>
            </List.Item>
          </>
        );
    }
  };

  return (
    <Paper p="sm">
      <Title order={3} mb="sm">
        {getTitle()}
      </Title>

      <Text mb="md">{getDescription()}</Text>

      <List spacing="sm" size="sm">
        {getListItems()}
      </List>
    </Paper>
  );
}
