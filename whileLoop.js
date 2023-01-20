alert


while(i< 10){
    console.log( "your number is" + i);
    i++;
    
  }

  let Age=8;
  while(Age<10){
    console.log("your Age is less than 10");
    Age++;
  }

  
  const caRs= ['BMW','Volvo','Saab','Ford'];
  let m=0;
  let teXt="";
  while(caRs[m]){
    teXt += caRs[m];
    m++;
  }console.log(m);

  let poplimit=10;
  let fish=0;
  while(fish<poplimit){
    fish++;
    console.log("There's room for" + (poplimit - fish) +'more fish')
  }