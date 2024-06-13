document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      const documento = document.getElementById('documento').value;
      const paginas = document.getElementById('paginas').value;
      const tempo = document.getElementById('tempo').value;
      const imagens = document.getElementById('imagens').value;
  
      const dados = {
        documento,
        paginas,
        tempo,
        imagens
      };
  
      // Armazena os dados no localStorage
      localStorage.setItem('formulario', JSON.stringify(dados));
  
    //   return false; // impede que o formulário seja submetido ao servidor
    });

    if (documento === '' || paginas === '' || tempo === '' || imagens === '') {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
  });