import { useEffect, useRef } from "react";
import gsap from "gsap";

function Loader() {
  const loaderRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    gsap.to(".loader-text", {
      opacity: 1,
      y: -10,
      stagger: 0.2,
      duration: 0.5,
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
    >
      {/* Animated Text */}
      <div className="flex space-x-2 text-2xl font-bold">
        <span className="loader-text opacity-0">L</span>
        <span className="loader-text opacity-0">O</span>
        <span className="loader-text opacity-0">A</span>
        <span className="loader-text opacity-0">D</span>
        <span className="loader-text opacity-0">I</span>
        <span className="loader-text opacity-0">N</span>
        <span className="loader-text opacity-0">G</span>
      </div>

      {/* Spinner */}
      <div className="mt-6 w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;