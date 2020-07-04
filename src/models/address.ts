export class Address {
    // "address": {
    //     "street": "Kulas Light",
    //     "suite": "Apt. 556",
    //     "city": "Gwenborough",
    //     "zipcode": "92998-3874",
    //     "geo": {
    //       "lat": "-37.3159",
    //       "lng": "81.1496"
    //     }
    //   },


    constructor(
        public street: string,
        public suit: string,
        public city: string,
        public zipCode: string
    ) { }
}