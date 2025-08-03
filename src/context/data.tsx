import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
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
    description: "Plataforma para criar, enviar e rodar containers",
  },
  {
    id: 6,
    name: "Vue",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework progressivo para construir interfaces",
  },
  {
    id: 7,
    name: "Angular",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Framework da Google para aplicações web",
  },
  {
    id: 8,
    name: "Express",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Framework minimalista para Node.js",
  },
  {
    id: 9,
    name: "PostgreSQL",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Banco de dados relacional poderoso e open source",
  },
  {
    id: 10,
    name: "Redis",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Banco de dados em memória para cache e mensagens",
  },
  {
    id: 11,
    name: "TypeScript",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Superset do JavaScript com tipagem estática",
  },
  {
    id: 12,
    name: "SASS",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Pré-processador CSS para estilos avançados",
  },
  {
    id: 13,
    name: "Tailwind CSS",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework utilitário para estilização rápida",
  },
  {
    id: 14,
    name: "Next.js",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Framework React com suporte a SSR e SSG",
  },
  {
    id: 15,
    name: "GraphQL",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Linguagem de consulta para APIs flexíveis",
  },
  {
    id: 16,
    name: "REST",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Estilo arquitetural para APIs web",
  },
  {
    id: 17,
    name: "Python",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Linguagem de programação de alto nível",
  },
  {
    id: 18,
    name: "Flask",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Framework web minimalista em Python",
  },
  {
    id: 19,
    name: "Django",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework full-stack em Python",
  },
  {
    id: 20,
    name: "Firebase",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Plataforma de backend do Google para aplicações web/mobile",
  },
  {
    id: 21,
    name: "AWS",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Plataforma de serviços em nuvem",
  },
  {
    id: 22,
    name: "Jest",
    teams: ["Time B"],
    category: "Tecnologias Exclusivas",
    description: "Framework de testes para JavaScript",
  },
  {
    id: 23,
    name: "Mocha",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Biblioteca de testes para Node.js",
  },
  {
    id: 24,
    name: "Webpack",
    teams: ["Time A", "Time B"],
    category: "Tecnologias Comuns",
    description: "Empacotador de módulos JavaScript",
  },
  {
    id: 25,
    name: "Zustand",
    teams: ["Time A"],
    category: "Tecnologias Exclusivas",
    description: "Gerenciador de estado para aplicações React",
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
