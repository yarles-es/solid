class Cozinheiro {
  cozinharPratoPrincipal() {
    console.log("Preparando o prato principal");
  }

  prepararSobremesa() {
    console.log("Fazendo as sobremesas...");
  }
}

class Garcom {
  servirBebidas() {
    console.log("Servindo as bebidas...");
  }

  anotarPedido() {
    console.log("Anotando o pedido...");
  }
}

class Recepcionista {
  organizarMesas() {
    console.log("Organizando as mesas...");
  }
}

class AuxiliarLimpeza {
  constructor() {}
  limpar() {
    console.log("Limpando o local...");
  }
}

class Restaurante {
  private cozinheiro: Cozinheiro;
  private garcom: Garcom;
  private auxiliarLimpeza: AuxiliarLimpeza;
  private recepcionista: Recepcionista;

  constructor() {
    this.cozinheiro = new Cozinheiro();
    this.garcom = new Garcom();
    this.auxiliarLimpeza = new AuxiliarLimpeza();
    this.recepcionista = new Recepcionista();
  }

  iniciar() {
    this.cozinheiro.cozinharPratoPrincipal();
    this.cozinheiro.prepararSobremesa();
    this.garcom.anotarPedido();
    this.garcom.servirBebidas();
    this.recepcionista.organizarMesas();
    this.auxiliarLimpeza.limpar();
    console.log("Restaurante está pronto para receber os clientes!");
  }
}

const restaurante = new Restaurante();
restaurante.iniciar();
