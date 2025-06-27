import { CONTENT } from '../content';
import type { NavigationState } from '../store/navigation';

const SECTION_ORDER = ['Legitimo', 'Autentico', 'LeClubLacoste', 'Fachada'];

export const stateToNumber = (s: NavigationState): number => {
  const secIdx = SECTION_ORDER.indexOf(s.section ?? '') + 1;        // 0‑4
  if (!secIdx) return 0;

  const cats = CONTENT[s.section];
  const catIdx = s.category
    ? cats.findIndex((c) => c.id === s.category) + 1
    : 0;

  const floors =
    catIdx && s.category
      ? cats[catIdx - 1].floors
      : [];
  const floorIdx = s.floor
    ? floors.findIndex((f) => f.id === s.floor) + 1
    : 0;

  const hotspots =
    floorIdx && s.floor && s.category
      ? floors[floorIdx - 1].hotspots
      : [];
  const hotIdx = s.hotspot
    ? hotspots.findIndex((h) => h.id === s.hotspot) + 1
    : 0;

  return secIdx * 1000 + catIdx * 100 + floorIdx * 10 + hotIdx;
};
