const date = new Date();


const renderCalendar = () => {
  date.setDate(1);


  const monthDays = document.querySelector(".days");


  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();




  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();




  const firstDayIndex = date.getDay(); // returns 0 - 6




  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();




  const nextDays = 7 - lastDayIndex - 1;


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".date h1").innerHTML = date.getFullYear();
  document.querySelector(".date h2").innerHTML = months[date.getMonth()];




  document.querySelector(".date p").innerHTML = new Date().toDateString();


  let days = "";


  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date day">${prevLastDay - x + 1}</div>`;
  }


  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today day">${i}</div>`;
    } else {
      days += `<div class="day">${i}</div>`;
    }
  }


  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date day">${j}</div>`;
   
  }
  monthDays.innerHTML = days;
};
renderCalendar();


function addListenerToDays(){
  document.querySelectorAll(".day").forEach
    (day => {


      day.addEventListener("click", event => {
        console.log(event.currentTarget);
        event.currentTarget.classList.toggle("highlight");


      });
    });
}
addListenerToDays();


document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  if (date.getFullYear() < date.getDate) {
    console.log("shouldnt work");
  }
  console.log(date.getFullYear());
  renderCalendar();
  addListenerToDays();


});


document.querySelector(".next").addEventListener("click", () => {
 
  date.setMonth(date.getMonth() + 1);
 
  renderCalendar();
  addListenerToDays();
});







