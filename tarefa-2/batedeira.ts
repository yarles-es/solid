interface Batedeira {
  bater(): void;
}

class BatedeiraGlobo implements Batedeira {
  bater(): void {
    console.log("Batedeira Globo: Batendo os ingredientes...");
  }
}

class BatedeiraLeque implements Batedeira {
  bater(): void {
    console.log("Batedeira Leque: Batendo os ingredientes...");
  }
}

class BatedeiraGancho implements Batedeira {
  bater(): void {
    console.log("Batedeira Gancho: Batendo os ingredientes...");
  }
}

class BatedeiraGlobal {
  private acessorio: Batedeira;

  constructor(acessorio: Batedeira) {
    this.acessorio = acessorio;
  }

  bater(): void {
    this.acessorio.bater();
  }
}

function main() {
  const batedeiraGlobo = new BatedeiraGlobal(new BatedeiraGlobo());
  const batedeiraLeque = new BatedeiraGlobal(new BatedeiraLeque());
  const batedeiraGancho = new BatedeiraGlobal(new BatedeiraGancho());

  batedeiraGlobo.bater();
  batedeiraLeque.bater();
  batedeiraGancho.bater();
}
