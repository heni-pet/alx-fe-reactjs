import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);
    try {
      const data = await fetchUserData(username.trim());
      console.log("Fetched data:", data);//log it
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt="avatar" width="80" />
          <p>{user.name || user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
          <p>Location: {user.location}</p>
          <p>Bio: {user.bio}</p>
          <p>Public Gists: {user.public_gists}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}