// Função para verificar se a seção está visível
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animação ao rolar a página
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible'); // Adiciona a classe 'visible'
        }
    });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', handleScroll);

// Verifica a visibilidade das seções ao carregar a página
window.addEventListener('load', handleScroll);
