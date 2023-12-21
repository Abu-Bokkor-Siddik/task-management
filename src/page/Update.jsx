import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const datas = useLoaderData();
  console.log(datas?._id, "loader");
  const updateinfo = (e) => {
    e.preventDefault();
    const title = e.target.cars.value;
    const Description = e.target.Description.value;
    const Deadline = e.target.Deadline.value;
    const title2 = title.toLowerCase();
    const updateinfos = {
      title2,
      Description,
      Deadline,
      Hight: 1,
    };
    axios
      .put(`http://localhost:3006/tasks/${datas?._id}`, updateinfos)
      // console.log(updateinfos)
      .then((res) => {
        console.log(res);
        alert("update");
      });
  };
  return (
    <div className="max-w-[1200px] mx-auto  min-h-[800px]">
      <div className="lg:w-[600px] mx-auto lg:h-[500px] shadow-2xl">
        <form onSubmit={updateinfo} className="card-body">
          <p className="text-center text-3xl font-semibold">Update Task</p>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>

            <select defaultValue={datas?.cars} className=" input input-bordered" name="cars" id="cars">
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
              defaultValue={datas?.Description}
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
              defaultValue={datas?.Deadline}
              type="number"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-green-300">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
