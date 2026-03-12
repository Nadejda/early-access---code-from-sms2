import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CodeFromSms } from "./screens/CodeFromSms";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CodeFromSms />
  </StrictMode>,
);
