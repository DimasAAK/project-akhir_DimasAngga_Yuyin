import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { PerpustakaanService } from '../perpustakaan/perpustakaan.service';
import { Perpustakaan } from '../perpustakaan/perpustakaan.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService{

    constructor(private http: Http, private perpustakaanService: PerpustakaanService){}

    storePerpustakaans(){
        return this.http.put('https://project-akhir-2e018.firebaseio.com/perpustakaans.json', this.perpustakaanService.getPerpustakaans());
    }

    getPerpustakaans(){
        this.http.get('https://project-akhir-2e018.firebaseio.com/perpustakaans.json')
        .map(
            (response: Response) => {
                const perpustakaans: Perpustakaan[] = response.json();
                for(let perpustakaan of perpustakaans){
                    if(!perpustakaan['publishers']){
                        perpustakaan['publishers'] = [];
                    }
                }
                return perpustakaans;
            }
        )
        .subscribe(
            (perpustakaans: Perpustakaan[]) => {
                this.perpustakaanService.setPerpustakaans(perpustakaans);
            }
        );
    }
}
