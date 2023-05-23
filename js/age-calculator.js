

function calculate() {

  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  let now = new Date();
  
  let birthdate = new Date(year.value, month.value - 1, day.value);

  let lifetime = now.getTime() - birthdate.getTime(); //lifetime in milLiseconds
  
  
  let years = Math.floor(lifetime / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor((lifetime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor((lifetime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days; 

  console.log(years + " years");
  console.log(months + " months");
  console.log(days + " days");

}

