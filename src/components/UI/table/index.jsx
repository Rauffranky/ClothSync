import React, { useMemo, useState } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import Checkbox from "../check-box";

function cx(...xs) {
  return xs.filter(Boolean).join(" ");
}

export function DataTable({
  columns = [],
  rows = [],
  getRowId = (row, i) => row?.id ?? i,
  selectable = true,
  selection: controlledSelection,
  onSelectionChange,
  headerBg = "bg-[#F8FAF8]",
  rowBg = "",
  rowActions,
  emptyState,
  onRowClick,
  rowClassName = "",
  sortColumn,
  sortDirection,
  onSort,
}) {
  const [internalSel, setInternalSel] = useState([]);
  const selected = controlledSelection ?? internalSel;

  const [internalSortCol, setInternalSortCol] = useState(null);
  const [internalSortDir, setInternalSortDir] = useState("asc");

  const activeSortCol = sortColumn ?? internalSortCol;
  const activeSortDir = sortDirection ?? internalSortDir;

  const handleSort = (key) => {
    const direction =
      activeSortCol === key && activeSortDir === "asc" ? "desc" : "asc";

    if (!sortColumn) {
      setInternalSortCol(key);
      setInternalSortDir(direction);
    }

    if (onSort) {
      onSort(key, direction);
    }
  };

  const processedRows = useMemo(() => {
    if (!activeSortCol || onSort) return rows;

    return [...rows].sort((a, b) => {
      const valA = a[activeSortCol];
      const valB = b[activeSortCol];

      if (valA == null) return 1;
      if (valB == null) return -1;

      if (typeof valA === "number" && typeof valB === "number") {
        return activeSortDir === "asc" ? valA - valB : valB - valA;
      }

      const strA = String(valA).toLowerCase();
      const strB = String(valB).toLowerCase();

      if (strA < strB) return activeSortDir === "asc" ? -1 : 1;
      if (strA > strB) return activeSortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, activeSortCol, activeSortDir, onSort]);

  const allIds = useMemo(
    () => processedRows.map((r, i) => getRowId(r, i)),
    [processedRows, getRowId],
  );
  const allSelected =
    selectable && allIds.length > 0 && selected.length === allIds.length;
  const someSelected =
    selectable && selected.length > 0 && selected.length < allIds.length;

  function setSelection(next) {
    onSelectionChange ? onSelectionChange(next) : setInternalSel(next);
  }
  function toggleAll() {
    if (!selectable) return;
    setSelection(allSelected ? [] : allIds);
  }
  function toggleOne(id) {
    if (!selectable) return;
    setSelection((prev) => {
      const base = new Set(controlledSelection ?? prev);
      base.has(id) ? base.delete(id) : base.add(id);
      return Array.from(base);
    });
  }

  return (
    <div className="data-table-container overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <table className="data-table">
        <thead>
          <tr className={headerBg}>
            {selectable && (
              <th
                scope="col"
                className={cx(
                  "px-6 py-2 text-[14px] font-semibold text-black! uppercase first:rounded-l-2xl",
                )}
              >
                <div className="flex items-center">
                  <Checkbox
                    checked={allSelected}
                    // Handle indeterminate state if needed, though standard Checkbox might not support it visually yet
                    // ref={(el) => el && (el.indeterminate = someSelected)} 
                    onChange={toggleAll}
                  />
                </div>
              </th>
            )}
            {columns.map((c, i) => (
              <th
                key={c.key}
                scope="col"
                className={cx(
                  "px-6 py-2 text-[14px] font-semibold text-black! uppercase",
                  !selectable && i === 0 && "rounded-l-2xl",
                  !rowActions && i === columns.length - 1 && "rounded-r-2xl",
                  c.align === "right"
                    ? "text-right"
                    : c.align === "center"
                      ? "text-center"
                      : "text-left",
                  c.sorting && "cursor-pointer select-none",
                )}
                style={{ width: c.width }}
                onClick={() => c.sorting && handleSort(c.key)}
              >
                <div
                  className={cx(
                    "flex items-center gap-2 whitespace-nowrap ",
                    c.align === "right" && "justify-end",
                    c.align === "center" && "justify-center",
                  )}
                >
                  {c.header}
                  {c.sorting && (
                    <span className="text-gray-400">
                      {activeSortCol === c.key ? (
                        activeSortDir === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )
                      ) : (
                        <ChevronsUpDown size={16} />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
            {rowActions && (
              <th
                scope="col"
                className={cx(
                  "px-6 py-2 text-[14px] font-semibold text-black! uppercase last:rounded-r-2xl",
                )}
              >
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {processedRows.length === 0 && (
            <tr>
              <td
                colSpan={
                  columns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0)
                }
                className="text-center"
              >
                {emptyState ?? (
                  <span className="text-gray-500">No records found.</span>
                )}
              </td>
            </tr>
          )}

          {processedRows.map((row, idx) => {
            const id = getRowId(row, idx);
            const isChecked = selectable && selected.includes(id);

            return (
              <tr
                key={id}
                onClick={() => onRowClick && onRowClick(row, id)}
                className={cx(
                  typeof rowClassName === "function"
                    ? rowClassName(row, id)
                    : rowClassName,
                  onRowClick && "cursor-pointer",
                )}
              >
                {selectable && (
                  <td className={cx("w-4 py-2", rowBg)}>
                    <div className="flex items-center">
                      <Checkbox
                        checked={isChecked}
                        onChange={() => toggleOne(id)}
                      />
                      <span className="sr-only">Select row</span>
                      <span className="sr-only">Select row</span>
                    </div>
                  </td>
                )}
                {columns.map((c) => {
                  const value = row[c.key];
                  const node = c.render ? c.render(value, row, idx) : value;
                  const tdClass = cx(
                    c.align === "right"
                      ? "text-right"
                      : c.align === "center"
                        ? "text-center"
                        : "text-left",
                    "px-6 py-3! whitespace-nowrap",
                    rowBg,
                  );
                  const scopeProps =
                    typeof node === "object" && node?.__asTh
                      ? {
                        scope: "row",
                        className: cx(
                          tdClass,
                          "font-medium text-gray-900 whitespace-nowrap",
                        ),
                      }
                      : { className: tdClass };
                  return (
                    <td key={c.key} {...scopeProps}>
                      {node?.__node ?? node}
                    </td>
                  );
                })}
                {rowActions && (
                  <td className={cx("text-center py-2", rowBg)}>
                    {rowActions(row)}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
