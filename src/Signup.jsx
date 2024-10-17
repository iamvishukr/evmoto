// Signup.jsx
import { useState } from "react";
import { auth } from "./lib/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);
      setSuccess("Signup successful! Please verify your email before logging in.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-teal-500 text-white py-2">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
