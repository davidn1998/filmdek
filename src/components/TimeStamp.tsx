import { months } from "@/utility/months";
import { useEffect, useState } from "react";

type Props = {};

const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let seconds: string | number = date.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const strTime = ampm + " " + hours + ":" + minutes + ":" + seconds;
  return strTime;
};

const TimeStamp = (props: Props) => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="m-8 flex flex-col items-end">
      <h1>
        {date
          ? months[date.getMonth()] +
            " " +
            date.getDate() +
            " " +
            date.getFullYear()
          : ""}
      </h1>
      <h1>{date ? formatAMPM(date) : ""}</h1>
    </div>
  );
};

export default TimeStamp;
