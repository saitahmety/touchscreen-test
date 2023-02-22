import React, { useEffect, useState } from "react";
// Third Party Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <FontAwesomeIcon icon={faClock} />
      &nbsp;
      {time.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}
    </div>

    //
  );
};

export default Clock;
