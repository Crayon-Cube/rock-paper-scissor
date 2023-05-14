console.log("aaaaaaaaaaaaa");
// 3 values rock paper scissor
let rock;
let paper;
let scissor;

const result = (human, com,{h_score,c_score}) => {
  // rules
  
  if (
    (com == "rock" && human == "paper") ||
    (com == "scissor" && human == "rock") ||
    (com == "paper" && human == "scissor")
  ) {
    h_score++;
    console.log("h score" + h_score);
  } else if (
    (human == "rock" && com == "paper") ||
    (human == "scissor" && com == "rock") ||
    (human == "paper" && com == "scissor")
    ) {
        c_score++;
        console.log("c score" + c_score);
    } else {
        console.log("tie");
    }
    
    localStorage.setItem('h-score',JSON.stringify(h_score));
    localStorage.setItem('c-score',JSON.stringify(c_score));

    
    return {
        h_score_updated,
        c_score_updated,
    };
    
    //  if(h_score<5 ||c_score<5){
        //     main();
  //  } else{
  //     return "winner"
  //  }
};

// computer guess

const guess = () => {
  const zeroToTwo = Math.floor(Math.random() * 2);
  if (zeroToTwo == 0) {
    return "rock";
  }
  if (zeroToTwo == 1) {
    return "paper";
  }
  if (zeroToTwo == 2) {
    return "scissor";
  }
  //    return zeroToTwo;
};

// const result =() => {

// }

const main = () => {
  const h__score = localStorage.getItem('h-score');
  const c__score= localStorage.getItem('c-score');
  console.log("mian");
  const computer = guess();
  const human = prompt("Select rock , paper ,scissor ");
  console.log("human =" + human.toLowerCase());
  console.log("computer = " + computer);
  const { h_score, c_score } = result(human, computer);
  
    if(!h__score || !c__score ){
        h_score=0;
        c_score=0;
      }else{
          h_score=h__score;
          c_score=c__score
      }
      
  if(h_score+c_score<5){
    main();
  }else{
      console.log("who won " + h_score+" "+c_score);

  }
  // const
//   result(computer, prompt);/

  // if(whoWon="Human won "){
  //     h_score++
  // }else if(whoWon="Computer won"){
  //     c_score++
  // }
  // if(h_score<5 ||c_score<5)
  // {
  //     main();
  // }
};

main();
