import { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";

function App() {
  const now = new Date();
  const [birthDay, setBirthDay] = useState(now);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  const onChange = (birthDay) => {
    setBirthDay(birthDay);
    calculateDifference(birthDay);
  };

  const calculateDifference = (birthDay) => {
    const diffTime = now - birthDay;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30.44);
    const diffYears = Math.floor(diffDays / 365.25);
    setYear(diffYears);
    setMonth(diffMonths);
    setDay(diffDays);
  };

  return (
    <>
      <h1>내가 태어난 날은</h1>
      <h2> {birthDay.toLocaleDateString()}</h2>
      <Calendar onChange={onChange} value={birthDay} />
      <div className="card">
        <h1>내가 태어난지</h1>
        <h1>{year}년</h1>
        <h1>{month}개월</h1>
        <h1>{day}일</h1>
      </div>
    </>
  );
}

export default App;
