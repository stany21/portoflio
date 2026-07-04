var text=document.querySelector("#title_01");
var  txt="Iam  A Junior Web Developer";

var index=1;






runText();


function runText(){
    text.innerText=txt.slice(0,index);
            index++;
    if(index>text.length){
        index=1;
    }

   
setTimeout(runText,300); 
}
