import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    gender: "",
    hashedPassword: "",
  });
  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs, "form data");
    await signup(inputs);
  };
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-400">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        {/* form section */}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full input input-bordered h-10"
              value={inputs.firstName}
              onChange={(e) =>
                setInputs({ ...inputs, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full input input-bordered h-10"
              value={inputs.lastName}
              onChange={(e) =>
                setInputs({ ...inputs, lastName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="John123"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full input input-bordered h-10"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Gender</span>
            </label>
            <select
              className="w-full input input-bordered h-10"
              value={inputs.gender}
              onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter you password"
              className="w-full input input-bordered h-10"
              value={inputs.hashedPassword}
              onChange={(e) =>
                setInputs({ ...inputs, hashedPassword: e.target.value })
              }
            />
          </div>
          <Link
            to="/login"
            className="text-sm text-gray-50 hover:underline hover:text-blue-600 mt-4 inline-block "
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-blue-800">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
