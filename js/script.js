const getTimeDate = () => {
  const months = [
    "Jan",
    "feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const newDate = new Date();

  const date = String(newDate.getDate()).padStart(2, "0");
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  const hour = String(newDate.getHours()).padStart(2, "0");
  const minute = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");
  const milliSeconds = String(newDate.getMilliseconds()).padStart(2, "0");

  document.querySelector(".hour").innerHTML = hour;
  document.querySelector(".minute").innerHTML = minute;
  document.querySelector(".second").innerHTML = seconds;

  document.querySelector(".day").innerHTML = days[day];
  document.querySelector(".month").innerHTML = months[month];
  document.querySelector(".date").innerHTML = date;
  document.querySelector(".year").innerHTML = year;
};

setInterval(() => {
  getTimeDate();
}, 1);
