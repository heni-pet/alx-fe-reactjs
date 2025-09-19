import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    setError(false);
    setUser(null);
    try {
      const data = await fetchUserData(username.trim());
      setUser([data]); // wrap single user in array
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Looks like we can't find the user</p>}

      {user &&
        user.map((u) => (
          <div
            key={u.id}
            className="border border-gray-200 rounded p-4 shadow-sm space-y-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={u.avatar_url}
                alt="avatar"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <p className="font-bold text-lg">{u.name || u.login}</p>
                <p className="text-gray-600">{u.login}</p>
              </div>
            </div>
            <p>Followers: {u.followers}</p>
            <p>Posts: {u.public_repos}</p>
            <p>Following: {u.following}</p>
            <p>Public Repos: {u.public_repos}</p>
            {u.location && <p>Location: {u.location}</p>}
            {u.bio && <p>Bio: {u.bio}</p>}
            <p>Public Gists: {u.public_gists}</p>
            <a
              href={u.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        ))}
    </div>
  );
}
