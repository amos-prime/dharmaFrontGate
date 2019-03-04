export interface KusenNodeAttrs {
    hash: string;
    path: string;
    name: string;
    tag: string;
    children?: KusenNode[];
}

export class KusenNode {
    hash: string;
    path: string;
    name: string;
    tag: string;
    children?: KusenNode[];

    constructor(attrs: Partial<KusenNodeAttrs> = {}) {
        this.hash = attrs.hash;
        this.name = attrs.name;
        this.path = attrs.path;
        this.tag = attrs.tag;
        this.children = attrs.children; 
    }
}
