import React, { useEffect, useMemo, useRef, useState } from "react";

export function SmartSelect({
  options = [],
  multiple = false,
  value = multiple ? [] : null,
  onChange = () => {},
  disabled = false,
  search = false,
  placeholder = "",
  className = "",
  triggerClassName = "",
  optionHoverClassName = "hover:bg-primary/10",
  optionActiveClassName = "bg-primary/10",
  optionSelectedClassName = "",
  label = null,
  labelClassName = "",
  width = "w-full",
  placeholderClassName = "",
  selectedValueClassName = "",
  name,
  rounded = "",
  backgroundColor = "bg-tertiary",
  checkbox = true,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  // Normalize selected values to a Set for quick lookup
  const selectedSet = useMemo(() => {
    const arr = Array.isArray(value) ? value : value != null ? [value] : [];
    return new Set(arr.map(String));
  }, [value]);

  const filtered = useMemo(() => {
    if (!query.trim()) return options;
    const q = query.toLowerCase();
    return options.filter((o) => String(o.label).toLowerCase().includes(q));
  }, [options, query]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const commitChange = (next) => {
    if (disabled) return;
    if (multiple) {
      const arr = Array.from(new Set(next));
      onChange(arr);
    } else {
      onChange(next.length ? next[0] : null);
      setOpen(false);
    }
  };

  const toggleValue = (val) => {
    if (disabled) return;
    const s = Array.isArray(value) ? [...value] : value != null ? [value] : [];
    const idx = s.findIndex((v) => String(v) === String(val));
    if (idx >= 0) s.splice(idx, 1);
    else s.push(val);
    commitChange(s);
  };

  const chooseSingle = (val) => commitChange([val]);

  const onKeyDown = (e) => {
    if (!open && ["ArrowDown", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      setOpen(true);
      // if (search) setTimeout(() => inputRef.current?.focus(), 0);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) =>
        Math.min((i < 0 ? -1 : i) + 1, filtered.length - 1),
      );
      scrollActiveIntoView();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max((i < 0 ? filtered.length : i) - 1, 0));
      scrollActiveIntoView();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = filtered[activeIndex];
      if (opt && !opt.disabled) {
        multiple ? toggleValue(opt.value) : chooseSingle(opt.value);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
    } else if (
      e.key === "Backspace" &&
      multiple &&
      !query &&
      Array.isArray(value) &&
      value.length
    ) {
      // Remove last chip
      const next = [...value];
      next.pop();
      commitChange(next);
    }
  };

  const scrollActiveIntoView = () => {
    requestAnimationFrame(() => {
      const list = listRef.current;
      if (!list) return;
      const el = list.querySelector(`[data-index='${activeIndex}']`);
      if (el) {
        const { top, bottom } = el.getBoundingClientRect();
        const { top: ltop, bottom: lbot } = list.getBoundingClientRect();
        if (top < ltop) list.scrollTop -= ltop - top;
        else if (bottom > lbot) list.scrollTop += bottom - lbot;
      }
    });
  };

  const renderChips = () => {
    if (!multiple) return null;
    const sel = Array.isArray(value) ? value : [];
    if (!sel.length) return null;
    return (
      <div className="flex flex-wrap gap-1">
        {sel.map((v) => {
          const opt = options.find((o) => String(o.value) === String(v));
          const label = opt?.label ?? v;
          return (
            <span
              key={String(v)}
              className={`inline-flex items-center ${rounded} bg-primary/30  text-slate-800 px-2 py-0.5 text-xs`}
            >
              {label}
              {!disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleValue(v);
                  }}
                  className={`ml-1 ${rounded} p-0.5 hover:bg-slate-300/70`}
                  aria-label={`Remove ${label}`}
                >
                  ✕
                </button>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  const displayValue = useMemo(() => {
    if (multiple) return ""; // chips render instead
    if (value == null) return "";
    const opt = options.find((o) => String(o.value) === String(value));
    return opt?.label ?? String(value);
  }, [multiple, value, options]);

  return (
    <div
      ref={wrapRef}
      className={`relative ${width} ${className}`}
      onKeyDown={onKeyDown}
    >
      {/* Combobox/trigger */}
      <button
        type="button"
        className={`w-full text-left ${rounded} border  ${backgroundColor} backdrop-blur-sm text-[12px]  px-3 py-2 focus:outline-none   disabled:opacity-60 disabled:cursor-not-allowed ${
          open ? "border-primary " : "border-black/50"
        } ${triggerClassName}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        data-state={open ? "open" : "closed"}
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
      >
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0 flex flex-col">
            {label && (
              <label
                className={`block mb-0.5 leading-none cursor-pointer ${labelClassName}`}
              >
                {label}
              </label>
            )}
            {multiple ? (
              <>
                {renderChips()}
                {!Array.isArray(value) || value.length === 0 ? (
                  <span className={`text-black/50 ${placeholderClassName}`}>
                    {placeholder}
                  </span>
                ) : null}
              </>
            ) : (
              <span
                className={
                  displayValue
                    ? `${selectedValueClassName || placeholderClassName || "text-slate-900"}`
                    : placeholderClassName || "text-slate-400"
                }
              >
                {displayValue || placeholder}
              </span>
            )}
          </div>
          <span
            className={`shrink-0 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </div>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute z-50 mt-1 w-full ${rounded} border border-slate-200  bg-white shadow-xl overflow-hidden`}
          role="listbox"
          aria-activedescendant={
            activeIndex >= 0 ? `smart-opt-${activeIndex}` : undefined
          }
        >
          {/* Search */}
          {search && (
            <div className="p-2 border-b border-slate-200/70">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className={`w-full ${rounded} bg-tertiary border border-slate-200  px-3 py-2 text-[12px] focus:outline-none`}
              />
            </div>
          )}

          {/* Options */}
          <ul ref={listRef} className="max-h-60 overflow-auto py-1">
            {filtered.length === 0 && (
              <li className="px-3 py-2 text-[12px] text-slate-500">
                No results
              </li>
            )}
            {filtered.map((opt, idx) => {
              const isSelected = selectedSet.has(String(opt.value));
              const isActive = idx === activeIndex;
              const selectedClass = isSelected
                ? optionSelectedClassName || optionActiveClassName
                : "";
              return (
                <li
                  key={String(opt.value)}
                  id={`smart-opt-${idx}`}
                  data-index={idx}
                  role="option"
                  aria-selected={isSelected}
                  className={`mx-1 my-0.5 rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 text-[12px] select-none
                    ${
                      opt.disabled
                        ? "opacity-50 cursor-not-allowed"
                        : optionHoverClassName
                    }
                    ${isActive ? optionActiveClassName : ""}
                    ${selectedClass}
                  `}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    if (opt.disabled) return;
                    multiple ? toggleValue(opt.value) : chooseSingle(opt.value);
                  }}
                >
                  {/* Checkbox marker for multi */}

                  <span className="truncate">{opt.label}</span>
                  {checkbox && multiple && (
                    <span
                      className={`ml-auto h-4 w-4 rounded-full ${
                        isSelected
                          ? "bg-primary"
                          : "bg-transparent border-2 border-primary"
                      }`}
                    />
                  )}
                  {checkbox && !multiple && (
                    <span
                      className={`ml-auto h-2 w-2 rounded-full ${
                        isSelected
                          ? "bg-primary"
                          : "bg-transparent border border-primary"
                      }`}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Hidden inputs for forms */}
      {name && (
        <div className="hidden">
          {multiple ? (
            Array.isArray(value) ? (
              value.map((v, i) => (
                <input key={i} type="hidden" name={name} value={String(v)} />
              ))
            ) : null
          ) : value != null ? (
            <input type="hidden" name={name} value={String(value)} />
          ) : null}
        </div>
      )}
    </div>
  );
}

// reference purpose

//   <div>
//         <div>
//           <div className="space-y-2">
//             <label className="text-sm text-slate-600 dark:text-slate-300">
//               Single select
//             </label>
//             <SmartSelect
//               options={demoOptions}
//               value={single}
//               onChange={setSingle}
//               placeholder="Pick one"
//               className=""
//               name="single"
//             />
//             <div className="text-xs text-slate-500">
//               Value: {single === null ? "null" : String(single)}
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm text-slate-600 dark:text-slate-300">
//               Multi select
//             </label>
//             <SmartSelect
//               multiple
//               options={demoOptions}
//               value={multi}
//               onChange={setMulti}
//               placeholder="Pick some options"
//               className="w-full"
//               name="multi[]"
//             />
//             <div className="text-xs text-slate-500">
//               Values: {JSON.stringify(multi)}
//             </div>
//           </div>
//         </div>
//       </div>
