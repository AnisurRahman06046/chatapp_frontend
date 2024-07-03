import SideBar from "../../components/sidebar/SideBar";

function Home() {
  return <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    {/* sidebar component */}
    <SideBar/>
    {/* message container  */}
  </div>;
}

export default Home;
