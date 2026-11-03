const features = [
  {
    title: "AI Conversations",
    description: "Ask questions and explore topics with AI.",
    icon: "🤖",
  },
  {
    title: "Knowledge Library",
    description: "Organize your learning and knowledge.",
    icon: "📚",
  },
  {
    title: "Document Intelligence",
    description: "Upload documents and ask questions about their contents.",
    icon: "📄",
  },
];

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800">
        Welcome to AI Knowledge Assistant
      </h1>

      <p className="mt-3 text-slate-500">
        Your personal space to learn, explore and understand.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <div className="text-3xl">{feature.icon}</div>

            <h2 className="mt-4 text-xl font-semibold text-slate-800">
              {feature.title}
            </h2>

            <p className="mt-2 text-sm text-slate-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
