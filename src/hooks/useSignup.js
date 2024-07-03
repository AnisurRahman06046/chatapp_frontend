import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (payload) => {
    const success = handleInputErrors(payload);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  firstName,
  lastName,
  userName,
  email,
  hashedPassword,
  gender,
}) {
  if (
    !firstName ||
    !lastName ||
    !userName ||
    !email ||
    !hashedPassword ||
    !gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
