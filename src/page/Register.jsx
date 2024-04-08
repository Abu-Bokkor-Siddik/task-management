import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { imgUpload } from "../Hooks/imageup";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate()
  const {user,signs,profile,setLoading}=useContext(AuthContext)
  const formInfo = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.files[0];
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profession = e.target.profession.value;
     e.target.reset()
    console.log(name, image, email, password, profession);
    // signs()
   
    try {
      const data = await imgUpload(image)
    console.log(data,'data image')
       await signs(email,password)
      //  setLoading(false)
      await profile(name,data?.data?.display_url)
      // todo
      await navigate('/dashboard')
      await setLoading(false)
      
       await toast.success("Register Successfully");
      console.log(name,data?.data?.display_url,profession,email,"all form data")
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <Toaster />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={formInfo} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="image"
                  type="file"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profession</span>
                </label>
                <input
                  name="profession"
                  type="text"
                  placeholder="Profession"
                  className="input input-bordered"
                  required
                />
              </div>
              
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
              </div>
              <p>
                If you hava an account{" "}
                <Link className="text-blue-800" to="/login">
                  Go Login
                </Link>
              </p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
