import { Toaster } from "sonner";
import { Router } from "./router/Router";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";

import "@fontsource-variable/public-sans/index.css";
import { TechProvider } from "./context/data";

function App() {
  return (
    <MantineProvider>
      <TechProvider>
        <Router />
      </TechProvider>
      <Toaster richColors />
    </MantineProvider>
  );
}

export default App;
