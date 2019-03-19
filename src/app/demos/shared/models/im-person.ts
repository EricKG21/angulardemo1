import * as Immutalbe from 'immutable';
const PersonRecord = Immutalbe.Record({
    name: '',
    age: 0
});

export class ImPerson extends PersonRecord{
    name: string;
    age: number;

    constructor(name: string, age: number){
        super({
            name,
            age
        });
    }
}