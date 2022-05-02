import {HasFormatters} from '../Interfaces/hasFormatter.js'

export class Invoice implements HasFormatters{
    

    constructor(
        public client: string,
        readonly details: string,
        private amount: number
        ){}

    form(){
        return `${this.client} owes £${this.amount} for ${this.details}`
    }

}