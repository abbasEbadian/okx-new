import create from 'zustand'

export const useThemeStore = create((set) => ({
    currentTheme: 'dark',
    changeTheme: () => set((state) => {
        return { 
            currentTheme: state.currentTheme === 'dark' ? 'light' : 'dark'
        }
    })
}))
export const dashboardStore = create((set) => ({
    activePage: 'dashboard',
    setActivePage: (page) => set(page)
}))