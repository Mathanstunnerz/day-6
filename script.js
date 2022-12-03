class Uberprice{
    
   
    constructor(passenger,place,distance,time){
        
    
     if(passenger === String){
            this.passenger = "error"
        }
       else if(passenger ==0){
            this.passenger = "error";

        }    
        else if(passenger == 1){
            this.passenger = 
`vehicle type :bike
pick place :${place} 
distance : ${distance} 
cost : ${distance* 5}Rs
vehicle speed : 40 kmhr
starting time : ${time}`;
        }
                         
       else  if  (passenger <4) {
         this.passenger = `vehicle type :hatchback
pick place :${place} 
distance : ${distance} 
cost : ${distance* 8}Rs
vehicle speed : 75 kmhr
starting time : ${time}`; 
         } 
       
      else if ( passenger<7){
        this.passenger = `vehicle type :suv
pick place :${place} 
distance : ${distance} 
cost : ${distance* 10}Rs
vehicle speed : 80 kmhr
starting time : ${time}`;  
        }
       else if (passenger <9){
           this.passenger = `vehicle type :mpv
pick place :${place} 
distance : ${distance} 
cost : ${distance* 12}Rs
vehicle speed : 80 kmhr
starting time : ${time}`; 
        }
       else {
     this.passenger = "Enter a valid passenger";
        }
     
        if(distance <15 ){
                    this.distance= distance * 5;
                }
        this.time = time;

}
}

var obj1 = new Uberprice(6,"dharapuram",30,8.00);
console.log(obj1.passenger) 