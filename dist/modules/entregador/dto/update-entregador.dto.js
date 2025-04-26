"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntregadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_entregador_dto_1 = require("./create-entregador.dto");
class UpdateEntregadorDto extends (0, mapped_types_1.PartialType)(create_entregador_dto_1.CreateEntregadorDto) {
}
exports.UpdateEntregadorDto = UpdateEntregadorDto;
//# sourceMappingURL=update-entregador.dto.js.map