const arrayAcordeon =  Array.from(document.getElementsByClassName("acordeon"));

arrayAcordeon.forEach(a => {
    a.addEventListener("click", function(){
        this.classList.toggle("selecionado");
        const painel = this.nextElementSibling;
        let span = this.children;
        span = span[0].children;
        span = span[0];
        if(painel.style.maxHeight){
            painel.style.maxHeight = null;
            span.classList.add("fa-plus");
            span.classList.remove("fa-minus");
        }else{
            painel.style.maxHeight = painel.scrollHeight+"px";
            span.classList.remove("fa-plus");
            span.classList.add("fa-minus");
        }
    })
});

// ANO ATUAL


let anoAtual = new Date;
anoAtual = anoAtual.getFullYear();


let data = document.getElementById("current_year");
data.innerText = anoAtual;


// MODAL DEPOIMENTOS

function abrirModal(img){
    document.getElementsByClassName("modal")[0].style.display = "block";
    let src = img.src;
    document.getElementById("imagem-modal").src = src;
}
function fecharModal(){
    document.getElementsByClassName("modal")[0].style.display = "none";
}

// MODAL VIDEOS

function abrirVideo(video){
    document.getElementsByClassName("modal-video")[0].style.display = "block";
    let src = video.src;
    document.getElementById("video-modal").src = src;
}
function fecharVideo(){
    document.getElementsByClassName("modal-video")[0].style.display = "none";
    document.getElementById("video-modal").src = "";
}

// Solicitar orçamento

function orcamento(){
    window.open("https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5521980178207%26text%3DOl%25C3%25A1%252C%2Bgostaria%2Bde%2Bfazer%2Bum%2Bor%25C3%25A7amento.&e=ATNDiZbG-4w-dJ-bty5GoOFqumm3M1R0vWRQQ_HTni5ezuoUZMadOHOyQlwVvXqFQpd_iwqTVEIOQXrJzUTlBEA&s=1");
}