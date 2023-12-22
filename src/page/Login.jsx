import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate()
  const {user,logins,google}=useContext(AuthContext)
  const login =(e)=>{
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
    e.target.reset()
    // console.log(email,password)
    logins(email,password)
    .then(res=>{
      console.log(res)
      toast.success("Login successfully");
      navigate('/dashboard')
      
    })

  }
  // google 
  const Google =()=>{
    google()
    .then(res =>{
      console.log(res.user)
      toast.success("Login successfully");
      navigate('/dashboard')
      
    })
  }

  return (
    <div>
      <Toaster />
      <div className="hero min-h-screen z-10 bg-base-200">
        <div className="hero-content flex-col z-10">
          <div className="card flex-shrink-0 z-10 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={login} className="card-body z-10 ">
              <p className="text-center text-3xl font-semibold">Login</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p>
                If you have no account{" "}
                <Link className="text-blue-800" to="/register">
                  Go Register
                </Link>
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={Google} className="btn btn-primary mx-8">google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
