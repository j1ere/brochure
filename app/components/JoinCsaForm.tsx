"use client";

import { useState } from "react";

export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/Jcn7lM0eHuWEAJzYHliWeO";

export function JoinCsaForm() {
  const [values, setValues] = useState({
    full_name: "",
    phone: "",
    course: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const field = (name: keyof typeof values) => ({
    id: name,
    name,
    value: values[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [name]: e.target.value })),
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/otiendevincent39@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        setValues({ full_name: "", phone: "", course: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
      {/* FormSubmit hidden fields */}
      <input type="hidden" name="_subject" value="New CSA Join Request – St. Anne's Chaplaincy" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {/* Optional: redirect after success (leave empty if you handle UI yourself) */}
      {/* <input type="hidden" name="_next" value="https://www.stanneschaplaincy.com/thank-you" /> */}

      <div>
        <label htmlFor="full_name" className={labelClass}>
          Full name
        </label>
        <input
          {...field("full_name")}
          type="text"
          autoComplete="name"
          placeholder="Mary Anne Achieng"
          required
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
          required
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
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Count me in"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-center text-sm font-medium text-leaf">
          Thank you! We’ve received your details and will be in touch soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-center text-sm font-medium text-brick">
          Something went wrong. Please try again or join the WhatsApp group instead.
        </p>
      )}

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your details will be sent directly to the CSA leadership.
      </p>
    </form>
  );
}