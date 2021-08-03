const arrayAcordeon =  Array.from(document.getElementsByClassName("acordeon"));

arrayAcordeon.forEach(a => {
    a.addEventListener("click", function(){
        this.classList.toggle("selecionado");
        const painel = this.nextElementSibling;
        let span = this.children;
        span = span[0];
        span = span.children;
        if(painel.style.maxHeight){
            painel.style.maxHeight = null;
        }else{
            painel.style.maxHeight = painel.scrollHeight+"px";
        }
    })
});


let anoAtual = new Date;
anoAtual = anoAtual.getFullYear();


let data = document.getElementById("current_year");
data.innerText = anoAtual;