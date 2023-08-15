import data from "@/app/data/data";
import Image from "next/image";

// export function getStaticPaths() {
//   const paths = data.map(item => ({
//     params: { id: item.id.toString() }
//   }));
//   return { paths, fallback: true };

// }


const page =  ({params}) => {
  const itemId = parseInt(params.id);
  const item = data.find(item => item.id === itemId);

  return (
    <div>
      <h1>{item.title}</h1>
      
      <p>{itemId.date}</p>
      <Image src={item.image} height={500} width={500} alt={item.title}/>
      <p>{item.content}</p>
      
    </div>
  )
}

export default page