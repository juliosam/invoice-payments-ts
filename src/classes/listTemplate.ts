import { HasFormatters } from "../Interfaces/hasFormatter.js";

export  class ListTemplate {
    constructor(private container:HTMLUListElement){}

    render(item: HasFormatters, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.form();
        li.append(p);

        if(pos==='start'){
            this.container.prepend(li);
        } else{
            this.container.append(li)
        }



    }
}