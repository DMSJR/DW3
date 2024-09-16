

const calculadora = (req, res) => (async () => {
    const { num1, num2, operacao } = req.body
    let resultado;
    switch (operacao) {
        case '+':
            resultado = fsoma(num1, num2);
            break;
        case '-':
            resultado = fsubtracao(num1, num2);
            break;
        case '*':
            resultado = fmultiplicacao(num1, num2);
            break;
        case '/':
            if (num2 == 0) {
                return res.status(400).json({ error: 'Operação inválida' });
            }
            resultado = fdivisao(num1, num2);
            break;
        default:
            return res.status(400).json({ error: 'Operação inválida' });

    }

    res.json({ status: "ok", "resultado": resultado });
})();

function fsoma(num1, num2) {
    return (num1 + num2);
}
function fsubtracao(num1, num2) {
    return (num1 - num2);
}
function fmultiplicacao(num1, num2) {
    return (num1 * num2);
}
function fdivisao(num1, num2) {
    return (num1 / num2);
}
module.exports = {
    calculadora

}