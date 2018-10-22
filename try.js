let fruits = process.argv[2];

switch(fruits) {
  case "apple" :
    console.log("an apple a day keeps doctor away.");
    break;
  case "banana" :
    console.log("banana banana banana");
    break;
  default :
    console.log("fruit not found");
    break;
}
