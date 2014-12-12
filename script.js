var j = 1;
var k = 1;


$('#start').click(function(){
   var userSalary = $('#userInput').val();
    if (!($.isNumeric(userSalary))){
        alert("please enter a number");
    } else {
         $('.person_div').each(function() {
        $(this).fadeOut();
    });
        userSalary = Math.round(userSalary);
        var i = 1;
        while( i < 22) {
            var currentDiv = "#person_" + i;
            var salary1 = $('#salary' + i).html(); // gets value from richie rich
            var salary1Format = parseFloat(salary1.replace(/\$|,/g, '')); // removes characters so can compute
            var years1Calc = salary1Format / userSalary;
            
            if (Math.ceil(years1Calc) < 2){
            $('#years' + i).html(Math.ceil(years1Calc) + " year");
            } else {
                $('#years' + i).html(Math.ceil(years1Calc) + " years");
            }
            i += 1;   
                      }
        
            $('.person_div').each(function(j) {
            $(this).delay(300*(j+1)).fadeIn(500);
            });
          }
 
                        }
                 );



$('#close').click(function() {
    $('.popup').fadeOut();
});

$('#info').click(function() {
    $('.popup').fadeIn();
});



