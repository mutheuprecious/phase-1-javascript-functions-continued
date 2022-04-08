// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`;
  }
  
  function wrapAdjective(visualFlair = "*"){
    return function (text = "special"){
      return `You are ${visualFlair}${text}${visualFlair}!`;
    }
  }