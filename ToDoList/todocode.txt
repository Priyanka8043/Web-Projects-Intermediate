const input=document.getElementById("inputid");
const list=document.getElementById("list-container");



function addtask(){
    if(input.value===""){       //**value**  if onclick "input.value" is nothing.
        alert("Write a task");
    }
    else{
        let li=document.createElement("li");   //creating li
        li.innerHTML=input.value;           //adding text to li,that is innerhtml--that is input
        list.appendChild(li);         //to display li--using list properties or as list we defined.
        //list jashi define keli ahe tasa display kara "li" la.

        let span=document.createElement("span");  //created span
        span.innerHTML="✖";    //stored a cross in innerhtml
        li.appendChild(span);  //li madhe append kara or display kara span.


    }

    input.value="";   //after adding a task it should not be displayed in input box.
    savedata();
};


list.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){                //if clicked element is li
        e.target.classList.toggle("checked");   //as per "checked" defined in css.
        savedata();
    }
    else if(e.target.tagName==="SPAN"){         //check capital letters.
        e.target.parentElement.remove();
        savedata();
    }

    
},false);


//To store previously written data
function savedata(){   //called 3 times above.
    localStorage.setItem("data",list.innerHTML);  //data is name given and what we want to store is next parameter.

}

// To display data when we open site again.
function showtask(){
    list.innerHTML=localStorage.getItem("data");
}
showtask();


