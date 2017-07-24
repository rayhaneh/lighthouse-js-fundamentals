for (var i = 100; i <= 200; i++){
  output = "";
  if (i % 3 === 0){
    output += "Loopy";
  }else if (i % 4 === 0){
    output += "Lighthouse";
  }else if (output === ""){
    output = i;
  }
  console.log(output)
}