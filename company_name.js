const main = function() {
  let number = process.argv[2];
  console.log(companyName(number));
}

const companyName = function(number) {
  let companyNo = { maruti : ["9876543210","9175597931"],
                    mahindra : ["9822786202","9822536326"],
                    toyota : ["7058310554"]}
  for(company in companyNo) {
    for(contactNo in companyNo[company]) {
      if(companyNo[company][contactNo] == number) {
        return company;
      }
    }
  }
}

main();
