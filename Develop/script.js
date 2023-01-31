// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('dddd') + " " + dayjs().format("Do MMM YYYY");
  var currentTime = dayjs().format('h:mm:ss a');
  var nineAm = $("#9");
  var tenAm = $("#10");
  var elevenAm = $("#11");
  var twelvePm = $("#12");
  var onePm = $("#13");
  var twoPm = $("#14");
  var threePm = $("#15");
  var fourPm = $("#16");
  var fivePm = $("#17");
  var hour = dayjs().hour();
  
  function initPage() {

    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);
  
    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(init12);
    
    var init13 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(init13);
    
    var init14 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(init14);
    
    var init15 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(init15);
   
    var init16 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(init16);
    
    var init17 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(init17);
  } 
  
// $(document).ready(function () {
//   let timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//     function renderPlans() {
//       for (let i = 0; i <= timeSlots.length; i++) {
//           $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
//         }
//       }
//     renderPlans();
  
// $(".saveBtn").click(function () {
//     let dataHour = $(this).attr("rows");
//     let inputField = $("#" + dataHour).val();
  
//       localStorage.setItem(dataHour, inputField);
//       console.log(inputField);
    
//     });
//   });

$(document).ready(function(){
  initPage()
  timeTracker();

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".hour").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })


});

let now = dayjs(); console. log(now. format()); 
let update = function () {
  document.getElementById("currentDay").innerHTML = dayjs().format(
    "dddd, MMM D, h:mm:ss a"
  );
};
setInterval(update, 1000);


function timeTracker() {
  //get current number of hours.
  var hour = dayjs().hour();

  // loop over time blocks
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


// $(document).ready(function(){
//   timeTracker();
//   initPage();

//   $(".saveBtn").on("click", function(){
//     userInput = $(this).siblings(".time-block").text();
//     console.log(userInput);
//     hourSpan = $(this).siblings(".time-block").text();
//     console.log(hourSpan);
//     localStorage.setItem(hourSpan, JSON.stringify(userInput));
//   })
//   });