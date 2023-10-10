document.getElementById("toggleButton").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "100%" && sidebar.style.height ==="100%") {
        sidebar.style.width = "0";
        sidebar.style.height = "0";
    } else {
        sidebar.style.width = "100%";
        sidebar.style.height = "100%";
    }
});

function mostrarConteudo(pagina) {
    // Recupera a referência à div de conteúdo
    var conteudoDiv = document.getElementById('conteudo');

    // Use AJAX ou simplesmente defina o conteúdo com base no link selecionado
    if (pagina === 'pagina1') {
        conteudoDiv.innerHTML = '<h1>Página 1</h1><p>Conteúdo da Página 1.</p>';
        
    } else if (pagina === 'pagina2') {
        conteudoDiv.innerHTML = '<h1>Página 2</h1><p>Conteúdo da Página 2.</p>';
    }
    // Adicione mais condições para outros links conforme necessário
}