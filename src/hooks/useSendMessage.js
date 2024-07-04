import { useState } from "react";
import useConversation from "../store/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = localStorage.getItem("access_token");
  const sendMessage = async (message) => {
    setLoading(true);
    const payload = {
      message: message,
    };
    try {
      const res = await fetch(
        `http://localhost:3000/messages/sendMessage/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
    //   console.log(data);

      setMessages([...messages, data.data]);
     
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
