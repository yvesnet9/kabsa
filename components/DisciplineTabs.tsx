"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type DisciplineTab = {
  id: string;
  label: string;
  content: ReactNode;
};

type DisciplineTabsProps = {
  tabs: DisciplineTab[];
  defaultTabId?: string;
};

export default function DisciplineTabs({ tabs, defaultTabId }: DisciplineTabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const wrapped = (index + tabs.length) % tabs.length;
    tabRefs.current[wrapped]?.focus();
    setActiveId(tabs[wrapped].id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="disc-tabs">
      <div className="disc-tabs__list" role="tablist" aria-label="Sections de la discipline">
        {tabs.map((tab, index) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className={`disc-tabs__tab${selected ? " is-active" : ""}`}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== activeId}
          className="disc-tabs__panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
