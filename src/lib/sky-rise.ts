type SkyRiseRange = {
  startPx: number;
  endPx: number;
};

export function getSkyRiseRange(section: HTMLElement): SkyRiseRange {
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
  const previousSection = section.previousElementSibling;
  const previousPadding = previousSection ? parseFloat(getComputedStyle(previousSection).paddingBottom) : 0;
  return { startPx: headerHeight + previousPadding, endPx: headerHeight };
}
