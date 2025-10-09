// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query'

export default function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error('Network response failed')
    return response.json()
  }

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // 1 minute cache
  })

  if (isLoading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>

      <ul style={{ marginTop: '20px' }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
