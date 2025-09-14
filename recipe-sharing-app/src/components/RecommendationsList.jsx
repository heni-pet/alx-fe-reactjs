import React, { useEffect } from 'react'
import { useRecipeStore } from './recipeStore'

export default function RecommendationsList() {
  const {
    recommendations = [],
    generateRecommendations,
    toggleFavorite,
  } = useRecipeStore(s => ({
    recommendations: s.recommendations,
    generateRecommendations: s.generateRecommendations,
    toggleFavorite: s.toggleFavorite,
  }))

  // ✅ Runs only once on mount
  useEffect(() => {
    if (recommendations.length === 0) {
      generateRecommendations()
    }
  }, [generateRecommendations])  // important: dependency array

  return (
    <div>
      <h2>Recommendations</h2>
      <button onClick={generateRecommendations}>Refresh</button>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map(r => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <button onClick={() => toggleFavorite(r.id)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  )
}
