import Cliente from "../../entities/Cliente";

export interface IClienteRepository {
  adicionaCliente(cliente: Cliente): void;
  listaClientes(): Cliente[];
}
