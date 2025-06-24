import { create } from 'zustand';

export interface NavigationState {
    section: string | null;
    category: string | null;
    floor: string | null;
    hotspot: string | null;
    setNav: (patch: Partial<NavigationState>) => void;
}

/* ---------- helper: tira a função antes de mandar ---------- */
type NavPayload = Omit<NavigationState, 'setNav'>;
const toPayload = (s: NavigationState): NavPayload => ({
    section: s.section,
    category: s.category,
    floor: s.floor,
    hotspot: s.hotspot,
});
/* ----------------------------------------------------------- */

const channel = new BroadcastChannel('navigation');

export const useNavigationStore = create<NavigationState>((set) => ({
    section: null,
    category: null,
    floor: null,
    hotspot: null,

    setNav: (patch) =>
        set((state) => {
            const next = { ...state, ...patch };
            channel.postMessage(toPayload(next));   // ✅ só dados clonáveis
            return next;
        }),
}));

channel.onmessage = (ev) => {
    const payload = ev.data as NavPayload;
    useNavigationStore.setState((s) => ({ ...s, ...payload }));
};
