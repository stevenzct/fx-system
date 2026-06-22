import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

const fieldClass =
  "min-h-12 w-full rounded-[13px] border border-line bg-white px-3.5 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(22,122,90,0.12)] sm:text-sm";

const selectClass =
  "min-h-12 w-full appearance-none rounded-[13px] border border-line bg-white py-3 pl-3.5 pr-11 text-base font-semibold text-ink outline-none transition hover:border-slate-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(22,122,90,0.12)] disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 sm:text-sm";

export function Field({
  label,
  id,
  ...props
}: Readonly<InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }>) {
  const { className, ...inputProps } = props;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-extrabold text-muted">
        {label}
      </label>
      <input id={id} className={`${fieldClass} ${className ?? ""}`} {...inputProps} />
    </div>
  );
}

export function SelectField({
  label,
  id,
  children,
  ...props
}: Readonly<SelectHTMLAttributes<HTMLSelectElement> & { label: string; id: string }>) {
  const { className, ...selectProps } = props;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-extrabold text-muted">
        {label}
      </label>
      <div className="relative">
        <select id={id} className={`${selectClass} ${className ?? ""}`} {...selectProps}>
          {children}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-2 -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-slate-500"
        />
      </div>
    </div>
  );
}
