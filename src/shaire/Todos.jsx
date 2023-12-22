import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import toast, { Toaster } from "react-hot-toast";

const Todos = ({ data, refetch }) => {
  // console.log(data)
  const [todo, settodo] = useState([]);
  const [ongoing, setongoing] = useState([]);
  const [complete, setcomplete] = useState([]);
  useEffect(() => {
    const ftodo = data?.filter((todof) => todof?.title2 === "todo");
    const fongoing = data?.filter((ongoings) => ongoings?.title2 === "ongoing");
    const fcomplete = data?.filter(
      (completes) => completes?.title2 === "complete"
    );
    settodo(ftodo);
    setongoing(fongoing);
    setcomplete(fcomplete);
  }, [data]);
  // console.log(todo,ongoing,complete)
  const status = ["todo", "ongoing", "complete"];
 
  // console.log(today)
  return (
    <div className=" max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row">
        {status.map((statues, index) => (
          <Section
            key={index}
            status={statues}
            todo={todo}
            ongoing={ongoing}
            complete={complete}
            refetch={refetch}
          >
            
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Todos;
const Section = ({ status, todo, ongoing, complete, refetch }) => {
  
  let todosmap = todo;
  if (status === "ongoing") {
    todosmap = ongoing;
  }
  if (status === "complete") {
    todosmap = complete;
  }

 
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = (id) => {
    
    const draginfo = {
      status,
    };
    axios
      .put(`https://dashboards-server.vercel.app/drag/${id}`, draginfo)
      // console.log(updateinfos)
      .then((res) => {
        console.log(res);
        toast.success("Task title change");
       
        refetch();
      });
  };
  // console.log(isDragging)
  return (
    <div ref={drop} className="max-w-[1200px] mx-20 my-8">
      <div className="  ">
        <h1 className="bg-green-300 rounded-lg p-3 text-xl text-black w-72 ">
          {status} {todosmap?.length}
        </h1>
        <div>
          {
            todosmap?.length > 0 &&
              todosmap?.map((item) => (
                <Tasks key={item._id} item={item} refetch={refetch}></Tasks>
              ))

            
          }
        </div>
        {/* toast */}
        <Toaster />
      </div>
    </div>
  );
};
const Tasks = ({ item, refetch }) => {

  const deleteitem = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = axios
          .delete(`https://dashboards-server.vercel.app/tasks/${id}`)
          .then((result) => {
            console.log(result.data);
            if (result.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your  card has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  // test
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id: item._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  //   console.log(isDragging)
  // console.log(item);

   // test 
 const todoss =(Deadline)=>{
  
    const today = new Date()
    const date2 = new Date(Deadline);
    if (today.toDateString() === date2.toDateString()) {
      toast.error("Deadline will be finish Today");
    }else if(today > date2){
      toast.error("Deadline finish");
    }
     else{
      toast.success('Have deadline')
    }
    console.log(today.toDateString() < date2.toDateString())
 
 }
  //  console.log(today)
  return (
    <div ref={drag}  className=" bg-green-300 rounded-lg w-72 h-auto my-3 "><div onClick={()=>todoss(item?.Deadline)}><div  className="flex gap-3 items-center justify-between">{
     
    }
      <p className="text-start pl-3">{item?.priority}</p>
      <p className="text-end pr-3"> {item?.Deadline} </p>
    </div>
   
      
        <p className="rounded-lg p-3 text-xl text-black h-auto w-48  bg-blue-400  ">
          {item?.Description}
        </p></div>
        <div className="flex justify-end gap-5 items-center">
        <button onClick={() => deleteitem(item?._id)}>
          <MdDeleteOutline className="w-8 h-8 "></MdDeleteOutline>
        </button>{" "}
        <Link to={`/update/${item._id}`}>
          <button className="text-center">
            <FaRegEdit className="w-7 h-7 mr-2"></FaRegEdit>
          </button>
        </Link>
      </div>
    </div>
  );
};
