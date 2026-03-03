// Função chamada quando alguém clica em "Comprar"
function comprar(produto = "") {
    // Seu link do WhatsApp
    const linkWhatsApp = "https://wa.me/message/VEMCH7P23ZUGE1";
    
    // Se quiser, você pode adicionar o nome do produto como mensagem extra
    // Aqui só abrimos o link direto
    window.open(linkWhatsApp, "_blank"); // Abre em nova aba
}

// Função para comprar produtos
function comprar(produto) {
    const numeroWhatsApp = "5573988497971"; // Seu número
    const mensagem = `Olá! Gostaria de comprar o ${produto}.`;
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank"); // Abre o WhatsApp em nova aba
}
