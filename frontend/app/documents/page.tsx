"use client";

import { useState } from "react";

export default function DocumentsPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800">My Documents</h1>

      <p className="mt-2 text-slate-500">
        Upload documents to explore them with AI.
      </p>

      <div className="mt-8 rounded-xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
        <div className="text-5xl">📄</div>

        <h2 className="mt-4 text-xl font-semibold">Upload your document</h2>

        <p className="mt-2 text-slate-500">
          Select a PDF or text document from your computer.
        </p>

        <input
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="mx-auto mt-6 block max-w-full text-sm"
        />

        {selectedFile && (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">
            Selected: {selectedFile.name}
          </div>
        )}
      </div>
    </div>
  );
}
