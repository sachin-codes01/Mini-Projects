import ProgressBar from "./ProgressBar/ProgressBar";

function App() {
  return (
    <div>
      <h1>React Progress Bar</h1>
      <ProgressBar steps={5} initialStep={1} barColor="#2196f3" height={25} />
    </div>
  );
}

export default App;