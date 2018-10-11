const extractName = require("./lib.js").extractName
const extractAge = require("./lib.js").extractAge
const extractBirthdate = require("./lib.js").extractBirthdate
const extractInfo =require("./lib.js").extractInfo


let employeeData = [{EmployeeId : 22805, Name : "aftab", DateOfBirth : "05-Jul-1999"},
{EmployeeId : 22742, Name : "akanksha", DateOfBirth : "26-Jun-1999"},
{EmployeeId : 22743, Name : "ankon", DateOfBirth : "11-Jan-1998"},
{EmployeeId : 22766, Name : "annapurna", DateOfBirth : "26-Apr-2000"},
{EmployeeId : 22744, Name : "arif", DateOfBirth : "23-Apr-1996"},
{EmployeeId : 22745, Name : "arnab", DateOfBirth : "22-Jan-1997"},
{EmployeeId : 22746, Name : "athul", DateOfBirth : "20-May-1998"},
{EmployeeId : 22748, Name : "bhawna", DateOfBirth : "26-Mar-1997"},
{EmployeeId : 22749, Name : "chandan", DateOfBirth : "03-Nov-1998"},
{EmployeeId : 22823, Name : "deepika", DateOfBirth : "14-Oct-1996"},
{EmployeeId : 22751, Name : "dheeraj", DateOfBirth : "04-Jul-1999"},
{EmployeeId : 22750, Name : "durga", DateOfBirth : "27-Dec-1999"},
{EmployeeId : 22752, Name : "gaurav", DateOfBirth : "29-Apr-1999"},
{EmployeeId : 22754, Name : "gayatri", DateOfBirth : "15-Apr-1999"},
{EmployeeId : 22753, Name : "heera", DateOfBirth : "06-Jan-1998"},
{EmployeeId : 22755, Name : "kanishka", DateOfBirth : "28-Apr-2000"},
{EmployeeId : 22756, Name : "keerthy", DateOfBirth : "10-Dec-1997"},
{EmployeeId : 22763, Name : "leela", DateOfBirth : "16-Jul-1999"},
{EmployeeId : 22813, Name : "mahesh", DateOfBirth : "11-Oct-1998"},
{EmployeeId : 22759, Name : "moumita", DateOfBirth : "12-Aug-1997"},
{EmployeeId : 22760, Name : "mustakim", DateOfBirth : "26-Jul-1999"},
{EmployeeId : 22764, Name : "naman", DateOfBirth : "01-Jun-1996"},
{EmployeeId : 22787, Name : "prince", DateOfBirth : "15-Jul-1995"},
{EmployeeId : 22790, Name : "rahul", DateOfBirth : "04-May-1997"},
{EmployeeId : 22816, Name : "raja", DateOfBirth : "22-Jun-2000"},
{EmployeeId : 22791, Name : "reshmi", DateOfBirth : "06-Feb-1999"},
{EmployeeId : 22793, Name : "rishab", DateOfBirth : "29-Nov-1995"},
{EmployeeId : 22799, Name : "saiganesh", DateOfBirth : "24-Oct-1999"},
{EmployeeId : 22800, Name : "sanjay", DateOfBirth : "27-Jan-2000"},
{EmployeeId : 22801, Name : "sapana", DateOfBirth : "10-Sep-1998"},
{EmployeeId : 22806, Name : "shubham", DateOfBirth : "25-May-1998"},
{EmployeeId : 22819, Name : "srushti", DateOfBirth : "29-May-2000"},
{EmployeeId : 22820, Name : "suman", DateOfBirth : "14-Oct-1998"},
{EmployeeId : 22821, Name : "swagata", DateOfBirth : "10-Nov-1996"},
{EmployeeId : 22758, Name : "swapnil", DateOfBirth : "30-Sep-1999"},
{EmployeeId : 22788, Name : "tilak", DateOfBirth : "29-May-1999"},
{EmployeeId : 22822, Name : "tushar", DateOfBirth : "30-Sep-1999"}]

//const extractBirthdate = function(employeeData) {
  //let birthdate = [""];
  //let no = 0;
  //for(employeeNo in employeeData) {
    //for(property in employeeData[employeeNo]) {
      //birthdate[no] = employeeData[employeeNo]["DateOfBirth"];
    //}
    //no++;
  //}
  //return birthdate;
//}
////
//
//const extractAge = function(birthdate) {
  //let age = [""];
  //let no = 0;
  //for(elements in birthdate) {
    //array = birthdate[elements].split("-");
    //age[no] = 2018 - array[2];
    //no++;
  //}
  //return age;
//}
//
//const extractName = function(employeeData) {
  //let names = [""];
  //let no = 0;
  //for(employeeNo in employeeData) {
    //for(property in employeeData[employeeNo]) {
      //names[no] = employeeData[employeeNo]["Name"];
    //}
    //no++;
  //}
  //return names;
//}
//
//const extractInfo = function(employeeData) {
  //birthdate = extractBirthdate(employeeData);
  //age = extractAge(birthdate);
  //names = extractName(employeeData);
  //let info = [""];
  //let no = 0;
  //for(let employeeNo = 0; employeeNo < employeeData.length; employeeNo++) {
    //info[no] = names[no]+"  =  "+age[no];
    //no++;
  //}
  //return info;
//}

const main = function() {
  info = extractInfo(employeeData);
  for(element in info) {
    console.log(info[element]);
  }
}

main();
