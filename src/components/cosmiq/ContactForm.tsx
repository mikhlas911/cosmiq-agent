import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AUTOMATIONS = [
  "Documentation",
  "Internal operations",
  "Customer support",
  "Meetings and Schedules",
  "Inter team communications",
  "All of the above",
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  role: z.string().trim().min(1, "Please enter your role").max(100),
  business_domain: z.string().trim().min(1, "Please enter your business domain").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  automations: z.enum(AUTOMATIONS, { message: "Please choose an automation area" }),
  additional_requests: z.string().trim().max(1000).optional(),
});

const emptyForm = {
  name: "",
  role: "",
  business_domain: "",
  email: "",
  phone: "",
  automations: "",
  additional_requests: "",
};

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof typeof emptyForm) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("enquiries").insert({
      name: parsed.data.name,
      role: parsed.data.role,
      business_domain: parsed.data.business_domain,
      email: parsed.data.email,
      phone: parsed.data.phone,
      automations: parsed.data.automations,
      additional_requests: parsed.data.additional_requests || null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("We couldn't send your enquiry. Please try again.");
      return;
    }

    setForm(emptyForm);
    toast.success("Thanks! Your enquiry has been received — we'll be in touch shortly.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <Input
            id="name"
            value={form.name}
            maxLength={100}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Your full name"
          />
        </Field>
        <Field id="role" label="Role" error={errors.role}>
          <Input
            id="role"
            value={form.role}
            maxLength={100}
            onChange={(e) => set("role")(e.target.value)}
            placeholder="Founder, Operations Manager…"
          />
        </Field>
        <Field id="business_domain" label="Business Domain" error={errors.business_domain}>
          <Input
            id="business_domain"
            value={form.business_domain}
            maxLength={120}
            onChange={(e) => set("business_domain")(e.target.value)}
            placeholder="Logistics, clinic, agency…"
          />
        </Field>
        <Field id="email" label="Email ID" error={errors.email}>
          <Input
            id="email"
            type="email"
            value={form.email}
            maxLength={255}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@company.com"
          />
        </Field>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            maxLength={30}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+91 98765 43210"
          />
        </Field>
        <Field id="automations" label="Admin Automations" error={errors.automations}>
          <Select value={form.automations} onValueChange={set("automations")}>
            <SelectTrigger id="automations">
              <SelectValue placeholder="Select what you need automated" />
            </SelectTrigger>
            <SelectContent>
              {AUTOMATIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field id="additional_requests" label="Additional Requests" error={errors.additional_requests}>
        <Textarea
          id="additional_requests"
          value={form.additional_requests}
          maxLength={1000}
          rows={4}
          onChange={(e) => set("additional_requests")(e.target.value)}
          placeholder="Tell us about your current admin workload, tools and timelines."
        />
      </Field>

      <Button type="submit" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending…" : "Request your Cosmiq walkthrough"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We use your details only to respond to this enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
