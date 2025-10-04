import React from "react";

export default function ThemeToggle() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  React.useEffect(() => {
    const root = document.documentElement;
    const isDark =
      mode === "dark" ||
      (mode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm opacity-70">Theme</label>
      <select
        className="border rounded px-2 py-1 bg-card"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}
