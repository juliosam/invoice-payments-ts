import {HasFormatters} from '../Interfaces/hasFormatter.js'

export class Payment implements HasFormatters{
    

    constructor(
        public recipient: string,
        readonly details: string,
        private amount: number
        ){}

    form(){
        return `${this.recipient} is owed £${this.amount} for ${this.details}`
    }

}