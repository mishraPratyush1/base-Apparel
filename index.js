var input=$('input[type="text"]');

var icon=$('i');
var exp=new RegExp('.+@.+\.+.+');
icon.on('click', function hey() 
{

if(input.val() === "" || !input.val().includes('@'))
{
    $('i').append('<br>');
    $('p.validate').append('<p>Please type Valid Email Address</p>');
    input.val("");
    
}
else if(input.val().match(exp))
{
    $('p.validate').text("");
    $('p.validate').append('<p>   we will let you know!</p>');
    input.val("");
}

});




