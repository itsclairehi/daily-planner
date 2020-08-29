//indicate if time is in past, present or future

//generate moment objects for each time
////generate 9am
//// append to column
////loop through all rows somehow
//put in array timeArr

//make array of times
// for each item in array, convert to moment object in for loop
//      append it somehow to the right column? how do you do that? id incrementor?

// timeArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
// //function that creates moment objects for each time
// $(timeArr).each( function () {
//     var times=this
//     var taskTime = moment(times,"h")
//     console.log(taskTime)


//     if(moment().isAfter(taskTime)) {
//         $(".time-block").addClass("time-test")
//     }
//     if(moment().isSame(taskTime)) {
//         $(".time-block").addClass("present")
//     }

// })


var testArr = []
//function that audits times
function timeAudit() {
    $(".time-text").each(function () {
        var taskTime = $(this).text().trim()
        //push to empty array
        testArr.push(taskTime)

        $(testArr).each(function () {
            var times = this
            var taskTimeM = moment(times, "h")
            console.log(taskTimeM)

            if (moment().isAfter(taskTimeM)) {
                $(".task-block").addClass("time-test")
            }
            if (moment().isSame(taskTimeM)) {
                $(".task-block").addClass("present")
            }

        })
    })
}


timeAudit()

//update and display current time
var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
console.log(rightNow);

var pastTime = $("#currentDay").append(rightNow)

setInterval(function () {
    var updatedTime = moment().format("MMMM Do, YYYY - hh:mm a")
    // console.log(updatedTime)
    $("#currentDay").text("")
    $("#currentDay").append(updatedTime)
    // auditTime();
}, 1000)




//save button

$(".saveBtn").on("click", function () {
    //get text from its corresponding 
    $()
})
console.log("hello")













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
