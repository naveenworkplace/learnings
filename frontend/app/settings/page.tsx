"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [userName, setUserName] = useState("Developer");
  const [theme, setTheme] = useState("Light");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800">Settings</h1>

      <p className="mt-2 text-slate-500">
        Manage your application preferences.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        {/* Profile settings */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Profile</h2>

          <label className="mt-5 block text-sm font-medium text-slate-600">
            Display Name
          </label>

          <input
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 p-3"
          />
        </section>

        {/* Appearance settings */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Appearance</h2>

          <label className="mt-5 block text-sm font-medium text-slate-600">
            Theme
          </label>

          <select
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 p-3"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </section>

        {/* Notification settings */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Notifications
          </h2>

          <label className="mt-5 flex items-center gap-3 text-slate-600">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(event) => setNotifications(event.target.checked)}
            />
            Enable notifications
          </label>
        </section>
      </div>
    </div>
  );
}
