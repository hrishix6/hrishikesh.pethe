export default function Summary() {
  return (
    <div className="mt-6">
      <p className="text-3xl md:text-5xl text-center dark:text-white">Full Stack Developer</p>
      <p className="mt-4 text-xl text-center text-opacity-30">
        I have 4 years of experience building cutomer facing, high performance, scalable and secure
        web applications on JavaScript stack.
      </p>
      <div className="flex align-center justify-center mt-6">
        <a
          download
          href="/hrishikesh_pethe_cv.pdf"
          className="p-2.5 border border-gray-900 dark:border-gray-300"
        >
          Get my CV
        </a>
      </div>
    </div>
  );
}
