const q_num=document.querySelector('.q_num');
const option_di=document.querySelectorAll('.option_div>span');
const que=document.querySelector('.que_div');
const nextBtn=document.querySelector('#nextBtn');
const prevBtn=document.querySelector('#prevBtn');
const score_div=document.querySelector('#score');


let option_div=Array.from(option_di)
let record=[];
const obj={
  colour:"",
   opt:''
 }

 for (let index = 0; index < 10; index++) {
    const newObj={...obj}
    record.push(newObj)
 }
 


const mathQuestions = [
  {
    questionText: "What is the value of π (pi)?",
    options: ["3.14", "2.71", "1.618", "4.20"],
    correctAnswer: "3.14"
  },
  {
    questionText: "Solve for x: 2x + 5 = 15",
    options: ["5", "7", "10", "8"],
    correctAnswer: "5"
  },
  {
    questionText: "Simplify the expression: 3(x + 2) - 2(2x - 1)",
    options: ["5x + 5", "3x + 5", "4x + 1", "2x + 7"],
    correctAnswer: "5x + 5"
  },
  {
    questionText: "What is the square root of 81?",
    options: ["9", "8", "7", "6"],
    correctAnswer: "9"
  },
  {
    questionText: "In a right-angled triangle, what is the length of the hypotenuse if the other two sides are 3 and 4?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "5"
  },
  {
    questionText: "Factorize the expression: x^2 - 4",
    options: ["(x + 2)(x - 2)", "(x + 4)(x - 1)", "(x - 2)(x - 2)", "(x + 1)(x - 4)"],
    correctAnswer: "(x + 2)(x - 2)"
  },
  {
    questionText: "What is the slope-intercept form of a linear equation?",
    options: ["y = mx + b", "y = ax^2 + bx + c", "y = ab^x", "y = a/x"],
    correctAnswer: "y = mx + b"
  },
  {
    questionText: "If a triangle has angles A, B, and C, what is the sum of these angles?",
    options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    correctAnswer: "180 degrees"
  },
  {
    questionText: "Find the area of a rectangle with length 8 units and width 5 units.",
    options: ["20 square units", "35 square units", "40 square units", "13 square units"],
    correctAnswer: "40 square units"
  },
  {
    questionText: "What is the formula for the volume of a cylinder?",
    options: ["V = πr^2h", "V = lwh", "V = 1/3πr^2h", "V = 4/3πr^3"],
    correctAnswer: "V = πr^2h"
  }
];

let flag=0;
let num=0;
function put_value(flag) {
      
       flag<=0?prevBtn.disabled=true:prevBtn.disabled=false
       flag>=10?nextBtn.disabled=true:nextBtn.disabled=false

      que.innerHTML=mathQuestions[flag].questionText;
      option_div.forEach((op,i)=>{
        op.innerHTML=`${mathQuestions[flag].options[i]}`;
      })
}
put_value(flag)
let score=0;
 
  option_div.forEach((option,index)=>{
      option.addEventListener("click",()=>{
         const newFlage=flag;
         while (num==0 && record[flag].colour=="") {
          if (option.innerHTML==mathQuestions[newFlage].correctAnswer) {
            score+=1
           score_div.innerHTML=`Score : ${score}`
           option.style.backgroundColor="blue"
           record[newFlage].colour="blue"
            num=1;
         }else{
           option.style.backgroundColor="green"
           record[newFlage].colour="green"
           num=1;
           }
           record[newFlage].opt=index;
         }

      })
  })




nextBtn.addEventListener("click",()=>{
     flag+=1
     put_value(flag)
     num=0;
     q_num.innerHTML=`Question : ${flag+1}/10`
     option_div.forEach((option,index)=>{
        if (record[flag].opt==index) {
        option.style.backgroundColor=record[flag].colour
        }else{
        option.style.backgroundColor="white"
        }
     })
})

prevBtn.addEventListener("click",()=>{
     flag-=1;
     put_value(flag)
     num=0
     q_num.innerHTML=`Question : ${flag+1}/10`
     option_div.forEach((option,index)=>{
      if (record[flag].opt==index) {
      option.style.backgroundColor=record[flag].colour
      }else{
      option.style.backgroundColor="white"
      }
   })
})


