import Link from "next/link";
import Image from "next/image";

const PostCard = ({ item }) => {
  const { id, title, content, image } = item;

  return (
    <div className="p-5 m-5 shadow-xl bg-white rounded-lg flex flex-col md:flex-row">
      <div className="md:w-2/5 mb-4 md:mb-0 md:mr-4">
        <Link href={`/blogs/${id}`} >
          <div>
            <Image src={image} height={500} width={800} alt={title} className="rounded-lg" />
          </div>
        </Link>
      </div>
      <div className="md:w-3/5">
        <Link href={`/blogs/${id}`} >
          <div className="cursor-pointer">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h1>
          </div>
        </Link>
      
      </div>
    </div>
  );
};

export default PostCard;
