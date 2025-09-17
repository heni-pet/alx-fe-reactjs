import { useEffect } from 'react'
import { useRecipeStore } from './recipeStore'

export default function RecommendationsList() {
  const { recommendations, generateRecommendations, toggleFavorite } =
    useRecipeStore(state => ({
      recommendations: state.recommendations,
      generateRecommendations: state.generateRecommendations,
      toggleFavorite: state.toggleFavorite
    }))

  useEffect(() => {
    if (recommendations.length === 0) {
      generateRecommendations()
    }
  }, [recommendations, generateRecommendations])

  return (
    <div>
      {recommendations.length === 0 && <p>No recommendations.</p>}
      {recommendations.map(r => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.description}</p>
          <button onClick={() => toggleFavorite(r.id)}>
            {r.isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  )
}
