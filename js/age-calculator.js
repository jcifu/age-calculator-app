let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
const submit = document.querySelector("form");

function validate() {
  const inputs = document.querySelectorAll("input");
  let isValid = true;

  let errorMessages = {
    required: "This field is required",
    day: "Must be a valid day",
    month: "Must be a valid month",
    year: "Must be in the past",
  };

  inputs.forEach((i) => {
    const parent = i.parentElement;
    let small = document.createElement("small");
    parent.appendChild(small);
    if (!i.value) {
      //no value
      parent.classList.add("invalid");
      parent.querySelector("small").innerText = errorMessages.required;
      isValid = false;
    } else if(i.value) {
      //invalid values
      parent.querySelector("small").innerText = "";
      parent.classList.remove("invalid");
      if (i === day && (i.value < 0 || i.value > 31)) {
        parent.classList.add("invalid");
        parent.querySelector("small").innerText = errorMessages.day;
        isValid = false;
      } else if (i === month && (i.value < 0 || i.value > 12)) {
        parent.classList.add("invalid");
        parent.querySelector("small").innerText = errorMessages.month;
        isValid = false;
      } else if (i === year && (i.value < 0 || i.value > 2023)) {
        parent.classList.add("invalid");
        parent.querySelector("small").innerText = errorMessages.year;
        isValid = false;
      }
      else if (isValid === true) {
        parent.querySelector("small").remove()
      }
    }
  });

  return isValid;
}

function calculate(e) {
  e.preventDefault();
  if (validate(e)) {
    let now = new Date();
    let birthdate = new Date(year.value, month.value - 1, day.value);
    let lifetime = now.getTime() - birthdate.getTime(); //lifetime in milLiseconds

    let years = Math.floor(lifetime / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor(
      (lifetime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    let days = Math.floor(
      (lifetime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );

    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;

    console.log(years + " years");
    console.log(months + " months");
    console.log(days + " days");
  }
}

submit.addEventListener("submit", calculate);
