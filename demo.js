
function calcularSS(salarioBruto) {
    var cuotaSS;
    var cuotaMaximo = 45014.4;
    cuotaSS = salarioBruto * 0.0653;
    if (cuotaSS > cuotaMaximo) {
        cuotaSS = 45014.4
    }

    return cuotaSS
}

function calcularIRPF(salarioBruto) {
    var baseImponible = 0;
    baseImponible = salarioBruto - calcularSS(salarioBruto) - 2000;
    var baseCalculoIrpf = 0;
    baseCalculoIrpf = baseImponible - 5550;
    var irpf;

    if (baseCalculoIrpf <= 12450) {
        irpf = baseCalculoIrpf * 0.19
    } else if (baseCalculoIrpf <= 20200) {
        irpf = baseCalculoIrpf * 0.24
    } else if (baseCalculoIrpf <= 35200) {
        irpf = baseCalculoIrpf * 0.3
    } else if (baseCalculoIrpf <= 60000) {
        irpf = baseCalculoIrpf * 0.37
    } else if (baseCalculoIrpf > 60000) {
        irpf = baseCalculoIrpf * 0.45
    }
    return irpf
}

function calcularSalarioNeto(salarioBruto) {
    var totalImpuestos = calcularSS(salarioBruto) + calcularIRPF(salarioBruto)
    var salarioNeto = 0;
    salarioNeto = salarioBruto - totalImpuestos;
    return salarioNeto;
}

function netoMes14Pagas(bruto) {
    var netoMes14Pagas;
    netoMes14Pagas = calcularSalarioNeto(bruto) / 14;
    return netoMes14Pagas;

}
document.getElementById("calcular").addEventListener("click", function () {
    var bruto = document.getElementById("sueldo-bruto").value;
    var informe = calcularSS(bruto); calcularIRPF(bruto); calcularSalarioNeto(bruto); netoMes14Pagas(bruto);
    informe = document.getElementById("informe").innerHTML;
    document.getElementById("informe").innerHTML = `Cantidad destinada a Seguridad Social: ${calcularSS(bruto).toFixed(2)}
    €<br> Cantidad destinada a IRPF: ${calcularIRPF(bruto).toFixed(2)}
    €<br> Salario neto anual : ${calcularSalarioNeto(bruto).toFixed(2)}
    €<br> Salario neto mensual con 14 pagas: ${netoMes14Pagas(bruto).toFixed(2)} € `;
    return informe

}) 
