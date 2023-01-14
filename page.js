let lapcompleted=0;
let count=document.getElementById('counter');
let enter=document.getElementById('number');
function incrementlap()
{
    lapcompleted=lapcompleted+1;
    count.innerText=lapcompleted;
}
function save()
{
enter.innerText += lapcompleted+ "-";
lapcompleted=0;
count.innerText=lapcompleted;
}
