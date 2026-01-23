import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatted = now.toLocaleString("en-US", options).replace(/,/g, "");
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTime;
