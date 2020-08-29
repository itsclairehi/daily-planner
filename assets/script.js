//update and display current time
var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
console.log(rightNow);

var pastTime = $("#currentDay").append(rightNow)

setInterval(function () {
    var updatedTime = moment().format("MMMM Do, YYYY - hh:mm a")
    // console.log(updatedTime)
    $("#currentDay").text("")
    $("#currentDay").append(updatedTime)
    timeAudit();
}, 10000)


//function that audits times
function timeAudit() {
    //over each timeblock element
    $(".time-block").each(function () {
        var taskTime = $(this).find(".hour").text().trim()

        var taskTimeM = moment(taskTime, "h a")
        

        //change color depending on relation to present
        if (moment().isAfter(taskTimeM)) {
            $(this).find(".task-block").removeClass("present future").addClass("past")
        }

        if (moment().startOf('hour').isSame(taskTimeM)) {
            $(this).find(".task-block").removeClass("time-test future").addClass("present")
        }

        else if (moment().isBefore(taskTimeM)) {
            $(this).find(".task-block").removeClass("time-test present").addClass("future")
        }
      
    })
}

timeAudit()

//save button
/
$(".saveBtn").on("click", function () {
//get text entered to textarea
var text= $(this).closest(".time-block").children().find("textarea").val().toString()
//replace text if there's already some?

//get time it was entered to
var taskHour = $(this).closest(".time-block").find(".hour").text().trim()
console.log("taskHour " + taskHour)
//set id maybe
var textAreaId=$(this).closest(".time-block").find("textarea").attr("id")
console.log(textAreaId)


saveTasks(text, taskHour)
})



var saveTasks = function (text, taskHour) {
    localStorage.setItem(taskHour, text);
  };


  var loadTasks = function () {
      $("#nine").val(localStorage.getItem("9am"))
      $("#ten").val(localStorage.getItem("10am"))
      $("#eleven").val(localStorage.getItem("11am"))
      $("#twelve").val(localStorage.getItem("12pm"))
      $("#one").val(localStorage.getItem("1pm"))
      $("#two").val(localStorage.getItem("2pm"))
      $("#three").val(localStorage.getItem("3pm"))
      $("#four").val(localStorage.getItem("4pm"))
      $("#five").val(localStorage.getItem("5pm"))
  }
        
    


loadTasks()








//     console.log($(this))
// })
//   }
//   loadTasks()
    // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         nineAM: [],
//         tenAM: [],
//         elevenAM: [],
//         twelvePM: [],
//         onePM: [],
//         twoPM: [],
//         threePM: [],
//         fourPM: [],
//         fivePM: [],
//       };
//     }
//     // loop over object properties
//   $.each(tasks, function (list, arr) {
//     console.log(list, arr);
//     // then loop over sub-array
//     arr.forEach(function (task) {
//       createTask(task.text, task.date, list);
//     });
//   });
// };

//what storage object will look like
// tasks= [
//     {
//         description: "read",
//         tasktime:"10pm"
//     },
//     {
//         description:,
//         taskTime: 
//     },
//     {
//         description: "wake up",
//         taskTime:"9am" ,
//     },

// ]










//   //can convert 'this' to object, and get just the text from it.   can chain .trim() after .text() to get rid of white space in text area
//   $(".task-block").on("click", function () {
//     var text = $(this).text();
//     // textInput creates a textarea (denoted by <> tags inside of "") with a value of 'text (rn Appended item)
//     var textInput = $(".task-block").append($("<textarea>"))
//       .addClass("text-area")
//       .val(text)
//     //selecting 'this' object, and replace with textInput (which is the new textarea)
//     $(this).replaceWith(textInput)
//     //makes it so you don't have to click textarea twice to edit. "focus" is an event that can be triggered programmatically with 'trigger()' function
//     textInput.trigger("focus");

//     console.log("just the text: " + text);
//   });

//   //ADD POINT add event delegation to textarea. "blur" is the event opposite of "focus", so this function will happen when textarea is clicked out of. 
//   $(".task-block").on("blur", "textarea", function () {

//     //get the textarea's current value/text
//     var text = $(this)
//       .val()
//       .trim();

//     //recreate li element
//     var pRecreate = $("<p>")
//       .text(text);

//     //replace textarea with li element
//     $(this).replaceWith(pRecreate);
//   });


// click event, goes down 2 layers, uses nested 'this': 1st 'this' refers to #testdiv2, 2nd 'this' refers to children of #testdiv2 (the 2 divs enclosing the 2 <p>'s)
// $("#testdiv2").on("click", function() { 
//     $(this).children().each(function(){
//        var text =$(this)
//        .find("p")
//        .text()

//    console.log(text)
// })
// })















 // // change color of timeblock if past current time 

// //     //get time from timeblock
//     var taskTime = $(".time-text").text()
//     console.log("test",taskTime)
// //     //convert to moment object OR POPULATE DIV WITH MOMENT OBJECTS TO BEGIN WITH?
//     var taskTimeMom = moment(taskTime, "L")
//     console.log(taskTimeMom)
// //     //change background if time is in past
// if ((moment().format("hh a")).isAfter(taskTimeMom)) {
//     $("#tasktime").removeClass("hello") 
// $("#tasktime").addClass("time-test")
// }



// var taskTime = $(".time-text").text()
// // console.log("test",taskTime)

// var timeTest=moment(taskTime[i], "h")
// console.log("time test ",timeTest)



// var auditTime= function(taskTimeEl) {

// var timeText= $(taskTimeEl).find("span").text().trim()
// console.log(timeText)
// }
// auditTime()
//make array
// var startTime= 9
// function incrementTime(){
//     startTime++
//     $(".time-text").text(startTime + ("am")) 
// }
// incrementTime()
