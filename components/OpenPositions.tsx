"use client";

import React, { useMemo, useState } from "react";

export type Department = "All" | "Tech" | "Marketing" | "Design";

export type Position = {
  id: string;
  title: string;
  meta: string;
  department: Exclude<Department, "All">;
  renderDetails?: React.ReactNode;
};

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.5 7.5L10 12l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DepartmentTab({
  label,
  active,
  onClick,
}: {
  label: Exclude<Department, "All">;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "text-white/80"
          : "text-zinc-500 hover:text-zinc-300 transition-colors"
      }
    >
      {label}
    </button>
  );
}

export default function OpenPositions({
  positions,
  defaultDepartment = "All",
}: {
  positions: Position[];
  defaultDepartment?: Department;
}) {
  const [department, setDepartment] = useState<Department>(defaultDepartment);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const departments: Department[] = ["All", "Tech", "Marketing", "Design"];

  const filtered = useMemo(() => {
    if (department === "All") return positions;
    return positions.filter((p) => p.department === department);
  }, [department, positions]);

  return (
    <div>
      {/* Filter row */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-200 hover:bg-white/[0.05] transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
          >
            <span>{department === "All" ? "All Positions" : department}</span>
            <ChevronDownIcon className="h-4 w-4 text-zinc-400" />
          </button>

          {isDropdownOpen && (
            <div
              className="absolute left-1/2 mt-3 w-52 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b0a10]/95 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.55)] overflow-hidden z-20"
              role="listbox"
              aria-label="Departments"
            >
              {departments.map((d) => {
                const active = d === department;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => {
                      setDepartment(d);
                      setIsDropdownOpen(false);
                    }}
                    className={[
                      "w-full text-left px-4 py-3 text-sm transition-colors",
                      active
                        ? "text-white bg-white/[0.06]"
                        : "text-zinc-300 hover:bg-white/[0.04] hover:text-white",
                    ].join(" ")}
                    role="option"
                    aria-selected={active}
                  >
                    {d === "All" ? "All Positions" : d}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 text-sm">
          <DepartmentTab
            label="Tech"
            active={department === "Tech"}
            onClick={() => setDepartment("Tech")}
          />
          <DepartmentTab
            label="Marketing"
            active={department === "Marketing"}
            onClick={() => setDepartment("Marketing")}
          />
          <DepartmentTab
            label="Design"
            active={department === "Design"}
            onClick={() => setDepartment("Design")}
          />
        </div>
      </div>

      {/* List */}
      <div className="mt-10 space-y-4">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md px-6 py-10 text-center">
            <p className="text-white font-semibold">No openings right now</p>
            <p className="mt-2 text-sm text-zinc-400">
              Check back soon or email{" "}
              <a
                href="mailto:careers@evoclabs.com?subject=General%20Application%20-%20Evoc%20Labs"
                className="text-blue-300 hover:text-white transition-colors"
              >
                careers@evoclabs.com
              </a>
              .
            </p>
          </div>
        ) : (
          filtered.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] transition-colors overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.35)]"
            >
              {p.renderDetails ? (
                p.renderDetails
              ) : (
                <div className="px-6 py-5 flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    <p className="text-white font-semibold truncate">
                      {p.title}
                    </p>
                    <p className="mt-1 text-zinc-400 text-sm">{p.meta}</p>
                  </div>
                  <a
                    href="#apply"
                    className="shrink-0 text-sm font-medium text-blue-300 hover:text-white transition-colors"
                  >
                    Apply Now →
                  </a>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

