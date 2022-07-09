/*document.addEventListener('DOMContentLoaded',()=>{
    const pic = document.querySelector("img");
    pic.addEventListener('click',()=>{
        pic.classList.toggle('round');
    })
})*/

/*document.addEventListener('DOMContentLoaded',()=>{
        const list=document.createElement('ul');
        const li1=document.createElement('li');
        li1.textContent='one';
        const li2=li1.cloneNode(true);
        li2.textContent='two'
        list.appendChild(li1);
        list.appendChild(li2);
        document.body.appendChild(list);
        const list2=list.cloneNode(true);
        document.body.appendChild(list2);


})*/
/*function hello(){
    let x=1;
    return x;

}

document.addEventListener('DOMContentLoaded',()=>{
    document.write(hello());
})
*/

/*document.addEventListener('DOMContentLoaded',()=>{
    const para=`<h1>How are you !</h1>`;
    const frag=document.createRange().createContextualFragment(para);
    frag.classList.add('temp');
    document.body.appendChild(frag);
})*/

/*document.addEventListener('DOMContentLoaded',()=>{
    const button=document.createElement('button');
    button.id="b1";
    button.textContent='Click Me';
    button.classList.add('add');
    const heading=document.querySelector('h1');
    heading.insertAdjacentElement('afterend',button);
    button.addEventListener('click',()=>{
        if(button.classList.contains('add'))
        {
            const heading=document.querySelector('h1');
            heading.remove();
            button.classList.toggle('remove');
            button.classList.remove('add');
        }
        else if(button.classList.contains('remove'))
        {
            const heading=document.createElement('h1');
            heading.textContent='Hello there';
            button.insertAdjacentElement('beforebegin',heading);
            button.classList.toggle('add');
            button.classList.remove('remove');
        }
    })

})*/

/*
function handle(event){
    //console.log(event.target.dataset);
    console.log(event.target);
    console.log(event.currentTarget);
}
document.addEventListener('DOMContentLoaded',()=>{
    const buttons=document.querySelectorAll('button.buy');
    buttons.forEach(button=>button.addEventListener('click',handle));
})*/

/*
document.addEventListener('DOMContentLoaded',()=>{
    document.addEventListener('click',()=>{
        console.log('You clicked on window');
    })
    const photo=document.querySelector('.photo');
    photo.addEventListener('click',(event)=>{
        console.log('You clicked on photo');
        event.stopPropagation();

    })
})
*/

document.addEventListener('DOMContentLoaded',()=>{
    const a=document.querySelector('.mk');
    a.addEventListener('click',(event)=>{
        const shouldChangePage=confirm("Do you wish to proceed");
        if(!shouldChangePage)
        {
            event.preventDefault();
        }
        console.log(shouldChangePage);
    })
})
