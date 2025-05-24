interface Cozinheiro {
  fazerPratoPrincipal(): string;
}

interface Confeiteiro {
  fazerSobremesa(): string;
}

class CozinheiroChefe implements Cozinheiro, Confeiteiro {
  fazerPratoPrincipal(): string {
    return "Fazendo prato principal: Risoto de Camarão";
  }

  fazerSobremesa(): string {
    return "Fazendo sobremesa: Tiramisu";
  }
}

class ConfeiteiroApenasDoces implements Confeiteiro {
  fazerSobremesa(): string {
    return "Fazendo sobremesa: Bolo de Chocolate";
  }
}
