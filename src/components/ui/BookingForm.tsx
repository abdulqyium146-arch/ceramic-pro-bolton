"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid UK phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  vehicle: z.string().min(2, "Please describe your vehicle"),
  message: z.string().optional(),
  _honeypot: z.string().max(0, "Bot detected"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("flex flex-col items-center gap-4 py-12 text-center", className)}>
        <CheckCircle className="w-16 h-16 text-[#c9a84c]" />
        <h3 className="font-heading text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-gray-400">
          Thank you for getting in touch. Ceramic Pro North West will get back to you within 1 business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 px-6 py-2 border border-[#c9a84c] text-[#c9a84c] rounded-lg text-sm hover:bg-[#c9a84c]/10 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
      noValidate
    >
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        {...register("_honeypot")}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your Name *" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="John Smith"
            autoComplete="name"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Phone Number *" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="07xxx xxxxxx"
            autoComplete="tel"
            className={inputClass(!!errors.phone)}
          />
        </Field>
      </div>

      <Field label="Email Address *" error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
          className={inputClass(!!errors.email)}
        />
      </Field>

      <Field label="Service Required *" error={errors.service?.message}>
        <select {...register("service")} className={inputClass(!!errors.service)}>
          <option value="">Select a service…</option>
          {BUSINESS.services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
          <option value="other">Other / Not sure</option>
        </select>
      </Field>

      <Field label="Your Vehicle *" error={errors.vehicle?.message}>
        <input
          {...register("vehicle")}
          type="text"
          placeholder="e.g. 2022 BMW 3 Series"
          className={inputClass(!!errors.vehicle)}
        />
      </Field>

      <Field label="Additional Details" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us more about what you're looking for…"
          className={cn(inputClass(false), "resize-y")}
        />
      </Field>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] disabled:opacity-60 disabled:cursor-not-allowed transition-all text-lg"
      >
        {status === "loading" ? (
          <>
            <div className="w-5 h-5 border-2 border-[#0f0f0f]/30 border-t-[#0f0f0f] rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Get a Free Quote
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        No spam. We&apos;ll only contact you about your enquiry.
      </p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-300">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-4 py-3 rounded-lg bg-[#242424] border text-white placeholder:text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 transition-colors",
    hasError ? "border-red-500" : "border-[#3a3a3a] focus:border-[#c9a84c]"
  );
}
