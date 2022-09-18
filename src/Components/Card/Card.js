export default function Card({ data }) {
  const date = new Date(data?.datetime);
  return (
    <div className="w-[50vw] bg-[#ffffff70] backdrop-blur-sm p-5 rounded-lg">
      <div className="font-bold text-center text-xl">{data?.title}</div>
      <div className="font-sm text-right font-italics">By ~ {data?.name}</div>

      <div className="m-4 text-md">{data?.message}</div>
      <div className="font-sm">{date.toLocaleString()}</div>
    </div>
  );
}
