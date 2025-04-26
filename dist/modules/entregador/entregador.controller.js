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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntregadorController = void 0;
const common_1 = require("@nestjs/common");
const entregador_service_1 = require("./entregador.service");
const create_entregador_dto_1 = require("./dto/create-entregador.dto");
const update_entregador_dto_1 = require("./dto/update-entregador.dto");
let EntregadorController = class EntregadorController {
    entregadorService;
    constructor(entregadorService) {
        this.entregadorService = entregadorService;
    }
    create(createEntregadorDto) {
        return this.entregadorService.create(createEntregadorDto);
    }
    findAll() {
        return this.entregadorService.findAll();
    }
    findOne(id) {
        return this.entregadorService.findOne(+id);
    }
    update(id, updateEntregadorDto) {
        return this.entregadorService.update(+id, updateEntregadorDto);
    }
    remove(id) {
        return this.entregadorService.remove(+id);
    }
};
exports.EntregadorController = EntregadorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entregador_dto_1.CreateEntregadorDto]),
    __metadata("design:returntype", void 0)
], EntregadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntregadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntregadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entregador_dto_1.UpdateEntregadorDto]),
    __metadata("design:returntype", void 0)
], EntregadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntregadorController.prototype, "remove", null);
exports.EntregadorController = EntregadorController = __decorate([
    (0, common_1.Controller)('entregador'),
    __metadata("design:paramtypes", [entregador_service_1.EntregadorService])
], EntregadorController);
//# sourceMappingURL=entregador.controller.js.map