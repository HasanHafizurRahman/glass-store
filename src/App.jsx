import "./App.css";
import OrderView from "./components/OrderView/OrderView";

function App() {
  return (
    <>
      <div className="flex justify-center gap-4 mt-6 items-center">
        {" "}
        <h1 className="text-3xl text-blue-900 font-bold">
          Glass Store For Developers!
        </h1>
        <img
          className="w-10"
          src="https://th.bing.com/th/id/R.11686b23049c23c6f67c41727605c522?rik=h6XxlxHx8gNugw&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
      <div className="flex justify-center mb-4">
        <span>
          We provide anti blue ray glasses for the software developers .
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      </div>

      <OrderView />
    </>
  );
}

export default App;
