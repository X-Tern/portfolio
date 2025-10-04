import React from "react";

export default function GeneralView() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-card rounded-2xl shadow">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Hello, I'm You.</h1>
        <div className="text-sm opacity-70">Software Engineer · Cloud · React</div>
      </header>
      <section className="mt-6 space-y-3">
        <p>
          This is a clean portfolio for non-technical visitors. Replace text and
          sections with your projects, achievements, and services.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Project A — short description</li>
          <li>Project B — short description</li>
          <li>Project C — short description</li>
        </ul>
      </section>
      <footer className="mt-8 text-sm opacity-60">
        Contact: you@example.com · +234 000 000 0000
      </footer>
    </div>
  );
}
