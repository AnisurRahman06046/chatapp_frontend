import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/messages/messages/${selectedConversation._id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        // console.log(data);
        // console.log(data.data.messages);
        if (data.statusCode === 200) {
          setMessages(data.data.messages);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessages;
