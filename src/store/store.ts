import { create } from "zustand";

interface BearState {
    bears: number,
    increaseBear: () => void,
    decreaseBear: () => void,
    resetBears: () => void
}

export const useStore = create<BearState>((set)=>({
    bears: 0,
    increaseBear: () => set((state)=>({bears: state.bears + 1})),
    decreaseBear: () => set((state)=>({bears: state.bears - 1})),
    resetBears: () => set((state)=> ({bears: 0}))
}))