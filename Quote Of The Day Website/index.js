
// https://api.quotable.io-->api link
// https://github.com/lukePeavey/quotable-->site

const apiurl="https://api.quotable.io/quotes/random"
const quote=document.getElementById("quote");
const author=document.getElementById("author");


//The Fetch API accesses resources across the network. You can make HTTP requests (using GET, POST and other methods), download, and upload files.response.json() is a method of the Response object that allows a "JSON object" to be extracted from the response. The method returns a promise, so you have to wait for the JSON: await response.json().


async function getquote(url){    
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);

    quote.innerHTML=data[0].content;
    author.innerHTML=data[0].author;


}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML,"--by"+author.innerHTML,"tweet-window","width=500,height=300");
}

getquote(apiurl);
