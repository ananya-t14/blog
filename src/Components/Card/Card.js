export default function Card({ data }) {
  return (
    <div className="w-[50vw] bg-[#ffffff50] backdrop-blur-lg p-5 rounded-lg">
      <div>{data?.id}</div>
      <div>{data?.name}</div>

      <div>{data?.message}</div>
      <div>{data?.datetime}</div>
    </div>
  );
}
