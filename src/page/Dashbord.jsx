import { useContext } from "react";
import useAxios from "../Hooks/useAxios";
import Navbar from "../navbar/Navbar";
import NavbarTwo from "../navbar/NavbarTwo";
import { AuthContext } from "../auth/AuthProvider";
import useTanstacks from "../Hooks/useTanstacks";
import Todos from "../shaire/Todos";

const Dashbord = () => {
  const axiosP=useAxios()
  const {user}=useContext(AuthContext)
  const taskinfo = (e)=>{
    e.preventDefault()
    const title = e.target.cars.value 
    const Description = e.target.Description.value 
    const Deadline = e.target.Deadline.value 
    const title2 = title.toLowerCase()
    const forminfo={
      title2,
      Description,
      Deadline,
      Hight:1,
      email:user?.email
    }
    // console.log(forminfo)
    axiosP.post('/tasks',forminfo)
    .then(res=>{
      console.log(res,'res info ')
      refetch()
    })
  }
  // get all data 
  const {data,refetch}=useTanstacks()
  // console.log(data,'user data')
  return (
    <div>
      <NavbarTwo></NavbarTwo>
      {/* <h1>Dashboard</h1> */}
      <div className="max-w-[1200px] mx-auto ">
        <div className="lg:w-[600px] mx-auto lg:h-[500px] shadow-2xl">
          <form onSubmit={taskinfo} className="card-body">
            <p className="text-center text-3xl font-semibold">Create Task</p>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Title</span>
              </label>

              <select className=" input input-bordered" name="cars" id="cars">
                <option value="todo">Todo</option>
                <option value="ongoing">Ongoing</option>
                <option value="complete">Complete</option>
               
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                name="Description"
                type="text"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                name="Deadline"
                type="number"
                placeholder="Deadline"
                className="input input-bordered"
                required
              />
            </div>
            

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
        {/* task todo */}
       <Todos data={data} refetch={refetch}></Todos>
      </div>
    </div>
  );
};

export default Dashbord;
