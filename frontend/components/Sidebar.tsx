import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/", icon: "🏠" },
  { name: "AI Chat", href: "/chat", icon: "🤖" },
  { name: "Documents", href: "/documents", icon: "📄" },
  { name: "Settings", href: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-slate-900 p-5 text-white">
      <div className="mb-10">
        <h1 className="text-xl font-bold">AI Knowledge Assistant</h1>

        <p className="mt-2 text-sm text-slate-400">
          Learn. Explore. Understand.
        </p>
      </div>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-slate-700 pt-5">
        <p className="text-xs text-slate-400">AI Knowledge Assistant v1.0</p>
      </div>
    </aside>
  );
}
