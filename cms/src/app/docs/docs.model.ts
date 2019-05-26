import { Injectable } from '@angular/core';

@Injectable()
export class Doc {

    constructor(public id: string,
        public name: string,
        public description: string,
        public url: string,
        public children: Doc[]) {}
}