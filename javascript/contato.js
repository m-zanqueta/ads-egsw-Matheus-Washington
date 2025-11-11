document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você normalmente enviaria os dados para um servidor
    // Por enquanto, apenas exibiremos um alerta
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Limpar o formulário
    this.reset();
});