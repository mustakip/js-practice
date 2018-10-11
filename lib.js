"------------------------------------------------------------------"
                     "array_intersection.js"
"------------------------------------------------------------------"

const extractCommon = function(array1,array2) {
  let intersection = [""];
  let actualIntersect = ["undefined"];
  for(elements in array1) {
    intersection[array1[elements]] = array1[elements];
  }
  for(elements in array2) {
    if(intersection[array2[elements]] == array2[elements]) {
      actualIntersect[array2[elements]] = array2[elements];
    }
  }
  return actualIntersect;
}
"------------------------------------------------------------------"
                            "employees.js"
"------------------------------------------------------------------"

const extractBirthdate = function(employeeData) {
  let birthdate = [""];
  let no = 0;
  for(employeeNo in employeeData) {
    for(property in employeeData[employeeNo]) {
      birthdate[no] = employeeData[employeeNo]["DateOfBirth"];
    }
    no++;
  }
  return birthdate;
}


const extractAge = function(birthdate) {
  let age = [""];
  let no = 0;
  for(elements in birthdate) {
    array = birthdate[elements].split("-");
    age[no] = 2018 - array[2];
    no++;
  }
  return age;
}

const extractName = function(employeeData) {
  let names = [""];
  let no = 0;
  for(employeeNo in employeeData) {
    for(property in employeeData[employeeNo]) {
      names[no] = employeeData[employeeNo]["Name"];
    }
    no++;
  }
  return names;
}

const extractInfo = function(employeeData) {
  birthdate = extractBirthdate(employeeData);
  age = extractAge(birthdate);
  names = extractName(employeeData);
  let info = [""];
  let no = 0;
  for(let employeeNo = 0; employeeNo < employeeData.length; employeeNo++) {
    info[no] = names[no]+"  =  "+age[no];
    no++;
  }
  return info;
}



exports.extractCommon = extractCommon;
exports.extractBirthdate =extractBirthdate;
exports.extractName = extractName;
exports.extractInfo = extractInfo;
exports.extractAge = extractAge;
