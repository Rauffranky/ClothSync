/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import Checkbox from "../check-box";
import { useTranslation } from 'react-i18next';

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
  dir: propDir,
}) {
  const { i18n } = useTranslation();
  const [internalSel, setInternalSel] = useState([]);
  const selected = controlledSelection ?? internalSel;

  const [internalSortCol, setInternalSortCol] = useState(null);
  const [internalSortDir, setInternalSortDir] = useState("asc");

  // Use propDir if provided, otherwise use i18n direction
  const dir = propDir || i18n.dir();

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

  // Calculate total columns for border radius logic
  const totalColumns = columns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0);

  // Helper function to determine border radius classes for body cells
  const getBodyCellBorderRadiusClasses = (cellIndex) => {
    const baseClasses = "px-6 py-3! whitespace-nowrap";
    
    if (dir === "ltr") {
      // LTR mode: first cell rounded left, last cell rounded right
      if (cellIndex === 0) {
        return `${baseClasses} rounded-l-2xl ${rowBg}`;
      }
      if (cellIndex === totalColumns - 1) {
        return `${baseClasses} rounded-r-2xl ${rowBg}`;
      }
    } else {
      // RTL mode: first cell rounded right, last cell rounded left
      if (cellIndex === 0) {
        return `${baseClasses} rounded-r-2xl ${rowBg}`;
      }
      if (cellIndex === totalColumns - 1) {
        return `${baseClasses} rounded-l-2xl ${rowBg}`;
      }
    }
    
    return `${baseClasses} ${rowBg}`;
  };

  // Helper function for header border radius
  const getHeaderBorderRadiusClasses = (cellIndex) => {
    const baseClasses = "px-6 py-2 text-[14px] font-semibold text-black! uppercase";
    
    if (dir === "ltr") {
      if (cellIndex === 0) {
        return `${baseClasses} rounded-l-2xl`;
      }
      if (cellIndex === totalColumns - 1) {
        return `${baseClasses} rounded-r-2xl`;
      }
    } else {
      if (cellIndex === 0) {
        return `${baseClasses} rounded-r-2xl`;
      }
      if (cellIndex === totalColumns - 1) {
        return `${baseClasses} rounded-l-2xl`;
      }
    }
    
    return baseClasses;
  };

  return (
    <div 
      className="data-table-container overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      dir={dir}
    >
      <table className="data-table w-full border-separate border-spacing-0">
        <thead>
          <tr className={headerBg}>
            {selectable && (
              <th
                scope="col"
                className={getHeaderBorderRadiusClasses(0)}
              >
                <div className="flex items-center">
                  <Checkbox
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                </div>
              </th>
            )}
            {columns.map((c, i) => {
              // Calculate actual column index including selectable column
              const actualColIndex = selectable ? i + 1 : i;
              
              return (
                <th
                  key={c.key}
                  scope="col"
                  className={cx(
                    getHeaderBorderRadiusClasses(actualColIndex),
                    c.align === "right"
                      ? "text-right"
                      : c.align === "center"
                        ? "text-center"
                        : dir === "rtl" ? "text-right" : "text-left",
                    c.sorting && "cursor-pointer select-none",
                  )}
                  style={{ width: c.width }}
                  onClick={() => c.sorting && handleSort(c.key)}
                >
                  <div
                    className={cx(
                      "flex items-center gap-2 whitespace-nowrap",
                      c.align === "right"
                        ? "justify-end"
                        : c.align === "center"
                          ? "justify-center"
                          : dir === "rtl" ? "justify-end" : "justify-start",
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
              );
            })}
            {rowActions && (
              <th
                scope="col"
                className={getHeaderBorderRadiusClasses(totalColumns - 1)}
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
                colSpan={totalColumns}
                className="text-center py-4"
              >
                {emptyState ?? (
                  <span className="text-gray-500">
                    {i18n.t('table.noRecords')}
                  </span>
                )}
              </td>
            </tr>
          )}

          {processedRows.map((row, rowIdx) => {
            const id = getRowId(row, rowIdx);
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
                  <td className={getBodyCellBorderRadiusClasses(0)}>
                    <div className="flex items-center">
                      <Checkbox
                        checked={isChecked}
                        onChange={() => toggleOne(id)}
                      />
                      <span className="sr-only">
                        {i18n.t('table.selectRow')}
                      </span>
                    </div>
                  </td>
                )}
                {columns.map((c, colIdx) => {
                  const value = row[c.key];
                  const node = c.render ? c.render(value, row, rowIdx) : value;
                  
                  // Calculate actual column index including selectable column
                  const actualColIndex = selectable ? colIdx + 1 : colIdx;
                  
                  // Determine text alignment based on column alignment and direction
                  let textAlign = "text-left";
                  if (c.align === "right") {
                    textAlign = "text-right";
                  } else if (c.align === "center") {
                    textAlign = "text-center";
                  } else if (dir === "rtl" && !c.align) {
                    textAlign = "text-right";
                  }
                  
                  const tdClass = getBodyCellBorderRadiusClasses(actualColIndex);
                  
                  const finalTdClass = cx(
                    tdClass,
                    textAlign,
                  );
                  
                  const scopeProps =
                    typeof node === "object" && node?.__asTh
                      ? {
                        scope: "row",
                        className: cx(
                          finalTdClass,
                          "font-medium text-gray-900",
                        ),
                      }
                      : { className: finalTdClass };
                      
                  return (
                    <td key={c.key} {...scopeProps}>
                      {node?.__node ?? node}
                    </td>
                  );
                })}
                {rowActions && (
                  <td className={getBodyCellBorderRadiusClasses(totalColumns - 1)}>
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