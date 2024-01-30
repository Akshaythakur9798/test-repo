
// Question-1
const arr = [-2, 5, 3, -8, 10, -4];
function sumOfPositives(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log (sumOfPositives (arr))




 
 //Question-2
const student = [
  {
    name: "Alice",
    score: 85,
  },
  {
    name: "Bob",
    score: 60,
  },
  {
    name: "Charlie",
    score: 92,
  },
  {
    name: "David",
    score: 75,
  },
];

function getStudentsAboveThreshold(students, threshold) {
  return students.filter((st) => st.score > threshold).map((st) => st.name);
}
console.log(getStudentsAboveThreshold(student,80))



//Question-3
let number = 8046957321;

let numArr = number.toString().split("");

function sortNumber(numArr) {
  // Sort without using sort()
  for (let i = 0; i < numArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[j] < numArr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap elements
    let temp = numArr[i];
    numArr[i] = numArr[minIndex];
    numArr[minIndex] = temp;
  }

  return numArr;
}

console.log(sortNumber(numArr));





//Question-4
async function fetchFirstFivePostTitles() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    //to get  first five title
    data = data.slice(0, 6);
    console.log(data.map((post) => post.title));
  } catch (error) {
    console.log(error);
  }
}
fetchFirstFivePostTitles()




// Question-5
//   let const and var are used to decalare variable. 
//   they have  differnce like scoping,hoisting,and reassignment .

                                  //  VAR
// Var is function scoped the variable is accessible in entire function which it is declare.
// It allows redeclaration and reassignment.
// Variables declared with var are hoisted to the top of their function or global scope which means they can be used before they are declared

function example() {
  if (true) {
    var x = 10;
    console.log(x); 
  }
  console.log(x); //  10  
}
      
                                //  LET
// Let is blocked scoped the variable is only accessible within the block which it is declare
//  it allows reassignment but not redeclaration within the same scope.
// Variables declared with let are hoisted to the top of their block scope but they are not initialized until the declaration is reached.
function example() {
  if (true) {
    let y = 20;
    console.log(y); 
  }
  console.log(y); // ReferenceError y is not defined
}
                              // CONST
// const is also blocked scoped.
//  Does not allow reassignment. Once a value is assigned to a const variable, it cannot be changed.
//  variables declared with const are hoisted to the top of their block scope but are not initialized until the declaration is reached.
function example() {
  const z = 30;
  console.log(z);
  z = 40; // TypeError Assignment to constant variable
}
          //                               use case
// Use var when you need function-scoping or when working with older code.
// Use let when you need block-scoping and plan to reassign the variable.
// Use const when you want to create a variable with a constant value that should not be reassigned.

                                // limitation
// var has some issues related to scoping and can lead to unexpected behavior.
// let and const have better scoping and prevent accidental redeclaration within the same scope, but they are not hoisted in a way that allows access before the declaration.







