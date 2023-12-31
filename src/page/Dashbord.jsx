import { useContext } from "react";
import useAxios from "../Hooks/useAxios";
import Navbar from "../navbar/Navbar";
import NavbarTwo from "../navbar/NavbarTwo";
import { AuthContext } from "../auth/AuthProvider";
import useTanstacks from "../Hooks/useTanstacks";
import Todos from "../shaire/Todos";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import toast, { Toaster } from "react-hot-toast";
const Dashbord = () => {
  const axiosP=useAxios()
  const {user}=useContext(AuthContext)
  const taskinfo = (e)=>{
    e.preventDefault()
    const title = e.target.cars.value 
    const priority = e.target.priority.value 
    const Description = e.target.Description.value 
    const Deadline = e.target.Deadline.value 
    const title2 = title.toLowerCase()
    e.target.reset()
    const forminfo={
      
      title2,
      Description,
      priority,
      Deadline,
      Hight:1,
      email:user?.email
    }
    console.log(forminfo) 
    axiosP.post('/tasks',forminfo)
    .then(res=>{
      console.log(res,'res info ')
      refetch()
      toast.success("Added successfully Task");
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
        <div className="lg:w-[600px] mx-auto lg:h-[550px] shadow-2xl">
          <form onSubmit={taskinfo} className="card-body">
            <p className="text-center text-3xl font-semibold">Create Task</p>
            <Toaster />
            <div className="form-control">
            <label className="label">
                <span className="label-text">Select Title</span>
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
                type="date"
                placeholder="Deadline"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text"> Select Priority</span>
              </label>

              <select className=" input input-bordered" name="priority" id="priority">
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
               
              </select>
            </div>
            

            <div className="form-control mt-6">
              <button className="btn bg-green-300">Add</button>
            </div>
          </form>
        </div>
        {/* task todo */}
       <div>
       <DndProvider backend={HTML5Backend}>
       <Todos data={data} refetch={refetch}></Todos>
       </DndProvider>
       </div>
      </div>
    </div>
  );
};

export default Dashbord;
