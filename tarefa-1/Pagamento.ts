import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {
  constructor(private servicoCalculaSalario: CalculaSalario) {}
  pagar(Colaborador: Colaborador) {
    const salarioColaborador = this.servicoCalculaSalario.calcular(
      Colaborador.cargo
    );
    Colaborador.saldo = salarioColaborador;
  }
}
