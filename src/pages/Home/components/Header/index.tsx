import { DashboardCard } from "@/components/DashboardCardProps";
import { useTech } from "@/context/data";

export function Header() {
  const { techData, setTechData } = useTech();
  // Times únicos
  const allTeams = new Set();
  techData.forEach((tech) => {
    tech.teams.forEach((teams) => allTeams.add(teams));
  });

  const totalTimes = allTeams.size;
  const tecnologiasTotais = techData.length;
  const tecnologiasComuns = techData.filter(tech => tech.teams.length > 1).length;
  const tecnologiasExclusivas = techData.filter(tech => tech.teams.length === 1).length;
  const tecnologiasEmTodos = techData.filter(tech => tech.teams.length === totalTimes).length;

  return (
    <div className="row g-4 mb-4">
      <DashboardCard
        id="tecnologiasComuns"
        colClass="col-sm-6 col-xl-3"
        countElement={tecnologiasComuns}
        title="Tecnologias Comuns"
        subtitle="Interseção entre os times"
        variantBadge="label-info"
      />

      <DashboardCard
        id="tecnologiasTotais"
        colClass="col-sm-6 col-xl-3"
        countElement={tecnologiasTotais}
        title="Tecnologias Totais"
        subtitle="União de todos os times"
        variantBadge="label-success"
      />

      <DashboardCard
        id="tecnologiasExclusivas"
        colClass="col-sm-6 col-xl-3"
        countElement={tecnologiasExclusivas}
        title="Tecnologias Exclusivas"
        subtitle="Diferenças entre os times"
        variantBadge="label-warning"
      />

      <DashboardCard
        id="tecnologiasEmTodos"
        colClass="col-sm-6 col-xl-3"
        countElement={tecnologiasEmTodos}
        title="Em Todos os Times"
        subtitle="Interseção total"
        variantBadge="label-danger"
      />
    </div>
  );
}
