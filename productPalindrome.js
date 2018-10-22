const isPalindrome = function(product) {
  let count = 0;
  let message = "No";
  let limit = Math.floor(product.length/2);

  for(attempt = 0; attempt < limit ; attempt++){
    if(product[attempt] == product[(product.length-1)-attempt]) {
      count++;
    }
  }
  if(count == limit){
    message = "Yes";
  }
  return message;
}

const findPair = function(number) {
  let number2 = number;
  product =  checkPalindrome(number,number2);
  return product; 
}

const checkPalindrome = function(number,number2) {
  let product;
  let message;
  let start = number2;
  for(number; number > 0; number--) {
    number2 = start;
    while(number2 >= number) {
      product = ""+(number2*number);
      console.log(product);
      message = isPalindrome(product);
      if(message == "Yes") {
        return product;
      }
      number2--;
    }
  }
}
  
const main = function() {
  let number = process.argv[2];
  palindromePair = findPair(number);
  console.log(palindromePair);
}

main();
