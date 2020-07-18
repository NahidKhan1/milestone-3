// feetToMile
 function feetToMile(feet){
     var mile = feet / 5280;
     return mile;
 }
 var result = feetToMile(10000);
 console.log(result);

// woodCalculator

 function woodCalculator(chair, table, bed){
      var chairWoodCount = chair * 1;
      var tableWoodCount = table * 3;
      var bedWoodCount = bed * 5;
      var totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
      return totalWood;
  }
  var woodresult = woodCalculator(1, 5, 2);
  console.log(woodresult);


// // brickCalculator
 function brickCalculator( floorNumber );
    var totalBrickUpToTen = 15 * 1000;
    var totalBrickUpToTwenty = 12 * 1000;
    var totalBrickUpToFortFive = 10 * 1000;

     if( floorNumber <=10){

        console.log( totalBrickUpToTen ) ;


    }else if(floorNumber >=11 && floorNumber <=20){

        console.log( totalBrickUpToTwenty ) ;

     } else if( floorNumber >=21 && floorNumber >= 45){

         console.log( totalBrickUpToFortFive ) ;

    }else{

         return "Warnning! Please Input Actual Floor Number";

    }
   
 }



// tinyFriend

function tinyFriend(friendName){
    var lowest = friendName.length [0] ;
    for(var i=0; i < friendName.length; i++ ){
    var currentName = friendName [i];
    if ( currentName < lowest ) {
        lowest = currentName;
    }
}
    return lowest;
}



