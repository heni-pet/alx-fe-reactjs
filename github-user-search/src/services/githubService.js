import axios from "axios";
export async function fetchUserData(username, searchLocation, minRepos) {
  if (!username) throw new Error("No username provided");
  const url = `https://api.github.com/users/${username}`;
  
  const response = await axios.get(url);

  return response.data;
}
