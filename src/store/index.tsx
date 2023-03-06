import { create } from 'zustand'

type ILoginStore = {
  showLoginForm: boolean
  setShowLoginForm: (isShow: boolean) => void
}

// const useLoginStore = create<typeLoginStore>((set) => ({
//   showLoginForm: false,
//   setShowLoginForm: (isShow: boolean) => set(() => ({ showLoginForm: isShow }))
// }))

const useLoginStore = create<ILoginStore>((set, get) => ({
  showLoginForm: false,
  setShowLoginForm: (isShow: boolean) => set(() => ({ showLoginForm: isShow }))
}))

export { useLoginStore }
