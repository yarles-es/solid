import ClienteController from "./controller/ClienteController";
import Cliente from "./entities/Cliente";
import InMemoryRepository from "./repositories/InMemoryRepository";
import PostgresRepository from "./repositories/PostgresRepository";

const inMemoryRepository = new InMemoryRepository();
const postgresRepository = new PostgresRepository();
const clienteController = new ClienteController(inMemoryRepository);

const cliente1 = new Cliente(0, "João", "joao@mail.com");
const cliente2 = new Cliente(0, "Kleber", "kleber@mail.com");

clienteController.adicionaCliente(cliente1);
clienteController.adicionaCliente(cliente2);

console.log(clienteController.listaClientes());
