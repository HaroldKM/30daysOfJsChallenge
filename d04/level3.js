// 1 number of day in a given month
let monthGivenByUser = prompt("Enter month :").toLowerCase();
let actualYear = new Date().getFullYear();
let numberOfDayInGivenMonth = null;
switch (true) {
  case monthGivenByUser === "january":
    numberOfDayInGivenMonth = new Date(actualYear, 0, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);
    break;

  case monthGivenByUser === "february":
    numberOfDayInGivenMonth = new Date(actualYear, 1, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "march":
    numberOfDayInGivenMonth = new Date(actualYear, 2, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "april":
    numberOfDayInGivenMonth = new Date(actualYear, 3, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "may":
    numberOfDayInGivenMonth = new Date(actualYear, 4, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "june":
    numberOfDayInGivenMonth = new Date(actualYear, 5, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "july":
    numberOfDayInGivenMonth = new Date(actualYear, 6, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "august":
    numberOfDayInGivenMonth = new Date(actualYear, 7, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "september":
    numberOfDayInGivenMonth = new Date(actualYear, 8, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "october":
    numberOfDayInGivenMonth = new Date(actualYear, 9, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "november":
    numberOfDayInGivenMonth = new Date(actualYear, 10, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  case monthGivenByUser === "december":
    numberOfDayInGivenMonth = new Date(actualYear, 11, 0).getDate();
    console.log("month" + monthGivenByUser, numberOfDayInGivenMonth);

    break;

  default:
    console.log("maybe you should enter a real month");
    break;
}
