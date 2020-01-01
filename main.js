

function getdate()
{
    //now = this.getDateTimeNow("yyyy-mm-dd");
    document.getElementById("dt").innerHTML = Date();
}

function oover()
{
    document.getElementById("overout").innerHTML="На меня наехали";
}

function oout()
{
    document.getElementById("overout").innerHTML="Hello world!";
}


window.onload = function()
{
     //alert('О! Куда я пришел!');
    
    document.getElementById("overout").innerHTML="Hello world!"
    document.getElementById("dt").innerHTML="Мы вошли: "+Date();
}
