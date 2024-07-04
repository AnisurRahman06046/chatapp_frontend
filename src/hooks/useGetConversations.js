import { useEffect, useState } from "react";
// import { useAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
  // Loading state
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/users/sidebar-users", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        // console.log(data);
        if (data.statusCode === 200) {
          setConversations(data.data);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, [token]);

  return { loading, conversations };
};

export default useGetConversations;
