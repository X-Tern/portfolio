import React from "react";

export default function DevShell() {
  return (
    <div className="grid md:grid-cols-[260px_1fr] h-[80vh] rounded-2xl overflow-hidden shadow-lg bg-card">
      <aside className="hidden md:flex flex-col bg-slate-900 text-white p-3 gap-2">
        <div className="font-bold tracking-wide">EXPLORER</div>
        <ul className="text-sm opacity-90 space-y-1">
          <li>src/</li>
          <li className="pl-3">App.tsx</li>
          <li className="pl-3">components/</li>
          <li>README.md</li>
        </ul>
      </aside>
      <main className="p-4">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-red-500 inline-block" />
            <span className="size-3 rounded-full bg-yellow-500 inline-block" />
            <span className="size-3 rounded-full bg-green-500 inline-block" />
            <span className="font-mono text-sm">App.tsx</span>
          </div>
          <div className="text-sm opacity-60">UTF-8  LF  TypeScript React</div>
        </div>
        <section className="mt-4 space-y-3">
          <h1 className="text-3xl font-bold">Developer View</h1>
          <p className="opacity-80">
            Welcome! This VSCode-like interface is tailored for technical visitors.
            Add code samples, API docs, and engineering case studies here.
          </p>
          <div className="rounded border p-3 font-mono text-sm overflow-auto">
            {`fetch(import.meta.env.VITE_API_BASE + '/api/health')
  .then(r => r.json())
  .then(console.log)`}
          </div>
        </section>
      </main>
    </div>
  );
}
