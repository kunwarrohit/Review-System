import MainScreen from "./screen/MainScreen";

export default function Home() {
  const safety = "Safety";
  const desc1 = "Rate the safety feature in this!";

  const communication = "Communication";
  const desc2 = "Rate your conversation result!";

  const recommended = "Would you recommend Trausti?";
  const desc3 = "I hope you like Trausti. If 'Yes' then Like";
  return (
    <div className="mt-[50px] ">
      <div className="mx-auto w-4/5 lg:w-3/5">
        <h1 className="text-4xl font-bold mb-5">Leave a Review</h1>
        <hr className="border-1 border-gray-900"></hr>
        <div className="mt-5">
          <MainScreen title={safety} desc={desc1} />
          <hr className="main border-1 border-gray-900"></hr>
          <MainScreen title={communication} desc={desc2} />
          <hr className="main border-1 border-gray-900"></hr>
          <MainScreen title={recommended} motive="recommended" desc={desc3} />
        </div>
      </div>
    </div>
  );
}
