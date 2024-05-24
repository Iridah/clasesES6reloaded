import Impuestos from './impuestos.js';

class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
    this._impuesto = null;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(impuesto) {
    if (impuesto instanceof Impuestos) {
      this._impuesto = impuesto;
    } else {
      throw new Error('Impuesto debe ser una instancia de la clase Impuestos');
    }
  }

  calcularImpuesto() {
    if (this._impuesto) {
      const { montoBrutoAnual, deducciones } = this._impuesto;
      return (montoBrutoAnual - deducciones) * 0.21;
    } else {
      throw new Error('No se ha asignado ningún impuesto al cliente');
    }
  }
}

export default Cliente;
