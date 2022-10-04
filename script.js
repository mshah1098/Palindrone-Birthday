function reverseStr(str) {
  var listOfChars = str.split('');
  var reverseListOfChars = listOfChars.reverse();
  var reversedStr = reverseListOfChars.join('');
  return reversedStr;

}

function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}

function convertDateToStr(date) {

  var dateStr = { day: '', month: '', year: '' };

  if (date.day < 10) {
    dateStr.day = '0' + date.day
  }
  else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = '0' + date.month
  }
  else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return dateStr;
}

function getAllDateFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yyddmm = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];


}

function checkPalindromeForAllDateFormats(date) {
  var listOfPalindromes = getAllDateFormats(date);
  var itsPalindrome = false;

  for (var i = 0; i < listOfPalindromes.length; i++) {
    if (isPalindrome(listOfPalindromes[i])) {
      itsPalindrome = true;
      break;
    }
  }
  return itsPalindrome;

}
// // var date = {
// //   day: 15,
// //   month: 7,
// //   year: 2020,
// // }

// // console.log(checkPalindromeForAllDateFormats(date));
// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   }
//   if (year % 100 === 0) {
//     return false;
//   }
//   if (year % 4 === 0) {
//     return true;
//   }
//   return false
// }
// // function getNextDate(date) {
//   var day = date.day + 1;
//   var month = date.month;
//   var year = date.year;

//   var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// }

var dateInput = document.querySelector(".birth-day");

var checkBtn = document.querySelector("#check-btn");

var showMessage = document.querySelector("#showMessage");

function clickHandler() {
  var bdayStr = dateInput.value;
  if (bdayStr !== '') {
    var listOfDate = bdayStr.split('-');
    var date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0]),
    }
    var isPalindrome = checkPalindromeForAllDateFormats(date);

    // console.log(isPalindrome);
    if (isPalindrome) {
      showMessage.innerText = "Yay ! it's Palindrome."
    }
    else {
      showMessage.innerText = "OOPS! it's not palindrome"
    }
  }
}
 
  
  checkBtn.addEventListener('click', clickHandler);
