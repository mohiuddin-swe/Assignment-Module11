import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-3xl p-10 m-5 bg-yellow-500 animate-pulse'>Module11 Assignment: A Blog Project</h1>
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
