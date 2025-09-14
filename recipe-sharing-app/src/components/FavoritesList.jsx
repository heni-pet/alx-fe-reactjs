// src/components/FavoritesList.jsx
import React from 'react'
import { useRecipeStore } from './recipeStore';

export default function FavoritesList() {
  const { recipes, favorites, toggleFavorite } = useRecipeStore(s => ({
    recipes: s.recipes,
    favorites: s.favorites,
    toggleFavorite: s.toggleFavorite,
  }))

  const favRecipes = recipes.filter(r => favorites.includes(r.id))

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.length === 0 && <p>No favorites yet.</p>}
      {favRecipes.map(r => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <button onClick={() => toggleFavorite(r.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
