  function sum(arr) {
    let dashbord = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    const firstPlayer = 'X';
    const secondPlayer = 'O';
    debugger;
    while(arr.length >= 2){
      let xMove = arr.shift().split(' ');
      let oMove = arr.shift().split(' ');

      if(dashbord[xMove[0]][xMove[1]] !== false){
        console.log("This place is already taken. Please choose another!");
        if (arr.length > 0) {
          xMove = arr.pop();
        }
        else{
          break;
        }
      }
      else {
        dashbord[xMove[0]][xMove[1]] = firstPlayer;
      }

      if (dashbord[oMove[0]][oMove[1]] !== false) {
        
      }
      else{
        dashbord[oMove[0]][oMove[1]] = secondPlayer;
      }
    }

    

    console.log(dashbord);

  }

sum(
  [
    "0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);