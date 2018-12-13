import { Publisher } from '../shared/publisher.model';
export class Perpustakaan{
    publishers: any;
    public name:string;
    public page:string;
    public description:string;
    public imagePath:string;
    public publisher:Publisher[];

    constructor(name:string,page:string,desc:string,imagePath:string,publisher:Publisher[]){
        this.name=name;
        this.page=page;
        this.description=desc;
        this.imagePath=imagePath;
        this.publisher=publisher;
    }
}