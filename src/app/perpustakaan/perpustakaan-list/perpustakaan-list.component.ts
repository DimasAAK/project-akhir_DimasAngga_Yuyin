import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Perpustakaan } from '../perpustakaan.model';
import { Subscription } from 'rxjs/Subscription';
import { PerpustakaanService } from '../perpustakaan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-perpustakaan-list',
  templateUrl: './perpustakaan-list.component.html',
  styleUrls: ['./perpustakaan-list.component.css']
})
export class PerpustakaanListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  perpustakaans:Perpustakaan[];

  constructor(private perpustakaanService:PerpustakaanService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.perpustakaanService.perpustakaansChanged
    .subscribe(
      (perpustakaans: Perpustakaan[]) =>{
        this.perpustakaans = perpustakaans;
      }
    );
    this.perpustakaans= this.perpustakaanService.getPerpustakaans();
  }
  onNewPerpustakaan(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
