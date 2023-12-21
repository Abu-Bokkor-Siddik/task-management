import axios from "axios"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import { MdDeleteOutline } from "react-icons/md";

const Todos = ({data,refetch}) => {
    // console.log(data)
    const [todo,settodo]=useState([])
    const [ongoing,setongoing]=useState([])
    const [complete,setcomplete]=useState([])
    useEffect(()=>{
        const ftodo = data?.filter((todof=>todof?.title2==="todo"))
        const fongoing = data?.filter((ongoings=>ongoings?.title2==="ongoing"))
        const fcomplete = data?.filter((completes=>completes?.title2==="complete"))
        settodo(ftodo)
        setongoing(fongoing)
        setcomplete(fcomplete)
    },[data])
    // console.log(todo,ongoing,complete)
    const status = ["todo","ongoing","complete"]
   
  return (
   <div className=" max-w-[1200px] mx-auto">
     <div className="flex gap-20">
       {
        status.map((statues,index)=> <Section key={index} status={statues} todo={todo} ongoing={ongoing} complete={complete} refetch={refetch} > </Section>)
       }
    </div>
    
   </div>
  )
}

export default Todos
const Section =({status,todo,ongoing,complete,refetch})=>{
  
    // console.log(todo,"todo",ongoing,'ongoing',complete,'compelte')
    // delete alarts
const deleteitem=(id)=>{
// console.log(id)
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
     
      const res = axios.delete(`http://localhost:3006/tasks/${id}`)
      .then(result =>{
        console.log(result.data)
        if(result.data.deletedCount>0){
          
          Swal.fire({
            title: "Deleted!",
            text: "Your  card has been deleted.",
            icon: "success"
          });
          refetch()
        }
      })
    }
  });

}
let todosmap = todo;
if(status==="ongoing"){
    todosmap=ongoing
}
if(status==="complete"){
    todosmap=complete
}

// console.log(todosmap)
    return(
        <div className="max-w-[1200px] mx-auto my-8">
            <h1 className="bg-green-300 rounded-lg p-3 text-xl text-black w-56">{status}  {todosmap?.length}</h1>
        <div >
        {
            todosmap?.length>0 && todosmap?.map(item =><div key={item._id} className="flex "><p className="rounded-lg p-3 text-xl text-black w-44 bg-blue-400 my-3 ">{item?.Description}</p><button onClick={()=>deleteitem(item?._id)} className="  "><MdDeleteOutline className="w-7 h-7"></MdDeleteOutline></button></div>)
        }
        </div>
        </div>
    )
}