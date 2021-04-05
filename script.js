$(document).ready(function() {

$(".time").text(moment().format("dddd Do MMMM    - h[:]mma "))    
var timeEl = moment().format("k");
var rowTime = '';

// console.log(timeEl); test time logg

 $('.time-row-wrapper .row').each(function(){
   var rowTime = $(this).attr('data-time');
//    console.log(rowTime); test log
   $('textarea' ,this).val(localStorage.getItem(rowTime));

   if(timeEl > rowTime) {
     $('textarea', this).addClass('past');  
   }
   else if (timeEl == rowTime) {
    $('textarea', this).addClass('present');    
   }
   else {
    $('textarea', this).addClass('future');      
   }
 });
});

$("button").on("click", function () {
    var calendarEntry = $(this).parent('.row').attr('data-time');
    console.log(calendarEntry);
    var userInput = $(this).siblings('textarea').val();
    console.log(userInput);
    localStorage.setItem(calendarEntry, userInput);
})


