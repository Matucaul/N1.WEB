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
exports.Administrador = exports.NivelAcesso = void 0;
const typeorm_1 = require("typeorm");
const nanoid_1 = require("nanoid");
var NivelAcesso;
(function (NivelAcesso) {
    NivelAcesso["GERENTE"] = "gerente";
    NivelAcesso["SUPORTE"] = "suporte";
    NivelAcesso["FINANCEIRO"] = "financeiro";
})(NivelAcesso || (exports.NivelAcesso = NivelAcesso = {}));
let Administrador = class Administrador {
    id;
    nome;
    email;
    senha;
    nivelAcesso;
    generateId() {
        this.id = `dev_${(0, nanoid_1.nanoid)()}`;
    }
};
exports.Administrador = Administrador;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Administrador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Administrador.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Administrador.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Administrador.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        enum: NivelAcesso,
        default: NivelAcesso.SUPORTE,
    }),
    __metadata("design:type", String)
], Administrador.prototype, "nivelAcesso", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Administrador.prototype, "generateId", null);
exports.Administrador = Administrador = __decorate([
    (0, typeorm_1.Entity)('administrador')
], Administrador);
//# sourceMappingURL=administrador.entity.js.map