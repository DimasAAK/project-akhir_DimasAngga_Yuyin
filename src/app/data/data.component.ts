import { Component, OnInit, OnDestroy } from '@angular/core';
import { Publisher } from '../shared/publisher.model';
import { DataService } from '../data/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {

  publishers:Publisher[];
  private subscription: Subscription;

  constructor(private dtService:DataService) { }

  ngOnInit() {
  this.publishers=this.dtService.getPublishers();
  this.subscription=this.dtService.PublisherChanged
  .subscribe(
    (Publisher:Publisher[])=>{
      this.publishers=Publisher;
    }
  );
  }
  onEditItem(index: number){
    this.dtService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
