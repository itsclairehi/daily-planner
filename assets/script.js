//update and display current time
var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
console.log(rightNow);

var pastTime = $("#currentDay").append(rightNow)

setInterval(function () {
    var updatedTime = moment().format("MMMM Do, YYYY - hh:mm a")
    $("#currentDay").text("")
    $("#currentDay").append(updatedTime)
    timeAudit();
}, 10000)


//function that updates color-coding of hour/tasks
function timeAudit() {
    
    $(".time-block").each(function () {
        //convert each hour to moment object
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

//get time it was entered to
var taskHour = $(this).closest(".time-block").find(".hour").text().trim()

//update local storage
saveTasks(text, taskHour)
})

//save tasks to local storage function
var saveTasks = function (text, taskHour) {
    localStorage.setItem(taskHour, text);
  };

//when page loads, get all previous tasks
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