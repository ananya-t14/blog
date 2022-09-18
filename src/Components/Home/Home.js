import Navbar from "../Navbar/Navbar";
import pattern from "../../Assets/Images/pat.png";
import Card from "../Card/Card";
export default function Home() {
  const data = [
    {
      id: "1",
      name: "Sachin",
      datetime: "2021-10-10 10:10:10",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "2",
      name: "Sachin",
      datetime: "2021-10-10 10:10:10",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  console.log(data);
  return (
    <div
      className="min-h-[100vh] bg-[#3e3c4e] "
      style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover" }}
    >
      <Navbar />
      <div className="flex flex-wrap justify-center place-items-center gap-y-4 flex-col align-middle mt-5 ">
        {data.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
}
