import Converations from "./Converations"
import LogOutBtn from "./LogOutBtn"
import SearchInput from "./SearchInput"


function SideBar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        {/* search bar  component*/}
        <SearchInput/>
        <div className="divider px-3"></div>
        {/* Conversations component */}
        <Converations/>
        {/* logout component */}
        <LogOutBtn/>

    </div>
  )
}

export default SideBar