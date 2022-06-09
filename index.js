let checkbox = document.querySelector(".checker");
let btn = document.querySelectorAll(".btn")

checkbox.onclick = ()=>{

    if(checkbox.checked){
        document.body.classList.add('bg-dark');
        btn[0].classList.add('btn-click');
        btn[1].classList.add('btn-click');

    }
        else{
            document.body.classList.remove('bg-dark');
            btn[0].classList.remove('btn-click')
            btn[1].classList.remove('btn-click')
        }
};
