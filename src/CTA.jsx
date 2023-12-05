import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="px-12 py-0 md:py-8">
      <p className="text-lg text-gray-500 md:mb-0 mb-2">Revolutionize Your</p>
      <div className="relative">
        <h2 className="md:w-1/2 md:text-6xl text-3xl leading-tight">
          Creative Projects with the Ultimate Al-Powered Pattern
        </h2>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-10 md:absolute bottom-0.5 left-52 md:px-5 px-0 md:pt-0 pt-5">
          <Link to="start-generating">
            <button className="bg-black text-gray-50 rounded-full px-8 py-3 text-sm">
              START GENERATING
            </button>
          </Link>
          <h3 className="text-xl text-gray-500 w-64 md:ml-0 ml-16">
            The Next generation <span className="text-black">Production</span>{" "}
            for Designers
          </h3>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
