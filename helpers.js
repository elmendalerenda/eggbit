

exports.createGame = function(){
    var game = [];
    var questions = [];
       
    for(var i =0; i < 20; i += 1){
     var id = randomInAnArray(questions)
     questions.push(id);
         
         var answers = [id];
         answers.push(randomInAnArray(answers));
         answers.push(randomInAnArray(answers));
         
         answers.sort(function(){
           return Math.random() > 0.5
         });
 
         var question = {};
         question[id] = answers;
         
         game.push(question);
       }
    return game;
};

var randomInAnArray = function(list){
  
       var numQuestions = 40;
    
    var number = Math.floor(Math.random() * numQuestions); 
    
    while(list.indexOf(number) > -1 ){
        number = Math.floor(Math.random() * numQuestions);
    }
    return number;
};