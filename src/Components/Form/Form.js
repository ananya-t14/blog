import Navbar from "../Navbar/Navbar";
import pattern from "../../Assets/Images/pat.png";
import { useState } from "react";
// import fs from "fs";
export default function Form() {
  const [formdata, setFormData] = useState({});
  const [valid, setValid] = useState(false);
  //   console.log(formdata);
  function Submit() {
    if (Check()) {
      setFormData({ ...formdata, datetime: new Date().toLocaleString() });
      console.log(formdata);
    } else {
      window.alert("Please fill all the fields");
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
          onClick={Submit}
          //   disabled={Check}
        >
          Post
        </button>
      </div>
    </div>
  );
}
