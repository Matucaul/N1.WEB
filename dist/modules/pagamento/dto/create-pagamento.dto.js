"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePagamentoDto {
    pedidoId;
    valorTotal;
    metodo;
    status;
    dataPagamento;
}
exports.CreatePagamentoDto = CreatePagamentoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePagamentoDto.prototype, "pedidoId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePagamentoDto.prototype, "valorTotal", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['cartao', 'pix', 'boleto', 'dinheiro']),
    __metadata("design:type", String)
], CreatePagamentoDto.prototype, "metodo", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['pendente', 'pago', 'cancelado']),
    __metadata("design:type", String)
], CreatePagamentoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePagamentoDto.prototype, "dataPagamento", void 0);
//# sourceMappingURL=create-pagamento.dto.js.map