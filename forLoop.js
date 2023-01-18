alert



for(let i=0; i<5; i++){
    console.log('Hello World',i)
  }
  
  for(let i=1; i<=5; i++){
  if( i % 2 !==0)
    console.log(i)
  }
  
  for(let i=1; i<5; i++){
    console.log('Hello World',i)
  }
  for(let i=5; i>=1; i--){
    if( i % 2 !==0)
      console.log(i)
    }
  
    
    for(let i= 0,cars="volvo" ,len= cars.length, text =""; i<len; i++){
      text+= cars[i] + "<br>";
      console.log(i)
    }
    let i= 2;
    let cars="volve";
    let len= cars.length;
    let text22="";
    for (; i<len; i++){
      text22 += cars[i] + "<br>";
      console.log(i);
    }
  
    let I=0;
    let car="volvo";
    let len1= car.length;
    let text11= "";
    for (; I<len1;){
      text11 +=car[I] + "<br>";
      I++;
      console.log(I);
    }
    let i1= 5;
    for(let i1= 0;i1<10; i1++){
      // some code
      console.log(i1);
    }
    
    const carS= ['BMW','Volvo','Saab','Ford'];
    let p=0;
    let texT="";
    for(;carS[p];){
      texT += carS[p];
      p++;
    }console.log(p);
  