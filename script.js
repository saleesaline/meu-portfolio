// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE ALTERNÂNCIA DE TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        // Alterna entre as classes dark-theme e light-theme
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
        }
    });

    // --- VALIDAÇÃO DE FORMULÁRIO ---
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real do formulário

        // Captura dos valores
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Regex simples para validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação obrigatória
        if (nome === "" || email === "" || mensagem === "") {
            feedback.style.color = "red";
            feedback.textContent = "Por favor, preencha todos os campos.";
            return;
        }

        if (!emailRegex.test(email)) {
            feedback.style.color = "red";
            feedback.textContent = "Por favor, insira um e-mail válido.";
            return;
        }

        // Simulação de envio bem-sucedido
        feedback.style.color = "green";
        feedback.textContent = "Mensagem enviada com sucesso! (Simulação)";
        
        // Alerta conforme solicitado no requisito
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada.");

        // Limpa o formulário após o envio
        contactForm.reset();
    });
});