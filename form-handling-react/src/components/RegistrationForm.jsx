import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required.");
      return;
    }

    if (!email) {
      setErrors("Email is required.");
      return;
    }

    if (!password) {
      setErrors("Password is required.");
      return;
    }

    setErrors("");
    console.log("Form submitted:", { username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">
        User Registration
      </h2>

      {errors && (
        <p className="text-red-500 text-sm mb-3 text-center">{errors}</p>
      )}

      <div className="mb-3">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter your username"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}
