function ageCalculator(name,yearOfBirth,currentYear){
  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}


console.log (ageCalculator("Suzie", 1983, 2015))