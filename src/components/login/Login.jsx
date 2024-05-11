import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated login process
    console.log("Simulated login process");

    setLoading(false);
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Sign in</h2> {/* Changed from "Welcome back," to "Sign in" */}
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
