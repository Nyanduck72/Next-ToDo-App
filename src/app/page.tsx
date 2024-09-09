export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="container mx-auto border-b-2 border-emerald-300/50 pt-4 pb-2">
          <h1 className="text-emerald-400 text-center font-bold text-5xl lg:text-7xl md:text-6xl sm:text-5xl">
            TO-DO APP
          </h1>
          <h5 className="my-4 text-emerald-900 text-center font-bold text-3xl lg:text-4xl">
            but on Next.js
          </h5>
        </div>
        <div className="container grid grid-cols-12 gap-4 mx-auto my-12">
          <div className="col-span-12 h-32 p-4 lg:col-span-4">
            <h2 className="text-emerald-400 text-2xl text-center">ADD TASKS</h2>
            <div className="grid grid-cols-12 gap-2 align-middle">
              <div className="col-span-9 mt-4 flex justify-center">
                <input
                  type="text"
                  name="task"
                  id="task"
                  className="text-slate-50 border-b-slate-400 border-b-2 bg-transparent h-full w-full p-2 focus:outline-0 focus:border-b-emerald-400"
                />
              </div>
              <div className="col-span-3 mt-4 flex justify-center">
                <div>
                  <button className="bg-emerald-400 text-center text-xl text-slate-50 px-3 rounded-full h-full w-full hover:bg-emerald-500 active:bg-emerald-200 active:text-slate-800">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 bg-slate-900 h-96 p-4 rounded-3xl shadow-lg lg:col-span-4">
            <h2 className="text-emerald-400 text-2xl text-center">
              CURRENT TASKS
            </h2>
            <div className=""></div>
          </div>
          <div className="col-span-12 bg-slate-900 h-96 p-4 rounded-3xl shadow-lg lg:col-span-4">
            <h2 className="text-emerald-400 text-2xl text-center">
              DONE TASKS
            </h2>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}
