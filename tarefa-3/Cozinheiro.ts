class CozinheiroPai {
  fazerLanche(): string {
    return "X-Burguer simples";
  }
}

class CozinheiraFilha extends CozinheiroPai {
  constructor() {
    super();
  }

  fazerSuco(): string {
    return "Preparando um suco bem refrescante";
  }
}

const cozinheiroPai = new CozinheiroPai();
console.log(cozinheiroPai.fazerLanche()); // Saída: X-Burguer simples

const cozinheiraFilha = new CozinheiraFilha();
console.log(cozinheiraFilha.fazerLanche()); //Erro!
