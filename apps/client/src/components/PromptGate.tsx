import React from "react";

type Props = { onChoice: (developer: boolean) => void };

export default function PromptGate({ onChoice }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <h2 className="text-2xl font-semibold">Are you a developer?</h2>
      <div className="flex gap-3">
        <button
          onClick={() => onChoice(true)}
          className="rounded-2xl px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow"
        >
          Yes
        </button>
        <button
          onClick={() => onChoice(false)}
          className="rounded-2xl px-4 py-2 bg-slate-200 dark:bg-slate-700"
        >
          No
        </button>
      </div>
      <p className="text-sm opacity-70">Pick one to see a tailored UI.</p>
    </div>
  );
}
