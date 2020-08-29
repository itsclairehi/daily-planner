//function that works but sucks

function auditTime () {
var test = moment("9am", "h")

if(moment().isAfter(test)) {
    $("#test").addClass("time-test")
} console.log(test)

var test = moment("10am", "h")

if(moment().isAfter(test)) {
    $("#test2").addClass("time-test")
}
var test = moment("11am", "h")

if(moment().isAfter(test)) {
    $("#test3").addClass("time-test")
}
var test = moment("12pm", "h")

if(moment().isAfter(test)) {
    $("#test4").addClass("time-test")
}
var test = moment("1pm", "h")

if(moment().isAfter(test)) {
    $("#test5").addClass("time-test")
}
var test = moment("2pm", "h")

if(moment().isAfter(test)) {
    $("#test6").addClass("time-test")
}
var test = moment("3pm", "h")

if(moment().isAfter(test)) {
    $("#test7").addClass("time-test")
}

var test = moment("4pm", "h")

if(moment().isAfter(test)) {
    $("#test7").addClass("time-test")
}

var test = moment("5pm", "h")

if(moment().isAfter(test)) {
    $("#test7").addClass("time-test")
}
if (moment() = taskTimeEl) {

}
}
// setInterval(auditTime, 10)


//maybe good for save button?

// click event, goes down 2 layers, uses nested 'this': 1st 'this' refers to #testdiv2, 2nd 'this' refers to children of #testdiv2 (the 2 divs enclosing the 2 <p>'s)
$("#testdiv2").on("click", function() { 
    $(this).children().each(function(){
       var text =$(this)
       .find("p")
       .text()
   
   console.log(text)
})
})
