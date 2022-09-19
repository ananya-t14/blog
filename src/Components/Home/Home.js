import Navbar from "../Navbar/Navbar";
import pattern from "../../Assets/Images/pat.png";
import Card from "../Card/Card";
import data from "../../Assets/Data/Data.json";

export default function Home() {
  const local = localStorage.getItem("blogdata");
  const finaldata = local ? [...JSON.parse(local), ...data] : data;
  console.log(local);
  return (
    <div
      className="min-h-[100vh] bg-[#3e3c4e] "
      style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover" }}
    >
      <Navbar />
      <div className="flex flex-wrap justify-center place-items-center gap-y-4 flex-col align-middle mt-5 ">
        {finaldata.map((item, idx) => {
          return item.message ? <Card data={item} key={idx} /> : null;
        })}
      </div>
    </div>
  );
}
