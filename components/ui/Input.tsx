import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-stone-700">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

const fieldClasses =
  "w-full rounded-md border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 transition-colors duration-150 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClasses, props.className)} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(fieldClasses, "resize-none", props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(fieldClasses, "bg-white", props.className)} />;
}
