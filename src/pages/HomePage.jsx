

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col bg-neutral-800 py-24 text-center">
      <h1 className="md:text-8xl mb-10 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-5xl text-transparent xs:text-6xl">
        EnviroGuard
      </h1>
      <div className="flex flex-col gap-4">
        <p className="md:text-3xl text-xl italic xs:text-2xl underline underline-offset-4 decoration-2 decoration-violet-400">
          &ldquo;Stay Safe, Stay Informed&rdquo;
        </p>
        <p className="md:text-xl italic xs:text-lg">
          - EnviroGuard Watches Over Your Environment.
        </p>
      </div>
    </div>
  );
}

export default HomePage