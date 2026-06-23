"use client";

import { Children, isValidElement, useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, InputHTMLAttributes, ReactElement, ReactNode, SelectHTMLAttributes } from "react";

const fieldClass =
  "min-h-12 w-full rounded-[13px] border border-line bg-white px-3.5 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(22,122,90,0.12)] sm:text-sm";

const selectButtonClass =
  "min-h-12 w-full rounded-[13px] border border-line bg-white py-3 pl-3.5 pr-12 text-left text-base font-semibold text-ink outline-none shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:border-slate-300 hover:bg-slate-50 focus:border-primary focus:shadow-[0_0_0_4px_rgba(22,122,90,0.12),0_8px_24px_rgba(15,23,42,0.04)] disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 sm:text-sm";

type SelectOption = {
  disabled: boolean;
  label: string;
  value: string;
};

function Field({
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

function getOptionText(children: ReactNode) {
  return Children.toArray(children)
    .map((child) => (typeof child === "string" || typeof child === "number" ? child : ""))
    .join("");
}

function getOptions(children: ReactNode) {
  return Children.toArray(children).flatMap((child) => {
    if (!isValidElement(child)) {
      return [];
    }

    const option = child as ReactElement<{ children?: ReactNode; disabled?: boolean; value?: number | string }>;
    const label = getOptionText(option.props.children);

    return {
      disabled: Boolean(option.props.disabled),
      label,
      value: String(option.props.value ?? label),
    };
  });
}

function createChangeEvent(value: string) {
  return {
    currentTarget: { value },
    target: { value },
  } as ChangeEvent<HTMLSelectElement>;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.25">
      <path d="m4.5 10.5 3.5 3.5 7.5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }: Readonly<{ open: boolean }>) {
  return (
    <svg viewBox="0 0 20 20" className={`size-4 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function normalizeValue(value: SelectHTMLAttributes<HTMLSelectElement>["defaultValue"] | SelectHTMLAttributes<HTMLSelectElement>["value"]) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value;
}

function SelectField({
  label,
  id,
  children,
  ...props
}: Readonly<SelectHTMLAttributes<HTMLSelectElement> & { label: string; id: string }>) {
  const { className, defaultValue, disabled, name, onChange, value } = props;
  const options = useMemo(() => getOptions(children), [children]);
  const fallbackValue = options.find((option) => !option.disabled)?.value ?? "";
  const [internalValue, setInternalValue] = useState(String(normalizeValue(value) ?? normalizeValue(defaultValue) ?? fallbackValue));
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentValue = String(normalizeValue(value) ?? internalValue);
  const selectedOption = options.find((option) => option.value === currentValue) ?? options[0];

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("pointerdown", closeOnOutsideClick);
    return () => window.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  function selectValue(nextValue: string) {
    setOpen(false);

    if (disabled || nextValue === currentValue) {
      return;
    }

    setInternalValue(nextValue);
    onChange?.(createChangeEvent(nextValue));
  }

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div>
      <label htmlFor={`${id}-button`} className="mb-1.5 block text-xs font-extrabold text-muted">
        {label}
      </label>
      <div ref={containerRef} className="group relative">
        <button
          id={`${id}-button`}
          type="button"
          aria-controls={`${id}-menu`}
          aria-expanded={open}
          aria-haspopup="listbox"
          disabled={disabled}
          onClick={() => setOpen((nextOpen) => !nextOpen)}
          onKeyDown={handleTriggerKeyDown}
          className={`${selectButtonClass} ${className ?? ""}`}
        >
          <span className="block truncate">{selectedOption?.label}</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-2.5 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition group-hover:bg-emerald-50 group-hover:text-primary"
          >
            <ChevronIcon open={open} />
          </span>
        </button>

        {open ? (
          <div
            id={`${id}-menu`}
            role="listbox"
            aria-labelledby={`${id}-button`}
            className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-auto rounded-[13px] border border-line bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
          >
            {options.map((option) => {
              const active = option.value === currentValue;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={active}
                  disabled={disabled || option.disabled}
                  onClick={() => selectValue(option.value)}
                  className={`flex min-h-10 w-full items-center justify-between gap-3 rounded-[10px] px-3 py-2 text-left text-sm font-semibold transition ${
                    active ? "bg-emerald-50 text-primary" : "text-ink hover:bg-slate-50"
                  } disabled:cursor-not-allowed disabled:text-slate-400 disabled:hover:bg-transparent`}
                >
                  <span className="truncate">{option.label}</span>
                  {active ? (
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <CheckIcon />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}

        <input id={id} type="hidden" name={name} value={currentValue} readOnly />
      </div>
    </div>
  );
}

export { Field, SelectField };
