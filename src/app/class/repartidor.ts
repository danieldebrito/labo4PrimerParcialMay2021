import { Pais } from "./pais";

export class Repartidor {
    constructor(
        public id?: string,
        public nombre?: string,
        public edad?: number,
        public dni?: number,
        public capacidad?: number,
        public paisOrigen?: Pais,
        public unidad?: boolean,
    ) { }
}