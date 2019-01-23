export interface DocumentAttrs {
    hash: string;
    name: string;
    path: string;
    tag: string;
}


export class Document {
    hash: string;
    name: string;
    path: string;
    tag: string;

    constructor(attrs: Partial<DocumentAttrs> = {}) {
        this.hash = attrs.hash;
        this.name = attrs.name;
        this.path = attrs.path;
        this.tag = attrs.tag;
    }
}