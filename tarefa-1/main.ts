import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";
import { Cargos } from "./enum/cargos";
import GerarRelatorio from "./GerarRelatorio";
import Pagamento from "./Pagamento";
import QuadroColaboradores from "./QuadroColaboradores";

const calculaSalario = new CalculaSalario();
const quadroColaboradores = new QuadroColaboradores();

const gerarRelatorio = new GerarRelatorio(
  quadroColaboradores.colaboradores,
  calculaSalario
);
const pagamento = new Pagamento(calculaSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratar(colaborador1);
quadroColaboradores.contratar(colaborador2);
quadroColaboradores.contratar(colaborador3);

console.log(gerarRelatorio.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);
