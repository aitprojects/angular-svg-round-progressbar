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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var round_progress_component_1 = require('./round-progress.component');
var round_progress_service_1 = require('./round-progress.service');
var round_progress_ease_1 = require('./round-progress.ease');
var round_progress_config_1 = require('./round-progress.config');
var RoundProgressModule = (function () {
    function RoundProgressModule() {
    }
    RoundProgressModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [round_progress_component_1.RoundProgressComponent],
            exports: [round_progress_component_1.RoundProgressComponent],
            providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.RoundProgressConfig]
        }), 
        __metadata('design:paramtypes', [])
    ], RoundProgressModule);
    return RoundProgressModule;
}());
exports.RoundProgressModule = RoundProgressModule;
;
var round_progress_component_2 = require('./round-progress.component');
exports.RoundProgressComponent = round_progress_component_2.RoundProgressComponent;
var round_progress_service_2 = require('./round-progress.service');
exports.RoundProgressService = round_progress_service_2.RoundProgressService;
var round_progress_ease_2 = require('./round-progress.ease');
exports.RoundProgressEase = round_progress_ease_2.RoundProgressEase;
var round_progress_config_2 = require('./round-progress.config');
exports.RoundProgressConfig = round_progress_config_2.RoundProgressConfig;

//# sourceMappingURL=round-progress.js.map
