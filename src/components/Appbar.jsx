export default function Appbar({AppName,UserName,UserSymbol}) {
  return (
    <div className="border-red-500 flex flex-row justify-between m-5 ">
      <div className=" font-bold text-2xl">{AppName}</div>
      <div className=" text-2xl flex flex-row justify-between font-normal ">
        Hello, {UserName}
        <div class="rounded-full h-10 w-10 flex items-center justify-center bg-green-500 ml-2">
          {UserSymbol}
        </div>
      </div>
    </div>
  );
}
