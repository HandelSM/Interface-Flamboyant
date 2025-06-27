// src/store/navigation.ts
import { create } from 'zustand'
import { sendOscState } from '../osc'
import { stateToNumber } from '../utils/stateToNumber'

export interface NavigationState {
    section : string | null
    category: string | null
    floor   : string | null
    hotspot : string | null
    setNav  : (patch: Partial<NavigationState>) => void
}

/* ---------- serialização p/ BroadcastChannel ---------- */
type NavPayload = Omit<NavigationState, 'setNav'>
const toPayload = (s: NavigationState): NavPayload => ({
    section : s.section,
    category: s.category,
    floor   : s.floor,
    hotspot : s.hotspot,
})
/* ------------------------------------------------------ */

const channel = new BroadcastChannel('navigation')

export const useNavigationStore = create<NavigationState>((set) => ({
    section : null,
    category: null,
    floor   : null,
    hotspot : null,

    setNav: (patch) =>
    set((state) => {
        const next = { ...state, ...patch }
        channel.postMessage(toPayload(next))   // sincroniza abas
        return next
    }),
}))

/* escuta outras abas */
channel.onmessage = (ev) => {
    const payload = ev.data as NavPayload
    useNavigationStore.setState((s) => ({ ...s, ...payload }))
}

/* ENVIO OSC:  toda vez que o estado mudar */

const isControlTab =
    window.location.pathname.startsWith('/tablet')

useNavigationStore.subscribe((next) => {
    if (!isControlTab) return

    const code = stateToNumber(next)   // sempre >= 0
    console.log(code)
    sendOscState(code)                 // envia para o servidor OSC
})
