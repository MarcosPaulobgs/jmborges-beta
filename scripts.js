// ======================= FUNÇÃO COMPRAR =======================
function comprar(produto) {
    const numeroWhatsApp = "5573988497971"; // Seu número
    const mensagem = `Olá! Gostaria de comprar o ${produto}.`;
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank"); // Abre WhatsApp em nova aba
}

// ======================= MENU MOBILE =======================
const menuToggle = document.getElementById('menu-toggle'); // Botão dos 3 traços
const navMenu = document.getElementById('nav-menu');       // Menu de navegação

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // alterna visibilidade do menu
});
