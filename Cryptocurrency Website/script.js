//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd---->api
//https://www.coingecko.com/en/api/documentation-->website

var bitcoin=document.getElementById("bit");
var ethereum=document.getElementById("eth");
var dogecoin=document.getElementById("doge");


var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}                                             

}//syntax from AJAX

$.ajax(settings).done(function(response){
    bitcoin.innerHTML=response.bitcoin.usd;
    ethereum.innerHTML=response.ethereum.usd;    //studying hierarchy of arrays of data from console/postman.
    dogecoin.innerHTML=response.dogecoin.usd;

})

// AJAX is a developer's dream, because you can:

// Update a web page without reloading the page
// Request data from a server - after the page has loaded
// Receive data from a server - after the page has loaded
// Send data to a server - in the background
// AJAX is an acronym for Asynchronous JavaScript and XML. It is a group of inter-related technologies like JavaScript, DOM, XML, HTML/XHTML, CSS, XMLHttpRequest etc.

// AJAX allows you to send and receive data asynchronously without reloading the web page. So it is fast.

// AJAX allows you to send only important information to the server not the entire page. So only valuable data from the client side is routed to the server side. It makes your application interactive and faster.