import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      searchTerm: '',
      filteredRecipes: [],
      favorites: [],
      recommendations: [],

      // Recipe Management
      addRecipe: (newRecipe) =>
        set((state) => {
          const updatedRecipes = [...state.recipes, newRecipe];
          return {
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
          };
        }),

      deleteRecipe: (id) =>
        set((state) => {
          const updatedRecipes = state.recipes.filter((r) => r.id !== id);
          const updatedFavorites = state.favorites.filter((fid) => fid !== id);
          return {
            recipes: updatedRecipes,
            favorites: updatedFavorites,
            filteredRecipes: updatedRecipes.filter((r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
          };
        }),

      updateRecipe: (updated) =>
        set((state) => {
          const updatedRecipes = state.recipes.map((r) =>
            r.id === updated.id ? updated : r
          );
          return {
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
          };
        }),

      setSearchTerm: (term) =>
        set((state) => ({
          searchTerm: term,
          filteredRecipes: state.recipes.filter((r) =>
            r.title.toLowerCase().includes(term.toLowerCase())
          ),
        })),

      setRecipes: (recipes) =>
        set({
          recipes,
          filteredRecipes: recipes,
        }),

      // Favorites
      addFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.includes(recipeId)
            ? state.favorites
            : [...state.favorites, recipeId],
        })),

      removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== recipeId),
        })),

      // Recommendations (mock example)
      generateRecommendations: () =>
        set((state) => ({
          recommendations: state.recipes.filter(
            (recipe) =>
              state.favorites.includes(recipe.id) && Math.random() > 0.5
          ),
        })),
    }),
    { name: 'recipes-storage' }
  )
);

export default useRecipeStore;
