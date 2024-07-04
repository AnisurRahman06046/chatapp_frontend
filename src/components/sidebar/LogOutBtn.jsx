import { BiLogOut } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthContext";

function LogOutBtn() {
  const { logout } = useAuthContext();
  const handleLogout = () => {
    // console.log("logout");
    logout();
  };
  return (
    <div className="mt-auto">
      <BiLogOut
        onClick={handleLogout}
        className="w-6 h-6 text-white cursor-pointer"
      />
    </div>
  );
}

export default LogOutBtn;
