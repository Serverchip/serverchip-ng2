import { Condition } from './condition';

export class Task {

    _id: string;
    _etag: string;
    name: string;
    description: string;
    microchip: string;
    output_port: {
        number: number;
        state: boolean;
    };
    conditions: Condition[];


    constructor(name: string, microchip: string, output_port: { number: number; state: boolean },
                conditions: Condition[], _id?: string, _etag?: string, description?: string,) {
        this._id = _id;
        this._etag = _etag;
        this.name = name;
        this.description = description;
        this.microchip = microchip;
        this.output_port = output_port;
        this.conditions = conditions;
    }
}