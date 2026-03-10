import React, { useCallback, useMemo, useRef, useState } from "react";
import Button from "../button";

/**
 * DragDropUpload — Reusable global file upload (drag & drop + click)
 * Framework: React (plain JS) + TailwindCSS (no external libs)
 *
 * Props
 *  - multiple?: boolean = true
 *  - accept?: string | string[] (same format as <input accept>)
 *  - maxFiles?: number
 *  - maxSizeMB?: number (per-file)
 *  - disabled?: boolean
 *  - value?: File[] (controlled)
 *  - onChange?: (files: File[]) => void (for controlled usage)
 *  - onFilesAdded?: (newFiles: File[], allFiles: File[]) => void
 *  - onError?: (errors: string[]) => void
 *  - helperText?: string
 *  - className?: string (extra container classes)
 *
 * Notes
 *  - Filters files by accept, maxFiles, and maxSizeMB
 *  - Fully keyboard accessible (Enter/Space opens picker)
 *  - Shows simple file chips with remove buttons and inline image previews
 */

function cx(...xs) {
  return xs.filter(Boolean).join(" ");
}

function normalizeAccept(accept) {
  if (!accept) return [];
  if (Array.isArray(accept)) return accept;
  return String(accept)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function isAccepted(file, acceptList) {
  if (!acceptList.length) return true; // no filter
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return acceptList.some((rule) => {
    const r = rule.toLowerCase();
    if (r.startsWith(".")) {
      return name.endsWith(r); // extension match
    }
    if (r.endsWith("/*")) {
      const base = r.replace("/*", "");
      return type.startsWith(base + "/"); // image/*, video/*
    }
    return type === r; // exact mime
  });
}

function toMB(bytes) {
  return bytes / (1024 * 1024);
}

export function DragDropUpload({
  multiple = true,
  accept,
  maxFiles,
  maxSizeMB,
  disabled = false,
  value,
  onChange,
  onFilesAdded,
  onError,
  helperText,
  className = "",
  dropzoneClassName = "",
  children,
  showList = true,
}) {
  const acceptList = useMemo(() => normalizeAccept(accept), [accept]);
  const inputRef = useRef(null);
  const [internalFiles, setInternalFiles] = useState([]);
  const files = value ?? internalFiles;
  const [dragActive, setDragActive] = useState(false);

  const reportError = useCallback(
    (errs) => {
      if (errs?.length && onError) onError(errs);
    },
    [onError]
  );

  const updateFiles = useCallback(
    (next) => {
      if (onChange) onChange(next);
      else setInternalFiles(next);
    },
    [onChange]
  );

  const addFiles = useCallback(
    (list) => {
      const incoming = Array.from(list || []);
      const errs = [];

      // filter by accept
      const accepted = incoming.filter((f) => {
        const ok = isAccepted(f, acceptList);
        if (!ok) errs.push(`File type not allowed: ${f.name}`);
        return ok;
      });

      // filter by max size
      const sizeFiltered = maxSizeMB
        ? accepted.filter((f) => {
          const ok = toMB(f.size) <= maxSizeMB;
          if (!ok) errs.push(`Too large (>${maxSizeMB}MB): ${f.name}`);
          return ok;
        })
        : accepted;

      // limit by maxFiles
      const current = files;
      let merged = multiple
        ? [...current, ...sizeFiltered]
        : sizeFiltered.slice(0, 1);
      if (typeof maxFiles === "number") {
        if (merged.length > maxFiles) {
          errs.push(`Maximum ${maxFiles} file(s) allowed.`);
          merged = merged.slice(0, maxFiles);
        }
      }

      reportError(errs);
      updateFiles(merged);
      onFilesAdded?.(merged.slice(-sizeFiltered.length), merged);
    },
    [
      files,
      acceptList,
      maxSizeMB,
      multiple,
      maxFiles,
      updateFiles,
      reportError,
      onFilesAdded,
    ]
  );

  const onBrowse = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const onInputChange = (e) => {
    addFiles(e.target.files);
    e.target.value = ""; // allow selecting same file again
  };

  const onRemove = (idx) => {
    const next = files.filter((_, i) => i !== idx);
    updateFiles(next);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (disabled) return;
    e.dataTransfer.dropEffect = "copy";
    setDragActive(true);
  };
  const handleDragLeave = () => setDragActive(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (disabled) return;
    addFiles(e.dataTransfer.files);
  };

  return (
    <div className={cx("w-full", className)}>
      <div
        role="button"
        tabIndex={0}
        aria-disabled={disabled}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onBrowse()}
        onClick={onBrowse}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cx(
          "relative flex flex-col items-center justify-center gap-2 px-6 py-10 border-2 border-dashed rounded-2xl transition",
          dragActive
            ? "border-blue-500 bg-blue-50/50"
            : "border-gray-300 bg-white",
          disabled
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer hover:bg-gray-50",
          dropzoneClassName
        )}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={Array.isArray(accept) ? accept.join(",") : accept}
          onChange={onInputChange}
          disabled={disabled}
        />
        {children || (
          <div className="text-sm text-gray-700 text-center">
            <span className="font-medium">Drag & drop</span> files here or{" "}
            <span className="text-primary underline">browse</span>
          </div>
        )}
        {acceptList.length > 0 && (
          <div className="text-xs text-gray-500">
            Allowed: {acceptList.join(", ")}
          </div>
        )}
        {maxSizeMB && (
          <div className="text-xs text-gray-500">
            Max size: {maxSizeMB}MB each
          </div>
        )}
        {typeof maxFiles === "number" && (
          <div className="text-xs text-gray-500">Up to {maxFiles} file(s)</div>
        )}
      </div>

      {/* Selected files list */}
      {showList && files.length > 0 && (
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {files.map((file, i) => {
            const isImage = file.type.startsWith("image/");
            const url = isImage ? URL.createObjectURL(file) : null;
            return (
              <li
                key={i}
                className="flex items-center gap-3 p-2 border rounded-xl bg-white"
              >
                {isImage ? (
                  <img
                    src={url}
                    alt={file.name}
                    className="w-12 h-12 object-cover rounded-lg"
                    onLoad={() => URL.revokeObjectURL(url)}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-xs">
                    FILE
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {toMB(file.size).toFixed(2)} MB
                  </p>
                </div>
                <Button
                  label="Remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(i);
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}

      {helperText && <p className="mt-2 text-xs text-gray-500">{helperText}</p>}
    </div>
  );
}
