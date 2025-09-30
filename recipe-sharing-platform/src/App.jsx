import HomePage from "./components/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecipeDetail from "./components/RecipeDetail"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  )
}


