import { Component, OnInit, Input } from '@angular/core';
import { Perpustakaan } from '../perpustakaan.model';
import { PerpustakaanService } from '../perpustakaan.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-perpustakaan-detail',
  templateUrl: './perpustakaan-detail.component.html',
  styleUrls: ['./perpustakaan-detail.component.css']
})
export class PerpustakaanDetailComponent implements OnInit {
  //@Input() perpustakaan:Perpustakaan;
  perpustakaan:Perpustakaan;
  id:number;

  constructor(private perpustakaanService:PerpustakaanService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.perpustakaan=this.perpustakaanService.getPerpustakaan(this.id);
      }
    )
  }

  onAddData(){
    this.perpustakaanService.addPublishersData(this.perpustakaan.publishers);
  }
  onEditPerpustakaan(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeletePerpustakaan(){
    this.perpustakaanService.deletePerpustakaan(this.id);
    this.router.navigate(['/perpustakaans']);
  }
}
