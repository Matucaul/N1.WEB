"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const produto_module_1 = require("./modules/produto/produto.module");
const cliente_module_1 = require("./modules/cliente/cliente.module");
const entregador_module_1 = require("./modules/entregador/entregador.module");
const fornecedor_module_1 = require("./modules/fornecedor/fornecedor.module");
const categoria_module_1 = require("./modules/categoria/categoria.module");
const administrador_module_1 = require("./modules/administrador/administrador.module");
const pedido_module_1 = require("./modules/pedido/pedido.module");
const endereco_module_1 = require("./modules/endereco/endereco.module");
const avaliacao_module_1 = require("./modules/avaliacao/avaliacao.module");
const pagamento_module_1 = require("./modules/pagamento/pagamento.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            produto_module_1.ProdutoModule,
            cliente_module_1.ClienteModule,
            entregador_module_1.EntregadorModule,
            fornecedor_module_1.FornecedorModule,
            categoria_module_1.CategoriaModule,
            administrador_module_1.AdministradorModule,
            pedido_module_1.PedidoModule,
            endereco_module_1.EnderecoModule,
            avaliacao_module_1.AvaliacaoModule,
            pagamento_module_1.PagamentoModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map