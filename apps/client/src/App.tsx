import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import PromptGate from "./components/PromptGate";
import DevShell from "./components/vscode/DevShell";
import GeneralView from "./components/general/GeneralView";

export default function App() {
  const [decision, setDecision] = React.useState<null | boolean>(null);

  return (
    <div className="p-6 space-y-6">
      <nav className="flex items-center justify-between">
        <div className="font-semibold tracking-wide">My Portfolio</div>
        <ThemeToggle />
      </nav>

      {decision === null && <PromptGate onChoice={setDecision} />}
      {decision === true && <DevShell />}
      {decision === false && <GeneralView />}
    </div>
  );
}
