
const btn = document.getElementsByClassName('button1');
const n=Array.from(btn);
for(let i=0;i<n.length;i++)
{
n[i].addEventListener('click', ()=> {
    const backgroundColor = n[i].style.backgroundColor;
    if(backgroundColor==='red')
    document.body.style.backgroundColor = 'red';
    else if(backgroundColor==='blue')
     document.body.style.backgroundColor = 'blue';
    else if(backgroundColor==='pink')
    document.body.style.backgroundColor = 'pink';
    else if(backgroundColor==='orange')
    document.body.style.backgroundColor = 'orange';
});
}
