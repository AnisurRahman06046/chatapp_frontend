import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  const login = async (payload) => {
    // console.log(payload, "login payload");
    const success = handleInputErrors(payload);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      // console.log(data, " from login");
      if (data.statusCode===201) {
        toast.success("Login successful");
        // console.log(data.access_token)
        setAuthUser(data.data.user);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem("access_token", data.data.access_token);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({ email, hashedPassword }) {
  if (!email || !hashedPassword) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
