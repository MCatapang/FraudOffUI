export default function MainBanner() {
  return (
    <div className="group select-none max-w-7xl relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-center">
        The world is full of &nbsp;
        <span className='text-transparent group-hover: bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 dark:invert group-hover:invert group-hover:dark:invert-0 transition duration-700'>
          malicious actors 
        </span>
        . Learn how you can tell them to&nbsp;
        <div className="font-extrabold">
          &quot;
          <a className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>F</a>
          <a className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 group-hover:invert transition duration-500'>raud</a>
          <a className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>Off</a>
          !&quot;
        </div>
      </h1>
    </div>
  )
}