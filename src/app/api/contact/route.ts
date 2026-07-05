import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  email: z.string().email().max(200),
  service: z.string().min(1).max(100),
  vehicle: z.string().min(2).max(200),
  message: z.string().max(2000).optional(),
  _honeypot: z.string().max(0),
});

// Simple in-memory rate limiter (per deployment instance)
// PLACEHOLDER: replace with Redis-backed rate limiting for production
const rateMap = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60_000; // 1 minute
  const limit = 5;

  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + window });
    return false;
  }
  if (entry.count >= limit) return true;
  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Validation failed", issues: result.error.issues }, { status: 422 });
  }

  const { _honeypot, ...data } = result.data;

  // Bot detected via honeypot
  if (_honeypot.length > 0) {
    // Return 200 to fool bots, but don't process
    return NextResponse.json({ ok: true });
  }

  // PLACEHOLDER: Wire up email service before launch.
  // Options:
  //   - Resend: https://resend.com (npm install resend)
  //   - SendGrid: https://sendgrid.com
  //   - Nodemailer with SMTP
  //   - Formspree / EmailJS as no-code alternatives
  //
  // Example with Resend:
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'website@ceramicpronorthwest.co.uk',
  //   to: 'info@ceramicpronorthwest.co.uk',
  //   subject: `New enquiry from ${data.name} — ${data.service}`,
  //   text: JSON.stringify(data, null, 2),
  // });

  // For now: log to console (server logs / Vercel logs)
  console.log("[Contact Form Submission]", {
    timestamp: new Date().toISOString(),
    ...data,
  });

  return NextResponse.json({ ok: true });
}
