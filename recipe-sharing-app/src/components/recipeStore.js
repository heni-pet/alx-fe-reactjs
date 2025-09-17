import { create } from 'zustand';
import { shallow } from 'zustand/shallow'
export const useRecipeStore = create((set) => ({
  recipes: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  toggleFavorite: id =>
    set(state => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter(f => f !== id)
        : [...state.favorites, id],
    })),
    
  generateRecommendations: () =>
    set(state => {
      const pool = state.recipes.filter(r => !state.favorites.includes(r.id))
      const picks = pool.sort(() => 0.5 - Math.random()).slice(0, 3)
      return { recommendations: picks }
    }),
  setSearchTerm: term => set({ searchTerm: term }),
  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updated } : r)),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
