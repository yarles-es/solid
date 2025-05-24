interface Funcionario {
  nome: string;
  cargaHoraria: number;
  trabalha(): void;
}

interface FuncionarioEfetivo extends Funcionario {
  salario: number;
  calculaSalarioLiquido(): number;
  calculaParticipacaoDeLucros(lucro: number): number;
}

interface FuncionarioVoluntario extends Funcionario {
  escreveRelatorio(): void;
}

class FuncionarioEfetivo implements FuncionarioEfetivo {
  constructor(nome: string, cargaHoraria: number, salario: number) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.salario = salario;
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`
    );
  }

  calculaSalarioLiquido(): number {
    const TAXA_DESCONTO = 0.2;
    const desconto = this.salario * TAXA_DESCONTO;
    const salarioLiquido = this.salario - desconto;
    return salarioLiquido;
  }

  calculaParticipacaoDeLucros(lucro: number): number {
    const participacao = this.salario * lucro;
    return participacao;
  }
}

class FuncionarioVoluntario implements FuncionarioVoluntario {
  orientador: Funcionario;

  constructor(
    nome: string,
    cargaHorariaExtensao: number,
    funcionarioEfetivo: Funcionario
  ) {
    this.nome = nome;
    this.cargaHoraria = cargaHorariaExtensao;
    this.orientador = funcionarioEfetivo;
  }

  escreveRelatorio(): void {
    console.log(
      `Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`
    );
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`
    );
  }
}

class Pesquisador implements FuncionarioVoluntario {
  constructor(
    public nome: string,
    public cargaHoraria: number,
    public orientador: Funcionario
  ) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.orientador = orientador;
  }

  escreveRelatorio(): void {
    console.log(
      `Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`
    );
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`
    );
  }
}

const funcionarioEfetivo = new FuncionarioEfetivo("João", 40, 2400);
const funcionarioVoluntario = new FuncionarioVoluntario(
  "Enzo",
  20,
  funcionarioEfetivo
);
const pesquisador = new Pesquisador("Diego", 20, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log(
  "salário com PL:",
  funcionarioEfetivo.calculaParticipacaoDeLucros(2.5),
  "\n"
);

//Voluntário
console.log("nome:", funcionarioVoluntario.nome);
console.log("carga horária:", funcionarioVoluntario.cargaHoraria);
console.log("Orientador:", funcionarioVoluntario.orientador.nome);
console.log(funcionarioVoluntario.escreveRelatorio() + "\n");

// Pesquisador
console.log("nome:", pesquisador.nome);
console.log("carga horária:", pesquisador.cargaHoraria);
console.log("Orientador:", pesquisador.orientador.nome);
pesquisador.escreveRelatorio();
pesquisador.trabalha();
