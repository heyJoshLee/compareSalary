

$('button').click(function(){
   var userSalary = $('#userInput').val();
    if (!($.isNumeric(userSalary))){
        alert("please enter a number");
    } else {
        userSalary = Math.round(userSalary);
        
        
        var i = 1;
        
        while( i < 7) {
            alert(userSalary);
            var salary1 = $('#salary' + i).html(); // gets value from richie rich
            var salary1Format = parseFloat(salary1.replace(/\$|,/g, '')); // removes characters so can compute
            var years1Calc = salary1Format / userSalary;
            $('#years' + i).html(Math.ceil(years1Calc) + " years");
            i += 1;
        }
        
        
        
        
        
    }
});

