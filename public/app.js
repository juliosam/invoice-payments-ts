import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payments.js';
import { ListTemplate } from './classes/listTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
// let docOne: HasFormatters;
// let docTwo: HasFormatters;
// docOne = new Invoice ('Goku', 'old tree seads', 3400 );
// docTwo = new Payment ('Piccolo', 'open lock door', 30 );
// let docs: HasFormatters[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
// const invOne = new Invoice ('Ely', '4 caketopers' , 15 );
// const invTwo = new Invoice ('Juana', '7 cups' , 28 );
// let invoices: Invoice[] =[];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invoices.forEach(inv => {console.log( inv.client, inv.details, inv.form())})
