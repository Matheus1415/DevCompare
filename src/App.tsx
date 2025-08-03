import { Toaster } from "sonner"
import { Router } from "./router/Router"
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';

import '@fontsource-variable/public-sans/index.css';

function App() {
  return (
    <MantineProvider>
      <Router />
      <Toaster richColors/>
    </MantineProvider>
  );
}

export default App
