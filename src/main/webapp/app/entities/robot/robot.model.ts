import { BaseEntity } from './../../shared';

export class Robot implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public price?: number,
        public soldOut?: boolean,
    ) {
    }
}
