//update and display current time
var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
console.log(rightNow);

var pastTime = $("#currentDay").append(rightNow)

setInterval(function () {
    var updatedTime = moment().format("MMMM Do, YYYY - hh:mm a")
    // console.log(updatedTime)
    $("#currentDay").text("")
    $("#currentDay").append(updatedTime)
    // timeAudit();
}, 1000)



var hourArr = []
//function that audits times
function timeAudit() {
    //over each hour element
    $(".hour").each(function () {
        var taskTime = $(this).text().trim()
        //push to empty array
        // hourArr.push(taskTime)
        
        // var times = this
        //convert to moment object
            var taskTimeM = moment(taskTime, "h a")
            console.log(taskTimeM)

        // $(hourArr).each(function () {
            
//how to select corresponding task-block? loop over each time-block and find children instead of each hour


            if (moment().isAfter(taskTimeM)) {
                console.log("past")
                $(".task-block").removeClass("present future").addClass("past")
            }
            if (moment().isSame(taskTimeM)) {
                console.log("present")
                $(".task-block").removeClass("time-test future").addClass("present")
            }
           else if (moment().isBefore(taskTimeM)) {
               console.log("future")
                $(".task-block").removeClass("time-test present").addClass("future")
            }

        })
    }


timeAudit()


//save button each loop

$(".saveBtn").on("click", function () {
    
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
