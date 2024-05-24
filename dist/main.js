"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
var _chalk = _interopRequireDefault(require("chalk"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cliente = new _cliente["default"]('Juan Perez');
var impuestos = new _impuestos["default"](100000, 20000);
cliente.impuesto = impuestos;
console.log(_chalk["default"].green("Cliente: ".concat(cliente.nombre)));
console.log(_chalk["default"].blue("Monto Bruto Anual: ".concat(impuestos.montoBrutoAnual)));
console.log(_chalk["default"].blue("Deducciones: ".concat(impuestos.deducciones)));
console.log(_chalk["default"].red("Impuesto calculado: ".concat(cliente.calcularImpuesto())));