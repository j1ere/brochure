"use client";

import { useState } from "react";

export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/Jcn7lM0eHuWEAJzYHliWeO";

export function JoinCsaForm() {
  const [values, setValues] = useState({
    full_name: "",
    phone: "",
    course: "",
  });

  const field = (name: keyof typeof values) => ({
    id: name,
    name,
    value: values[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [name]: e.target.value })),
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Placeholder only.
    console.log("Form submitted:", values);

    setValues({
      full_name: "",
      phone: "",
      course: "",
    });
  }

  const inputClass =
    "mt-1.5 w-full rounded-2xl border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30";

  const labelClass =
    "font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm"
    >
      <div>
        <label htmlFor="full_name" className={labelClass}>
          Full name
        </label>
        <input
          {...field("full_name")}
          type="text"
          autoComplete="name"
          placeholder="Mary Anne Achieng"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className={labelClass}>
          Phone number
        </label>
        <input
          {...field("phone")}
          type="tel"
          autoComplete="tel"
          placeholder="+254 712 345 678"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="course" className={labelClass}>
          Course you're doing
        </label>
        <input
          {...field("course")}
          type="text"
          placeholder="BSc. Computer Science"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Count me in
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your details will be connected to the St. Anne's Chaplaincy system during
        the main website integration.
      </p>
    </form>
  );
}