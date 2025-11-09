// Função para carregar o footer em todas as páginas
async function loadFooter() {
    try {
        // Carrega o CSS do footer primeiro
        await loadCSS('estilos/footer.css');
        
        // Depois carrega o HTML do footer
        const response = await fetch('assets/footer.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar o footer');
        }
        
        const html = await response.text();
        document.getElementById('footer-container').innerHTML = html;
        
    } catch (error) {
        console.error('Erro ao carregar o footer:', error);
        document.getElementById('footer-container').innerHTML = `
            <footer style="padding: 20px; text-align: center; border-top: 1px solid #ccc;">
                <p>Erro ao carregar o rodapé.</p>
            </footer>
        `;
    }
}

// Carrega o footer quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', loadFooter);