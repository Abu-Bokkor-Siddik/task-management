import { Link } from "react-router-dom"


const Error = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <div>
        <img className="w-auto lg:w-[600px] h-[600px]" src="https://i.ibb.co/RTpZbBn/404-animation.gif" alt="" />
        <Link to='/'><button className="btn bg-blue-400 flex justify-center mx-auto">Go Home</button></Link>
      </div>
    </div>
  )
}

export default Error
