// Ice Cream Cafe

// Place Order        2 seconds
// Cut Fruit          2 seconds
// Add water and Ice  1 second
// Start machine      1 second
// Select Container   2 seconds
// Select Toppings    3 seconds
// Serve Ice Cream    2 seconds

// Front end --> Kitchen

// Back end --> Store Room

//!!! Call back Hell Below
// let stocks = {
//   Fruits: ["strawberry", "grape", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (fruit_name, call_production) => {

//     setTimeout(function (params) {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);
        
//         call_production();
//     }, 2000)
// };


//Callback Hell
// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//         setTimeout(() => {
//           console.log("start the machine");
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`);
//               setTimeout(() => {
//                 console.log("serve Ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);

//!!!  Callback hell above

// Place Order        2 seconds
// Cut Fruit          2 seconds
// Add water and Ice  1 second
// Start machine      1 second
// Select Container   2 seconds
// Select Toppings    3 seconds
// Serve Ice Cream    2 seconds

let stocks = {
  Fruits: ["strawberry", "grape", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

//***   Promises    */
//Make promise
//Promise is pending
// Promise is Resolved   or   Rejected
//               .then   or      |
//               .then   or   .catch
//                     .finally

// 3 states of a Promise
// Pending  waiting to see if promise will be resolved or rejected
// Resolve  promise made is successful
// Rejected promise made is unsuccessful

// let is_shop_open = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if(is_shop_open)
//         {
//             setTimeout(() => {
                
//                 resolve(work())
//             }, time);
//         }
//         else 
//         {
//             reject(console.log("Ice Cream shop is Closed"))
//         }
//     })

// }

// // step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   // step 2
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })

//   // step 3
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"));
//   })

//   // step 4
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//     );
//   })

//   // step 5
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   // step 6
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })

//   // step 7
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })

//   // Step 8
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   })

//   .catch(() => {
//     console.log("Customer left");
//   })

//   .finally(()=>{
//   console.log("end of day")
// })

//Promise--> Resolve(.then) / Reject(.catch) --> .finally

// function kitchen(){

//   return new Promise ((resolve, reject)=>{
//     if(true){
//        resolve("promise is fulfilled")
//     }

//     else{
//         reject("error caught here")
//     }
//   })
// }
// kitchen()  // run the code
// .then()    // next step
// .then()    // next step
// .catch()   // error caught here
// .finally() // end of the promise [optional]

//!!!    VS
//!!!  Async / Await--> try/catch
// Await -- wait until promise is settled and return the result
//👇 Magical keyword
// async function kitchen(){

//    try{ await abc; } // Let's create a fake problem      

//    catch(error){console.log("abc does not exist", error)}

//    finally{console.log("Runs code anyways")}
// }

// kitchen()  // run the code

//***   Async Await example */
// function toppings_choice() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love?")); //Prints fourth after 3 seconds
//     }, 3000);
//   });
// }
// async function kitchen(){ //This function will contain an async /await

//   console.log("A")  //Prints first
//   console.log("B")  //Prints second
//   console.log("C")  //Prints Third

//   await toppings_choice() //await toppings choice function to run

//   console.log("D") //Prints fifth
//   console.log("E") //Prints sixth

// }

// // Trigger the function

// kitchen();
// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking orders");   

// ** Ice Cream Shop async / await example
let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log("production has started");

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left")
}
finally{
    console.log("Shop is closing...its the end of the day")
}
}

// Trigger
kitchen();