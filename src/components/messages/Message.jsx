import { useAuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

function Message({ message }) {
  const { authUser } = useAuthContext();

  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bgColor = fromMe ? "bg-blue-500" : "";
  const formatedTime = extractTime(message.createdAt);
  const shouldShake = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="chat buble" />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bgColor} ${shouldShake}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    senderId: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    shouldShake: PropTypes.bool,
  }).isRequired,
};
export default Message;
