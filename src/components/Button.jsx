export default function Button({title,color,hover,clickon})
{
    return (  
        <div>
            <button disabled={false} className={`bg-${color} text-white w-60 rounded-md flex justify-center py-1 hover:bg-${hover}`} onClick={clickon}>{title}</button>

        </div>
    )
}

