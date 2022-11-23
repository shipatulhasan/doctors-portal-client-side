import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AouthProvider from "./components/AuthProvider/AouthProvider";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeSwitcher>
      <AouthProvider>
        <App />
      </AouthProvider>
    </ThemeSwitcher>
    </QueryClientProvider>
    
  </React.StrictMode>
);
