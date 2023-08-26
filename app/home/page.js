import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container mx-auto'>
      
      <Image
        src="/images/cover.gif"
        height={800}
        width={600}
        alt="not found"
        className='rounded shadow-lg inline-flex'
      />
      <div className='m-3 inline ;'>
        <Link href={'/blogs'} legacyBehavior>
          <a className='text-white bg-yellow-500 hover:bg-green-800 text-3xl rounded content-between'>
            Go to Blog page
          </a>
        </Link>
      </div>
    </div>
  );
}
