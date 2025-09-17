import axios from "axios";
export async function fetchUserData(username, searchLocation, minRepos) {
  if (!username) throw new Error("No username provided");
  const url = `https://api.github.com/users/${username}`;
  
  const response = await axios.get(url);

  return response.data;
}

export async function searchUsers({ username, location, minRepos }) {
  try {
    let query = `https://api.github.com/search/users?q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await fetch(query);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.items; // array of users
  } catch (error) {
    console.error(error);
    return [];
  }
}