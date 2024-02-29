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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const DUser_1 = require("../../decorators/DUser");
const Private_1 = require("../../decorators/Private");
const auth_dto_1 = require("./auth.dto");
const auth_service_1 = require("./auth.service");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(signUpDto) {
        const accessToken = await this.authService.SignUp(signUpDto);
        return accessToken;
    }
    async LogIn(LogInDto) {
        const accessToken = await this.authService.LogIn(LogInDto);
        return accessToken;
    }
    logOut(user) {
        return this.authService.LogOut(user);
    }
    async refreshToken(user) {
        const accessToken = await this.authService.refreshToken(user);
        return accessToken;
    }
    async findUser(user) {
        return user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("/sign-up"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UsersAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)("log-in"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UsersAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "LogIn", null);
__decorate([
    (0, Private_1.Private)("user"),
    (0, common_1.Delete)("/log-out"),
    __param(0, (0, DUser_1.DUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logOut", null);
__decorate([
    (0, Private_1.Private)("user"),
    (0, common_1.Get)("refresh-token"),
    __param(0, (0, DUser_1.DUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, DUser_1.DUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map