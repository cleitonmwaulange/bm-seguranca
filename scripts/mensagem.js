
function enviarWhatsApp(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    
    var numero = "+244974129329";
    var texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    
    var url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
}