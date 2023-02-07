// // Class
// ====================Example====================
            class Car {
                constructor(model,maker,year){
                    this.model = model,
                    this.maker = maker,
                    this.age = this.CarAge(year)

                }


                //method 
                getCarInfo(){
                    return `A  ${this.model} made by ${this.maker} at ${this.age}`           
                        // called template litarels : `A  ${this.model} made by ${this.maker} at ${$this.year}`
                }

                CarAge(year){
                    return 2023-year;
                }
            }
            const Car1 =new Car( "Camry" , "Toyota" , 2010);
            console.log(Car1.getCarInfo());

// ====================Q1====================


            class Cars {
                constructor(make ,model,year, min , max){
                    this.make= make,
                    this.model = model,
                    this.cost = this.CarCost(min , max),
                    this.year = year

                }
            
                //method 
                getDescription(){
                    return `A  ${this.model} made by ${this.make} at ${this.year}  cost is ${this.cost}`           
                        // called template litarels : `A  ${this.model} made by ${this.maker} at ${$this.year}`
                }

                CarCost = (min, max) => {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
            }  
            const Car2 =new Cars( "Camrey" , "Toyota", 2010  ,30000 , 50000);
            console.log(Car2.getDescription());




// ====================Q2====================


            class Person {
                constructor(firstName ,lastName ,age){
                    this.firstName =firstName,
                    this.lastName =lastName,
                    this.age = age
                }

                getGreeting(){
                    return `Hi, I'm ${this.firstName} ${this.lastName} and I'm  ${this.age} years old `
                }
            }
            const person1 = new  Person("salwa" , "yehya" , 22);
            console.log (person1.getGreeting());



//                                             ====================Q3====================
//                                                            Arrow Function


//=====1-=========
// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }
    
//     return counter;
//   }
   
                // Answer
                const counterFunc = (counter) =>  (counter >100 ?  0 : counter ++) ;
                console.log(counterFunc(20)) ;
  

  //=====2-=======
//   function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }

                // Answer
                // nameAge = (name, age) => {
                //     console.log("Hello " + name)  ; 
                //     console.log("You are " + age + " years old");

                // }
                // nameAge('salwa' , 22)
  

  //=======3-======= 
//   function createFullName(firstName, lastName) {
//     return firstName + " " + lastName;
//   }
  

                // // Answer
                // const createFullName =(firstName, lastName) => {
                //     return  firstName + " " + lastName;
                // }  
                // console.log(createFullName( 'salwa', 'yehya'))

   //=======4-======= 
//    function doubleNumber(number) {
//     return number * 2;
//   }


                // Answer
                // const  doubleNumber = (number) =>{
                //     return number * 2;
                // }
                // console.log(doubleNumber(2))


     //=======5=====
    //  function getEvenNumbers(array) {
    //     let evenNumbers = [];
    //     for (let i of array) {
    //       if (i % 2 === 0) {
    //         evenNumbers.push(i);
    //       }
    //     }
    //     return evenNumbers;
    //   }

                // Answer 
                // const getEvenNumbers = (array) =>{
                //     let evenNumbers = [];
                //     for (let i of array) {
                //         if (i % 2 === 0) {
                //         evenNumbers.push(i);
                //         }
                //         }
                //         return evenNumbers;
                //         } 
                // console.log(getEvenNumbers ([ 2, 3 ,5 ]))
                    

     //========6===== 
    //  if (1<2){ 
    //     for (let index = 0; index < 5; index++) 
    //     {
    //      console.log("hi");
    //      }
    //      } else{ 
    //     console.log("bye"); 
    //     }


                // Answer  
                
                //    (1<2) ?   for (let index = 0; index < 5; index++) 
                //    console.log("hi") : console.log("bye");







    //                                       ====================Q4====================
    //                                                       Array Method

    	// Square and sum the elements of this array using arrow functions and in 1 line of code. Then find the average of the array.
        // let nums = [2, 4, 5];

                 let nums = [2, 4, 5];
                 let squaredAndSum = nums.reduce((acc, cur) => acc + cur*cur, 0);
                 let average = squaredAndSum/nums.length;
                 console.log(squaredAndSum);
                 console.log(average);





        // Use the map() function with arrow notation => to multiply each by 10 and return the result number of following array.
        // let list=[1,2,3,4,5,6,7,8];
                 
                 let list=[1,2,3,4,5,6,7,8];
                 let Mluti = list.map (list =>list * 10);
                 console.log(Mluti);



    //  var persons = [
    //        { name: { first: 'John', last: 'Hob' }, age: 35 },
    //        { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    //        { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    //        { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    //        { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
    //      ];
    //      Using the varabile persons
    //      Create a function called avgAge
    //      that accept an array
    //      and return average age of this array
                  
    //      Ex: avgAge(persons) => 41.2
                  
        var persons = [
            { name: { first: 'John', last: 'Hob' }, age: 35 },
            { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
            { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
            { name: { first: 'Zues', last: 'Odin' }, age: 55 },
            { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
          ];
         
         function avgAge (array){
            let Age = array.reduce((acc , cur )=>{
                return acc + cur.age ;
            },0)
             return Age/array.length;
            
         }
        console.log(avgAge(persons));  
         
         

