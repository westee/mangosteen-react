import { create } from 'zustand'

interface Local {
  isDisplayWelcome: boolean
  setHasReadWelcomes: (read: boolean) => void
}
const init = localStorage.getItem('hasReadWelcomes')
export const useLocalStore = create<Local>((set, get) => ({
  isDisplayWelcome: init === 'yes',
  setHasReadWelcomes: (read: Boolean) => {
    const result = read ? 'yes' : 'no'
    localStorage.setItem('isDisplayWelcome', result)
    set({ isDisplayWelcome: result === 'yes' })
  },
}))
