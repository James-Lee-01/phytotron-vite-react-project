// 404 Not Found Page
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestion } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";

const NotFoundPage = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() =>{
    const timer = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1)
      } else {
        navigate("/");
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count, navigate]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-neutral-800">
      <h1 className="text-3xl xs:text-6xl">404 Not Found</h1>
      <FaQuestion className="text-4xl xs:text-7xl" />
      <p className="text-lg xs:text-2xl">
        redirect in
        <span className="font-semibold text-rose-400	">&nbsp;{count}&nbsp;</span>
        seconds...
        <ImSpinner2 className="ml-1 inline-block animate-spin align-text-bottom" />
      </p>
    </div>
  );
};

export default NotFoundPage;