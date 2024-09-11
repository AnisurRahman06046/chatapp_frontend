import MessageContainer from "../../components/messages/MessageContainer";
import SideBar from "../../components/sidebar/SideBar";

function Home() {
  return (
    // <div className="flex sm:h-[450px] md:h-[550px] shadow-2xl rounded-lg  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
    //   {/* sidebar component */}
    //   <SideBar />
    //   {/* message container  */}
    //   <MessageContainer />
    // </div>
//     <div className="flex flex-col sm:flex-row h-screen sm:h-[450px] md:h-[550px] shadow-2xl rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//   {/* sidebar component */}
//   <SideBar className="sm:w-1/4 w-full h-1/4 sm:h-full" />
//   {/* message container  */}
//   <MessageContainer className="sm:w-3/4 w-full h-3/4 sm:h-full" />
// </div>
<div className="flex flex-col sm:flex-row h-screen sm:h-[450px] md:h-[550px] shadow-2xl rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
  {/* Sidebar component */}
  <SideBar className="sm:w-1/4 w-full h-1/4 sm:h-full" />
  {/* Message container */}
  <MessageContainer className="sm:w-3/4 w-full h-3/4 sm:h-full" />
</div>
  );
}

export default Home;
