// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {

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

    // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
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
  
 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".hour").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  })
});



  // TODO: Add code to display the current date in the header of the page.
// gets the id from the html and adds the current date and time in the specific format using day.js
let now = dayjs(); console. log(now. format()); 
let update = function () {
  document.getElementById("currentDay").innerHTML = dayjs().format(
    "dddd, MMM D, h:mm:ss a"
  );
};
setInterval(update, 1000);


 // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

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
