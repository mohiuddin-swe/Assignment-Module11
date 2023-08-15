'use client'
import PostCart from "@/app/components/PostCart";
import data from "@/app/data/data.json";

console.log(data)
const page = () => {
  return (
    <div>
      
      <div>
        {data?.map((item)=>(
          <PostCart key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default page