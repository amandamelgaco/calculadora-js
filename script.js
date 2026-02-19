function calcular(operador) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    // Validação de campos vazios
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }

    // Estrutura condicional
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Não é possível dividir por zero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida");
            return;
    }

    // Exibe resultado
    document.getElementById("resultado").innerText = 
        "Resultado: " + resultado;

    // Adiciona ao histórico
    adicionarHistorico(num1, operador, num2, resultado);
}

function adicionarHistorico(n1, op, n2, res) {
    let lista = document.getElementById("historico");
    let item = document.createElement("li");
    item.textContent = `${n1} ${op} ${n2} = ${res}`;
    lista.appendChild(item);

    alert("JavaScript está funcionando!");
}
