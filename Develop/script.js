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
    
    var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(init3);
   
    var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(init4);
    
    var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(init5);
    
    var init6 = JSON.parse(localStorage.getItem("06:00 pm"))
    sixPm.val(init6);
    
    var init7 = JSON.parse(localStorage.getItem("07:00 pm"))
    sevenPm.val(init7);
  } 

let now = dayjs(); console. log(now. format()); 
var interval = setInterval(function() {
  var currentTime = dayjs();
  $('#currentDay').html(currentTime.format('YYYY MMMM DD') + ' '
                      + currentTime.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + currentTime.format('hh:mm:ss A'));
}, 1000);


function timeTracker() {
  //get current number of hours.
  var hour = dayjs().hour();

  // loop over time blocks
  $(".time-block").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
//      console.log(this);
      if (hour > timeTest) {
        $(this).addClass("past");
      } else if (hour < timeTest) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
  });
}
  
  timeTracker();
