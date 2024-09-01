import { useCallback, useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const handleIncreaseClick = () => {
    setCounter((counter) => counter + 1);
  };

  const handleSecondIncreaseClick = useCallback(() => {
    setSecondCounter((secondCounter) => secondCounter + 1);
  }, []);

  useEffect(() => {
    alert("I run only on initial component rendering");
  }, []);

  useEffect(() => {
    alert("I run on each component re-render");
  });

  useEffect(() => {
    counter && alert("I run when counter value changes and is above 0");
  }, [counter]);

  return (
    <div>
      <p>First counter: {counter}</p>

      <button onClick={handleIncreaseClick}>Increase</button>

      <p>Second counter: {secondCounter}</p>

      <button onClick={handleSecondIncreaseClick}>Increase second</button>
    </div>
  );
}

export default App;
