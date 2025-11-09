// Função para carregar CSS dinamicamente
function loadCSS(href) {
    return new Promise((resolve, reject) => {
        // Verifica se o CSS já foi carregado
        const existingLinks = document.querySelectorAll(`link[href="${href}"]`);
        if (existingLinks.length > 0) {
            resolve();
            return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}

// Função para carregar o header em todas as páginas
async function loadHeader() {
    try {
        // Carrega o CSS do header primeiro
        await loadCSS('../estilos/header.css');
        
        // Depois carrega o HTML do header
        const response = await fetch('../assets/header.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar o header');
        }
        
        const html = await response.text();
        document.getElementById('header-container').innerHTML = html;
        
    } catch (error) {
        console.error('Erro ao carregar o header:', error);
        document.getElementById('header-container').innerHTML = `
            <header style="padding: 20px; text-align: center; border-bottom: 1px solid #ccc;">
                <p>Erro ao carregar o menu. <a href="index.html">Clique aqui para voltar à página inicial</a></p>
            </header>
        `;
    }
}

// Carrega o header quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', loadHeader);