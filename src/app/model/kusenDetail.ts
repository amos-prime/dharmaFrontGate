export interface KusenDetailAttrs {
    id: string,
    hash: string;
    path: string;
    name: string;
    tag: string;
    text: string;
}

export class KusenDetail {
    id: string;
    hash: string;
    path: string;
    name: string;
    tag: string;
    text: string;

    constructor(attrs: Partial<KusenDetailAttrs> = {}) {
        this.id = attrs.id;
        this.hash = attrs.hash;
        this.name = attrs.name;
        this.path = attrs.path;
        this.tag = attrs.tag;
        this.text = attrs.text; 
    }
}
