function getdate()
{
    //now = this.getDateTimeNow("yyyy-mm-dd");
    document.getElementById("dt").innerHTML = Date();
}

/*наезд курсора мыши*/
function oover()
{
    document.getElementById("overout").innerHTML="На меня наехали";
}

/*съезд курсора мыши*/
function oout()
{
    document.getElementById("overout").innerHTML="Hello world!";
}


/*вход на сайт - открытие окна*/
window.onload = function()
{
     //alert('О! Куда я пришел!');
    
    document.getElementById("overout").innerHTML="Hello world!"
    document.getElementById("dt").innerHTML="Мы вошли: "+Date();
}

/*функция и событие загрузки страницы*/
function ready()
{
    alert("загрузились");
}

document.addEventListener("DOMContentLoaded", ready);

/*событие перед уходом со страницы*/
window.onbeforeunload = function() {
  console.log('уходим!');
};