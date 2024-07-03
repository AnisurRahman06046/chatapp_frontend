import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessageContainer() {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* header */}
        <div className="bg-slate-500 px-4 py-2 mb-2 text-left">
          <span className="label-text">To:</span>{" "}
          <span className="text-gray-900 font-bold">John Doe</span>
        </div>
        {/* messages component */}
        <Messages/>
        {/* message input */}
        <MessageInput/>
      </>
    </div>
  );
}

export default MessageContainer;
