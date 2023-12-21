import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero h-[900px]" style={{backgroundImage: 'url(https://i.ibb.co/7vSqd6m/sticky-todo-11106198.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <NavLink to="/login"><button className="btn bg-blue-400">Get Started</button></NavLink>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
