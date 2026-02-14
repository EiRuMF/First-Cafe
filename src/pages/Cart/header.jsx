import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HCart() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="justify-center items-center relative flex flex-row ">
        <button
          onClick={() => navigate(-1)}
          className="absolute bg-transparent left-0 md:left-2 p-2 rounded-full border border-gray-400"
        >
          <ArrowLeft />
        </button>

        <h1 className="text-4xl md:text-4xl">Your Cart</h1>
      </div>
    </div>
  );
}

export default HCart;
