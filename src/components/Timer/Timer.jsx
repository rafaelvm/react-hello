import { useState, useEffect } from "react";

export default function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span className="bg-purple-300 p-3 font-semibold rounded-md">{value}</span>;
}
