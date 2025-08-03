import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

const initialData = [
  {
    id: 1,
    name: "React",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Biblioteca JavaScript para construir interfaces de usuário",
  },
  {
    id: 2,
    name: "Node.js",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Ambiente JavaScript para servidor",
  },
  {
    id: 3,
    name: "MongoDB",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Banco de dados NoSQL orientado a documentos",
  },
  {
    id: 4,
    name: "MySQL",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Banco de dados relacional",
  },
  {
    id: 5,
    name: "Docker",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Containers para aplicações",
  },
  {
    id: 6,
    name: "Vue",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework progressivo de UI",
  },
  {
    id: 7,
    name: "Angular",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Framework da Google",
  },
  {
    id: 8,
    name: "Express",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Framework para Node.js",
  },
  {
    id: 9,
    name: "PostgreSQL",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Banco de dados relacional open source",
  },
  {
    id: 10,
    name: "Redis",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Banco em memória",
  },
  {
    id: 11,
    name: "TypeScript",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Superset do JavaScript",
  },
  {
    id: 12,
    name: "SASS",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Pré-processador CSS",
  },
  {
    id: 13,
    name: "Tailwind CSS",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework utilitário CSS",
  },
  {
    id: 14,
    name: "Next.js",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Framework React com SSR",
  },
  {
    id: 15,
    name: "GraphQL",
    teams: ["Time B", "Time C"],
    category: "Tecnologias Comuns",
    description: "API flexível e poderosa",
  },
  {
    id: 16,
    name: "REST",
    teams: ["Time A", "Time B", "Time C"],
    category: "Tecnologias Comuns",
    description: "Estilo de arquitetura de APIs",
  },
  {
    id: 17,
    name: "Python",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Linguagem de programação poderosa",
  },
  {
    id: 18,
    name: "Flask",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Framework web em Python",
  },
  {
    id: 19,
    name: "Django",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework full-stack Python",
  },
  {
    id: 20,
    name: "Firebase",
    teams: ["Time A", "Time B", "Time C"],
    category: "Tecnologias Comuns",
    description: "Backend como serviço",
  },
  {
    id: 21,
    name: "AWS",
    teams: ["Time A", "Time B", "Time D"],
    category: "Tecnologias Comuns",
    description: "Serviços em nuvem",
  },
  {
    id: 22,
    name: "Jest",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework de testes JS",
  },
  {
    id: 23,
    name: "Mocha",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Biblioteca de testes JS",
  },
  {
    id: 24,
    name: "Webpack",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Empacotador de módulos JS",
  },
  {
    id: 25,
    name: "Zustand",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Gerenciador de estado React",
  },
  {
    id: 26,
    name: "Jenkins",
    teams: ["Time C"],
    category: "Tecnologias Exclusivas",
    description: "Automação CI/CD",
  },
  {
    id: 27,
    name: "Kubernetes",
    teams: ["Time C", "Time D"],
    category: "Tecnologias Comuns",
    description: "Orquestração de containers",
  },
  {
    id: 28,
    name: "Azure",
    teams: ["Time D"],
    category: "Tecnologias Exclusivas",
    description: "Serviços de nuvem da Microsoft",
  },
  {
    id: 29,
    name: "Babel",
    teams: ["Time A", "Time D"],
    category: "Tecnologias Comuns",
    description: "Transpiler de JS",
  },
  {
    id: 30,
    name: "Gatsby",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Static site generator React",
  },
  {
    id: 31,
    name: "Three.js",
    teams: ["Time C"],
    category: "Tecnologias Exclusivas",
    description: "Renderização 3D no navegador",
  },
  {
    id: 32,
    name: "Electron",
    teams: ["Time A", "Time D"],
    category: "Tecnologias Comuns",
    description: "Aplicações desktop com JS",
  },
  {
    id: 33,
    name: "Cypress",
    teams: ["Time B", "Time C"],
    category: "Tecnologias Comuns",
    description: "Testes end-to-end",
  },
  {
    id: 34,
    name: "Jira",
    teams: ["Time A", "Time C", "Time D"],
    category: "Tecnologias Comuns",
    description: "Gestão de projetos ágeis",
  },
  {
    id: 35,
    name: "Bitbucket",
    teams: ["Time D"],
    category: "Tecnologias Exclusivas",
    description: "Repositório Git da Atlassian",
  },
  {
    id: 36,
    name: "Figma",
    teams: ["Time C", "Time D"],
    category: "Tecnologias Comuns",
    description: "Design colaborativo de interfaces",
  },
  {
    id: 37,
    name: "Notion",
    teams: ["Time A", "Time D"],
    category: "Tecnologias Comuns",
    description: "Organização e documentação",
  },
  {
    id: 38,
    name: "Supabase",
    teams: ["Time B", "Time C"],
    category: "Tecnologias Comuns",
    description: "Alternativa ao Firebase open source",
  },
  {
    id: 39,
    name: "Hasura",
    teams: ["Time A", "Time C"],
    category: "Tecnologias Comuns",
    description: "GraphQL instantâneo com Postgres",
  },
  {
    id: 40,
    name: "Lodash",
    teams: ["Time A", "Time B", "Time D"],
    category: "Tecnologias Comuns",
    description: "Utilitários para JavaScript",
  },
];

export interface TechItem {
  id: number;
  name: string;
  teams: string[];
  category: string;
  description: string;
}

interface TechContextType {
  techData: TechItem[];
  setTechData: Dispatch<SetStateAction<TechItem[]>>;
}

const TechContext = createContext<TechContextType | undefined>(undefined);

export function TechProvider({ children }: { children: ReactNode }) {
  const [techData, setTechData] = useState<TechItem[]>(initialData);

  return (
    <TechContext.Provider value={{ techData, setTechData }}>
      {children}
    </TechContext.Provider>
  );
}

export function useTech() {
  const context = useContext(TechContext);
  if (!context) {
    throw new Error("useTech deve ser usado dentro de um TechProvider");
  }
  return context;
}
