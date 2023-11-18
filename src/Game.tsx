import { useState, useEffect } from "react";
import "./App.css";
import { useQuery } from "react-query";
import { fetchQuestions } from "./apis";

export default function Game() {
  const [color, setColor] = useState<string>("");
  const [options, setOptions] = useState<any>([]);
  const [message, setMessage] = useState<string>("");
  const { isLoading, error, data } = useQuery("questions", fetchQuestions);
  console.log(data, "datttttttttttt");

  const generateColor = () => {
    // logic to generate random color
    const letters = "0123456789ABCDEF";
    let col = "#";
    for (let i = 0; i < 6; i++) {
      col += letters[Math.floor(Math.random() * 16)];
    }
    setColor(col);
  };

  const generateOptions = () => {
    //generated 3 colors
    const arr = [];
    for (let j = 0; j < 3; j++) {
      const letters = "0123456789ABCDEF";
      let col = "#";
      for (let i = 0; i < 6; i++) {
        col += letters[Math.floor(Math.random() * 16)];
      }
      arr.push(col);
    }
    // ensure that one value in options is same as the color state
    const randomIndex = Math.floor(Math.random() * 3);
    arr[randomIndex] = color;
    setOptions(arr);
  };

  const handleClick = (option: string) => {
    console.log(option, "@@@@@@@@@@@@@@@");
    //check if the clicked answer is correct
    if (option === color) {
      setMessage("Answer is correct");
    } else {
      setMessage("Answer is wrong");
    }
  };

  const handleNext = () => {
    setMessage("");
    generateColor();
  };

  useEffect(() => {
    generateColor();
  }, []);

  useEffect(() => {
    generateOptions();
  }, [color]);


  if (error) {
    return <div>Error:{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="colorBox" style={{ backgroundColor: color }}></div>
      {options.map((option: string) => (
        <OptionComponent option={option} onclick={() => handleClick(option)} />
      ))}
      {message && (
        <p style={{ color: message === "Answer is correct" ? "green" : "red" }}>
          {" "}
          {message}{" "}
        </p>
      )}
      <div>
        <button onClick={handleNext} style={{ backgroundColor: "blue" }}>
          Next
        </button>
      </div>
    </>
  );
}

type OptionComponentStructure = {
  // onclick: (option: string) => void;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  option: string;
};

export const OptionComponent = ({
  onclick,
  option,
}: OptionComponentStructure) => {
  return (
    <button
      // onClick={()=>handleClick(option)}
      onClick={(event) => onclick(event)}
    >
      {option}
    </button>
  );
};
