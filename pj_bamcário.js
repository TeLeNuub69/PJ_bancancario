let saldo = 0;
let extrato = "";
let numeroSaques = 0;
let limiteSaques = 3;

const limiteValorSaques = 500
while (true) {
    menu = prompt(`
    ================= M E N U =================
                                                [d] Déposito
                                                [s] Sacar
                                                [e] Extrato
                                                [q] Sair
    ==============================================
    `)

    if (menu == "d"){
    let deposito = parseFloat(prompt("digite o valor do deposito"))

    if (deposito > 0 ){
    saldo += deposito
    extrato +=  `Deposito de: R$${deposito}`
        alert(`Deposito de: R$${deposito} realizado`)
    }
    }else{
        alert("Deposito não efetuado")}
    

}
    
// }else if (menu == "s"){

// let saque = parseFloat(prompt("digite um valor para saque"))

//     if(saque >0 && saque <= limiteValorSaques){
//     numeroSaques < limiteSaques
//     saldo += saque
//     extrato -= saque 

  
//     alert(`saque de: R$${saque} efetuado`)
     
//     }else if (limiteSaques > 3)
//         alert ("!saque não efetuado!");

 
       

    



//DÉPOSITO= deve aceitar apenas depositos de valores positivos e todos os depositos devem ser armazenados e exibidos na oeraçao de extrato


//SAQUE= o sistema deve permitir apenas 3 saques diarios com limite maximo de R$500,00 por cada saque, caso o usuario nao tenha saldo  
//aparecera uma mensagem:informando a falta de saldo e todos os saques devem ser armazenados e exibidos na operaçao de extrato


//EXTRATO= deve listar todos os depositos e saques realizados, exibir o saldo atual, caso o extrato esteja em branco deve exibir a 
// mensagem:NÃO foram realizadas Movimentações.
//utilizar o formato  R$xxx.xx, exemplo 1500.45= R$1500.45

