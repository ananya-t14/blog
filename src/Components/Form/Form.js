import Navbar from "../Navbar/Navbar";
import pattern from "../../Assets/Images/pat.png";
import { useEffect, useState } from "react";
import data from "../../Assets/Data/Data.json";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [formdata, setFormData] = useState({
    datetime: new Date().toLocaleString(),
  });
  const [valid, setValid] = useState(false);
  //   console.log(formdata);
  const navigate = useNavigate();
  var prev = localStorage.getItem("blogdata");
  const [totaldata, setData] = useState([]);
  useEffect(() => {
    if (prev) {
      setData([...totaldata, ...JSON.parse(prev)]);
    }
  }, []);
  async function Submit() {
    if (Check()) {
      console.log(formdata);
      setData([formdata, ...totaldata]);
      console.log(totaldata);
      const now = await JSON.stringify(totaldata);
      await localStorage.setItem("blogdata", now);

      toast.success("Blog Posted Successfully");
    } else {
      toast.error("Please fill all the fields");
    }
  }
  function Check() {
    if (formdata.title && formdata.author && formdata.message) {
      return true;
    } else {
      return false;
    }
    // return false;
  }
  return (
    <div
      className="min-h-[100vh] bg-[#3e3c4e] "
      style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover" }}
    >
      <Navbar />
      <ToastContainer />
      <div className="flex flex-col gap-y-4 w-[55vw] mx-auto mt-5 p-20 pt-10 border-2 rounded-lg border-white">
        <span className="text-center text-white text-3xl mb-5">
          Add a new post
        </span>
        <div className="flex flex-row w-[40vw] justify-end">
          <span className="my-auto mr-4 text-white">Title</span>
          <input
            type="text"
            name="Title"
            className="p-3 bg-[#ffffff20] text-white w-[30vw]"
            onChange={(e) =>
              setFormData({ ...formdata, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row w-[40vw] justify-end">
          <span className="my-auto mr-4 text-white">Author</span>
          <input
            type="text"
            name="Author"
            className="p-3 bg-[#ffffff20] text-white w-[30vw]"
            onChange={(e) =>
              setFormData({ ...formdata, author: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row w-[40vw] justify-end">
          <span className="my-auto mr-4 text-white">Message</span>
          <textarea
            type="text"
            name="Message"
            className="p-3 bg-[#ffffff20] text-white w-[30vw]"
            onChange={(e) =>
              setFormData({ ...formdata, message: e.target.value })
            }
            rows="10"
          ></textarea>
        </div>
        <button
          className="border-2 p-2 rounded-lg bg-gradient-to-r from-[#dfbd69] to-[#926f34] w-[10vw] text-black hover:bg-transparent hover:text-transparent hover:bg-clip-text hover:border-yellow-500 transition mx-auto"
          id="btn"
          onClick={() => {
            Submit();
            // Submit();
          }}
          //   disabled={Check}
        >
          Post
        </button>
      </div>
    </div>
  );
}
