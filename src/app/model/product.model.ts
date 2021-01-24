export class Product {

    constructor(
        public id: number | string,
        public name: string,
        public category: string,
        public description: string,
        public price: number,
        public count: number
    ) { }
}
