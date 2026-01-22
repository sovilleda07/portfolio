type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

export function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={label.toUpperCase()}
        className="ml-3 text-xs font-bold uppercase text-slate-500"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
