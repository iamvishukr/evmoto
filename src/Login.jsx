// Login.jsx
import { useState } from "react";
import { auth } from "./lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("clicked")
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Please verify your email before logging in.");
        // Optionally send a verification email
        // await sendEmailVerification(user);
        return;
      }

      // Redirect to dashboard or authenticated area
      console.log("Login successful");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
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
        <button type="submit" onClick={(()=>console.log("Logged in"))} className="w-full bg-teal-500 text-white py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
