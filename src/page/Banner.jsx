import { NavLink } from "react-router-dom";
import Swipers from "../shaire/swipet/Swiper";


const Banner = () => {
  return (
    <div>
{/* hero */}
<div className="hero h-auto w-auto lg:min-h-[800px] bg-base-200">
  <div className="hero-content   flex-col-reverse justify-between lg:flex-row-reverse gap-16  lg:gap-80">
    <Swipers></Swipers>
    <div className="">
      <h1 className=" text-2xl mt-12 lg:text-5xl font-bold ">Tasks Management</h1>
      <p className="  lg:my-8 mb-5 mt-2 text-sm lg:text-xl">Streamline your tasks effortlessly with our intuitive platform. Stay organized, prioritize, and collaborate seamlessly for enhanced productivity. Experience the ease of managing your workload anytime, anywhere.</p>
      <NavLink to="/login"><button className="btn btn-sm lg:btn-md  btn-outline btn-info ">Let's Explore</button></NavLink>
    </div>
  </div>
</div>
{/* end */}

    </div>
  )
}

export default Banner
