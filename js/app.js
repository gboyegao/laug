
var app = new Vue({
    el: '#app',
    data:{ 
      quiz:quiz,
      // Stores current score 
      score:0,  
      // Store current question index
      questionIndex: 0,
      // An array initialized with "false" values for each question
      // It means: "did the user answered correctly to the question n?" "no".
      userResponses:[]
        },        
        // The view will trigger these methods on click
        methods: {
          // Go to next question
          next: function() {
            if (this.userResponses[this.questionIndex] === this.quiz.questions[this.questionIndex].answer){
                this.score++
                this.questionIndex++
            }
            else{
                this.questionIndex++;   
            }
          },
          // Go to previous question
          prev: function() {
            this.score--  
            this.questionIndex--;
          },
          // Return "true" count in userResponses
          score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
          }
        }
});
