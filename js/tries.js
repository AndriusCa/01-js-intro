console.clear();

/*const day = 'monday';

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan my course structure")
    console.log("Go to coding meetup")
    break;
  case (tuesday):
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thrursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('enjoy the weekend');
    break;
  default:
    console.log('not a valid day');

}*/


//
const day = 'number2';

if (day === 'monday') {
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
} else if (day === 'tuesday') {
  console.log("Prepare theory videos");
} else if (day ===  'wednesday' || day=== 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') { 
  console.log("Record videos");
} else if (day === 'saturday' || day === 'sunday'  ) {
  console.log("enjoy the weekend");
} else {
  console.log("not a valid day");
}