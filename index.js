let touch = document.querySelectorAll('#one')[0];
let visual = document.querySelectorAll('.mobile')[0];
let visual2 = document.querySelectorAll('.visible')[0];

visual.onclick =()=>{
    if(visual2.style.left=="-100%"){
        visual2.style.left="0%"
    }else visual2.style.left="-100%"
}
visual2.onclick =()=>{
    if(visual2.style.left=="-100%"){
        visual2.style.left="0%"
    }else visual2.style.left="-100%"
}