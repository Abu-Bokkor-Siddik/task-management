import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero h-[900px]" style={{backgroundImage: 'url(https://i.ibb.co/7vSqd6m/sticky-todo-11106198.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Hello Friends</h1>
      <p className="mb-5">Spice up your daily productivity with this fantastic new todo web application! With its sleek design and user-friendly interface, tackling your tasks has never been more enjoyable. Stay organized, stay on top of your game, and let the spicy features of this app elevate your daily task management to a whole new level!</p>
      <NavLink to="/login"><button className="btn bg-blue-400">Let's Explore</button></NavLink>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
