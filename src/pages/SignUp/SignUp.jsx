function SignUp() {
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-400">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        {/* form section */}
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Gender</span>
            </label>
            <select className="w-full input input-bordered h-10">
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
            />
          </div>
          <a
            href="#"
            className="text-sm text-gray-50 hover:underline hover:text-blue-600 mt-4 inline-block "
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-blue-800">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
