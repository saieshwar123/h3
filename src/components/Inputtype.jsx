export default function Inputtype({type,placeholder,onchange,label})
{
    return (<div>
        <div className=" m-2 font-bold">{label}</div>
        <input type={type} class="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{onchange(e.target.value)}} placeholder={placeholder} required />
        </div>)
}