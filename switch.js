alert

let day;
switch(new Date().getDay()){
  case 0:
    day= "Sunday";
    break;
    case 1:
      day="Monday";
      break;
      case 2:
        day= "Tuesday";
        break;
        case 3:
          day= "Wednesday";
          break;
          case 4:
            day= "Thursday";
            break;
            case 5:
              day="Friday";
              break;
              case 6:
                day= "Saturday";
                break;
}
console.log(day);

const Animal='Giraffe';
switch(Animal){
  case 'cow':
    case 'Giraffe':
      case 'Dog':
        case 'Pig':
          console.log('This animal will go on Noah\'s Ark.');
        break;
        case 'spoon':
          console.log('A spoon is not an animal');
          break;
        case 'Dinosaur':
          default:
            console.log('This animal will not be on the Ark.');
        }

        const Animal1='spoon';
switch(Animal1){
  case 'cow':
    case 'Giraffe':
      case 'Dog':
        case 'Pig':
          console.log('This animal will go on Noah\'s Ark.');
        break;
        case 'spoon':
          console.log('A spoon is not an animal');
          break;
        case 'Dinosaur':
          default:
            console.log('This animal will not be on the Ark.');
        }

        const Animal2='Dinosaur';
switch(Animal2){
  case 'cow':
    case 'Giraffe':
      case 'Dog':
        case 'Pig':
          console.log('This animal will go on Noah\'s Ark.');
        break;
        case 'spoon':
          console.log('A spoon is not an animal');
          break;
        case 'Dinosaur':
          default:
            console.log('This animal will not be on the Ark.');
        }


   let day1;
    switch(new Date().getDay()) {
      case 6:
        day1= 'Today is Saturday';
        break;
        case 0:
          day1 = 'Today is sunday';
          break;
          default:
            day1= 'Looking forward to the weekend';
            
            console.log(day1);
    }

    
   let day2;
   switch(new Date().getDay()) {
     
         default:
        day2= 'Looking forward to the weekend';
       case 6:
       day2= 'Today is Saturday';
       break;
       case 0:
         day2 = 'Today is sunday';
        break; 

   }console.log(day2);


   let dat;
   switch(new Date().getDay()){
    case 4:
      case 5:
        dat ='soon it is weekend';
        break;
        case 0:
          case 6:
            dat = 'it is weekend';
            break;
            default:
              dat = 'looking forward to the weekend';
              
   }console.log(dat);

   let u = "0";
switch (u) {
  case '0':
    console.log('off');
    break;
  case '1':
    console.log('on');
    break;
  default:
    console.log("No value found");
}


let fruit= 'Apple'
switch(fruit){
  case 'Banana':
  console.log("Hello");
  break;
  case 'Apple':
  console.log("Welcome");

} 

let grade=60;
switch(true){
  case grade >=90:
    console.log('A');
    break;
    case grade>=80:
      console.log('B');
      break;
      case grade >=70:
        console.log('C');
        break;
        case grade >=60:
          console.log('D');
          break;
          case grade>=50:
            console.log('E');
            default:
              console.log('F')
}

const month= new Date().getMonth();
switch(month){
  case 0:
    case 1:
      case 2:
        console.log('winter');
        break;
        case 3:
          case 4:
            case 5:
              console.log('spring');
              break;
              case 6:
                case 7:
                  case 8:
                    console.log('summer');
                    break;
                    case 9:
                      case 10:
                        case 11:
                          console.log('Autumn')
                          break;
                          default:
                            console.log('something when wrong');
}