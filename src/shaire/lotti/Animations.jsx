import { BiAlarm } from "react-icons/bi";
import { GrWorkshop } from "react-icons/gr";
import { GrBarChart } from "react-icons/gr"
import { GrAchievement } from "react-icons/gr";
const Animations = () => {
 
  return (
    <div className=" flex flex-col lg:flex-row justify-center gap-10 mx-auto lg:gap-28 items-center ">
      {/* 1st */}
      <div className="w-[190px] h-[190px]  bg-slate-100 mx-auto rounded-2xl">
     
  
     <div className="pt-8 text-center">
     <BiAlarm className="w-20 h-20 text-blue-600 mx-auto"></BiAlarm>  
     <p className="text-base font-medium my-5">Time Management</p>
     </div>
       
  </div>
  {/* end 1st  */}
      {/* 1st */}
      <div className="w-[190px] h-[190px]  bg-slate-100 mx-auto rounded-2xl">
     
  
     <div className="pt-8 text-center">
     <GrWorkshop className="w-20 h-20 text-blue-600 mx-auto"></GrWorkshop>  
     <p className="text-base font-medium my-5">Work Management</p>
     </div>
       
  </div>
  {/* end 1st  */}
      {/* 1st */}
      <div className="w-[190px] h-[190px]  bg-slate-100 mx-auto rounded-2xl">
     
  
     <div className="pt-8 text-center">
     <GrBarChart className="w-20 h-20 text-blue-600 mx-auto"></GrBarChart>  
     <p className="text-base font-medium my-5">Discipline</p>
     </div>
       
  </div>
  {/* end 1st  */}
      {/* 1st */}
      <div className="w-[190px] h-[190px]  bg-slate-100 mx-auto rounded-2xl">
     
  
     <div className="pt-8 text-center">
     <GrAchievement className="w-20 h-20 text-blue-600 mx-auto"></GrAchievement>  
     <p className="text-base font-medium my-5">Features</p>
     </div>
       
  </div>
  {/* end 1st  */}
    </div>
  )
}

export default Animations
