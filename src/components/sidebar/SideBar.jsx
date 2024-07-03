import Converations from "./Converations"
import SearchInput from "./SearchInput"


function SideBar() {
  return (
    <div>
        {/* search bar  component*/}
        <SearchInput/>
        <div className="divider px-3"></div>
        {/* Conversations component */}
        <Converations/>
        {/* logout component */}
    </div>
  )
}

export default SideBar