var form = document.getElementById("form"),
    bdate = document.getElementById("date"),
    bmonth = document.getElementById("month"),
    byear = document.getElementById("year"),

    //Current
    date = document.getElementById("date2"),
    month = document.getElementById("month2"),
    year = document.getElementById("year2"),

    //span
    age = document.getElementById("age"),
    days = document.getElementById("days"),
    mons = document.getElementById("months"),

    //fetch teh value
    today = new Date();
year.value = today.getFullYear();
month.value = today.getMonth() + 1;
date.value = today.getDate();

form.addEventListener('submit', function (event) {
    event.preventDefault();

    /* all Convert float */
    //html value 
    var by = Number.parseFloat(byear.value),
        bm = Number.parseFloat(bmonth.value),
        bd = Number.parseFloat(bdate.value),

        //Current
        ty = Number.parseFloat(year.value),
        tm = Number.parseFloat(month.value),
        td = Number.parseFloat(date.value);

    if (td < bd) {
        days.innerHTML = (td - bd + 30) + 'days';

        tm = tm - 1;
    } else {
        days.innerHTML = (td - bd) + 'days';

    }
    if (tm < bm) {
        mons.innerHTML = (tm - bm + 12) + 'months';
        ty = ty - 1;

    } else {
        mons.innerHTML = (tm - bm) + 'months';
    }
    age.innerHTML = "Age :" + (ty - by) + 'Year';

});

