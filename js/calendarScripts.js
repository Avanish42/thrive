//ON AGE LOAD FUNCTION TO DISPLAY CURRENT TWO MONTHS TO DISPLAY EVENTS
//CALL BACK FUNCTION
(function () {
    var date = document.getElementById('currentMonths');
    var today = new Date();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    if (month == 11) {
        var nextMonth = months[0];
        var nextYear = year + 1;
        var currentMonths = currentMonth + " " + year + "-" + nextMonth + " " + nextYear;
    }
    else {
        var nextMonth = months[month + 1];
        var currentMonths = currentMonth + "-" + nextMonth + " " + year;
    }
    date.innerHTML = currentMonths;
}());

