  let currentDate = dayjs().format('dddd') + " " + dayjs().format("Do MMM YYYY");
  let currentTime = dayjs().format('h:mm:ss a');
  let hour = dayjs().hour();
  const nineAm = $("#9");
  const tenAm = $("#10");
  const elevenAm = $("#11");
  const twelvePm = $("#12");
  const onePm = $("#13");
  const twoPm = $("#14");
  const threePm = $("#15");
  const fourPm = $("#16");
  const fivePm = $("#17");

  
  $(document).ready(function(){
    start()
    timeTracker();

  // gets the user input that was saved in the local storage
  function start() {
    const start9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(start9);
  
    const start10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(start10);
    
    const start11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(start11);
    
    const start12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(start12);
    
    const start13 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(start13);
    
    const start14 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(start14);
    
    const start15 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(start15);
   
    const start16 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(start16);
    
    const start17 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(start17);
  } 
  
  // button to save to local storage; uses the class of the time block's div and text area
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    hourBlock = $(this).siblings(".hour").text().trim();
    localStorage.setItem(hourBlock, JSON.stringify(userInput));
  })
});

// gets the id from the html and adds the current date and time in the specific format using day.js
let update = function () {
  document.getElementById("currentDay").innerHTML = dayjs().format(
    "dddd, MMM D, h:mm:ss a"
  );
};
setInterval(update, 1000);

  // gets the current hour and loops over time-blocks to add the right class relative to the current hour
function timeTracker() {
  let hour = dayjs().hour();

  $(".time-block").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);

      if (hour > timeTest) {
        $(this).addClass("past");
      } else if (hour < timeTest) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
  });
}
