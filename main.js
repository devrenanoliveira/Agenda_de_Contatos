const form = document.getElementById('form-contatos');
const nomes = []; // array criado para armazenar todos os nomes incluidos pelo usuário //
const telefones = []; // array criado para armazenar todos os telefones incluídos pelo usuário //
const emails = []; // array criado para armazenar todos os e-mails incluídos pelo usuário //

let linhas = ''; // colocando a variável aqui, tornamos ela global, ou seja, não vai mais substituir toda vez que outro elemento for incluído na tabela //

form.addEventListener("submit", function(e) { //criando o evento de submit e remover o comportamento do formulário que atualiza a tela sempre que recebe algum valor//
    e.preventDefault();

    adicionaLinha(); 
    atualizaTabela();
});

function adicionaLinha() { // a lógica de adicionar uma linha vai ficar dentro dessa função //
    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelefoneContato = document.getElementById("tel-contato");
    const inputEmailContato = document.getElementById("email-contato");

    if (nomes.includes(inputNomeContato.value)) { // o "if" nesse caso serve para garantir que os nomes repetidos não sejam incluídas por engano //
        alert(`O nome: ${inputNomeContato.value} já foi inserido.`);
    } else {
        nomes.push(inputNomeContato.value); // fazendo um push do array criado (nomes[]), ou seja, push é o mesmo que dizer que está adicionando algo ao array //
        telefones.push(parseInt(inputTelefoneContato.value)); // fazendo um push do array criado (telefones[]),ou seja, push é o mesmo que dizer que está adicionando algo ao array //
        emails.push(inputEmailContato.value); // fazendo um push do array criado (emails[]),ou seja, push é o mesmo que dizer que está adicionando algo ao array //

        // código abaixo serve para ir adicionando linhas na tabela com as informações que o usuário coloca no formulário //

        let linha = '<tr>'; // inicia a linha da tabela //
        linha += `<td>${inputNomeContato.value}</td>`; // "linha +=" é o mesmo que concatenar. E o código completo é para adicionar as informações nas colunas da tabela//
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += '</tr>'; //finaliza a linha da tabela //

        linhas += linha;

        inputNomeContato.value = ''; // limpa o campo do formulário após adicionar o conteúdo //
        inputTelefoneContato.value = ''; // limpa o campo do formulário após adicionar o conteúdo //
        inputEmailContato.value = ''; // limpa o campo do formulário após adicionar o conteúdo //
    }
}

function atualizaTabela() { //função responsável por atualizar o conteúdo da tabela //
    const corpoTabela = document.querySelector('tbody'); // para colocar todo o conteúdo acima no corpo da tabela, recuperamos o corpo dela primeiro (tbody) //
    corpoTabela.innerHTML = linhas; // insere o conteúdo na tag usando o "innerHTML" //
}