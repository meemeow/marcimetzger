"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import type { SelectOption } from "@/types/content";
import { cn } from "@/lib/utils";
import { darkFieldStyles, darkLabelStyles } from "@/lib/styles";

const visibleOptionCount = 7;
const searchableOptionCount = 12;

type SelectFieldProps = {
  label: string;
  name: string;
  options: SelectOption[];
  className?: string;
};

export function SelectField({ label, name, options, className }: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [activeIndex, setActiveIndex] = useState(0);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const buttonId = `${id}-button`;
  const listId = `${id}-list`;
  const optionId = (index: number) => `${id}-option-${index}`;

  const isSearchable = options.length >= searchableOptionCount;
  const selectedOption = options.find((option) => option.value === selectedValue) ?? options[0];
  const visibleOptions = options.filter((option) => option.label.toLowerCase().includes(query.trim().toLowerCase()));
  const lastIndex = visibleOptions.length - 1;

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    searchRef.current?.focus();
    rootRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [isOpen]);

  function open() {
    setQuery("");
    setActiveIndex(options.indexOf(selectedOption));
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    buttonRef.current?.focus();
  }

  function choose(option: SelectOption) {
    setSelectedValue(option.value);
    close();
  }

  function highlight(index: number) {
    setActiveIndex(index);
    document.getElementById(optionId(index))?.scrollIntoView({ block: "nearest" });
  }

  function search(value: string) {
    setQuery(value);
    setActiveIndex(0);
  }

  function onListKeyDown(event: KeyboardEvent<HTMLElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        highlight(Math.min(activeIndex + 1, lastIndex));
        break;
      case "ArrowUp":
        event.preventDefault();
        highlight(Math.max(activeIndex - 1, 0));
        break;
      case "Enter":
        event.preventDefault();
        if (visibleOptions[activeIndex]) choose(visibleOptions[activeIndex]);
        break;
      case "Escape":
        event.preventDefault();
        close();
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  }

  function onButtonKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (!isOpen) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        open();
      }
      return;
    }
    if (event.key === " ") {
      event.preventDefault();
      choose(visibleOptions[activeIndex]);
      return;
    }
    if (event.key.length === 1) {
      const match = options.findIndex((option) => option.label.toLowerCase().startsWith(event.key.toLowerCase()));
      if (match !== -1) highlight(match);
      return;
    }
    onListKeyDown(event);
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <label htmlFor={buttonId} className={darkLabelStyles}>
        {label}
      </label>
      <input type="hidden" name={name} value={selectedOption.value} />
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-activedescendant={isOpen && !isSearchable ? optionId(activeIndex) : undefined}
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={onButtonKeyDown}
        className={cn(darkFieldStyles, "relative pr-6 text-left")}
      >
        <span className="block truncate">{selectedOption.label}</span>
        <ChevronDown
          className={cn(
            "pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-gold-light transition-transform",
            isOpen && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-20 mt-2 w-full min-w-56 overflow-hidden rounded-md border border-white/15 bg-ink shadow-2xl">
          {isSearchable && (
            <div className="border-b border-white/10 p-2">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/50"
                  aria-hidden
                />
                <input
                  ref={searchRef}
                  type="text"
                  role="combobox"
                  aria-label={`Search ${label}`}
                  aria-expanded
                  aria-controls={listId}
                  aria-autocomplete="list"
                  aria-activedescendant={visibleOptions.length > 0 ? optionId(activeIndex) : undefined}
                  value={query}
                  onChange={(event) => search(event.target.value)}
                  onKeyDown={onListKeyDown}
                  placeholder="Search..."
                  className="w-full rounded-sm border border-white/20 bg-white/5 py-2 pr-3 pl-9 text-sm text-white placeholder:text-white/50 focus:border-gold-light focus:outline-none"
                />
              </div>
            </div>
          )}
          <ul
            id={listId}
            role="listbox"
            aria-labelledby={buttonId}
            data-native-scroll
            style={{ maxHeight: `calc(${visibleOptionCount} * 2.25rem + 0.5rem)` }}
            className="thin-scrollbar overflow-y-auto overscroll-contain py-1"
          >
            {visibleOptions.map((option, index) => {
              const isSelected = option.value === selectedOption.value;
              return (
                <li
                  key={option.label}
                  id={optionId(index)}
                  role="option"
                  aria-selected={isSelected}
                  onPointerEnter={() => setActiveIndex(index)}
                  onClick={() => choose(option)}
                  className={cn(
                    "flex h-9 cursor-pointer items-center justify-between gap-3 px-4 text-sm text-white/80",
                    index === activeIndex && "bg-white/10 text-white",
                    isSelected && "text-gold-light",
                  )}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && <Check className="size-4 shrink-0" aria-hidden />}
                </li>
              );
            })}
          </ul>
          {visibleOptions.length === 0 && <p className="px-4 py-3 text-sm text-white/60">No matches</p>}
        </div>
      )}
    </div>
  );
}
