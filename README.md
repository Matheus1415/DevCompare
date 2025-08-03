## 📂 Sobre o Projeto

O **Dev Compare** é uma aplicação interativa que permite comparar as tecnologias utilizadas por diferentes times de desenvolvimento. Utilizando conceitos de conjuntos matemáticos, como interseção, igualdade e diferença, a aplicação exibe visualmente os relacionamentos entre os times com diagramas de Venn.

Este projeto foi desenvolvido com foco em visualização, acessibilidade e organização de dados técnicos.

---

## 🚀 Funcionalidades

- Comparação de times usando diagramas de Venn interativos
- Visualização de interseção, diferença e igualdade de tecnologias
- Interface responsiva com Tailwind CSS e Mantine UI
- Filtro de tecnologias por nome ou time
- Lista paginada com badges coloridos aleatórios
- Explicações dinâmicas sobre o relacionamento entre os conjuntos
- Operações selecionáveis diretamente na interface

---

## ⚙️ Como Instalar

Para rodar o **NLW Agents** localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Matheus1415/DevCompare
   ```
   
2. **Acesse o diretório do projeto:**

   ```bash
   cd DevCompare
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Instale as dependências:**

   ```bash
   npm run dev
   ```

5 **Acesse a aplicação no navegador:**

   [http://localhost:5173](http://localhost:5173)


## 🛠️ Tecnologias Utilizadas

- React 18+ — Biblioteca de construção de interfaces
- TypeScript 5+ — Tipagem estática avançada
- Vite — Bundler moderno e veloz
- Tailwind CSS 3+ — Utilitário CSS para construção rápida de UIs
- Mantine — Biblioteca de componentes acessíveis e modernos
- Mantine Datatable — Tabela poderosa com paginação, filtros e mais
- D3.js + Venn.js — Visualização de dados com diagramas de Venn
- Lucide Icons — Ícones SVG limpos e escaláveis

---

## 📁 Estrutura do Projeto

```bash
src/
├── components/
│   ├── Badge.tsx                 # Componente visual de badge
│   ├── Card.tsx                  # Componente de cartão reutilizável
│   ├── Select.tsx                # Select customizado
│   └── VennDiagram2.tsx          # Diagramas de Venn (Interseção, Diferença, Igualdade)
│
├── context/
│   └── data.tsx                  # Contexto global de tecnologias e times
│
├── layouts/
│   └── HomeLayout/
│       └── index.tsx            # Layout principal da aplicação 
│
├── pages/Home.tsx               # Página principal com seleção de operações
│
├── router/
│   └── Router.tsx               # Definições de rotas da aplicação
│
├── App.tsx                      # Componente principal que organiza rotas/layout
└── main.tsx                     # Ponto de entrada da aplicação (Vite)

```
