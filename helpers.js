exports.createGame = function() {
    var game = [];
    var questions = [];

    for (var i = 0; i < 5; i += 1) {
        
        var id = randomInAnArray1(questions)
        questions.push(id);

        var answers = [id];
        answers.push(randomInAnArray(answers));
        answers.push(randomInAnArray(answers));

        answers.sort(function() {
            return Math.random() > 0.5
        });

        var question = {};
        question.id = id;
        question.opt_1 = answers[0].toString();
        question.opt_2 = answers[1].toString();
        question.opt_3 = answers[2].toString();

        game.push(question);
    }
    
    return {game: game};
};

var randomInAnArray = function(list) {
    var numQuestions = 7;
    var number = Math.floor(Math.random() * numQuestions);

    while (list.indexOf(number) > -1 || number ===0) {
        console.log(number);
        number = Math.floor(Math.random() * numQuestions);
    }
    return number;
};

var randomInAnArray1 = function(list) {
    var numQuestions = 7;
    var number = Math.floor(Math.random() * numQuestions);

    while (list.indexOf(number) > -1 || number ===0 ) {
        console.log(number);
        number = Math.floor(Math.random() * numQuestions);
    }
    return number;
};
