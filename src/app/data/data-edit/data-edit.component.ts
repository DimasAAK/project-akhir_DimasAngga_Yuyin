import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { Publisher } from './publisher.model';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') dForm:NgForm;
  subscription:Subscription;
  editMode= false;
  editedItemIndex:number;
  editedItem:Publisher;

  constructor(private dtService:DataService) { }

  ngOnInit() {
    this.subscription=this.dtService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.dtService.getPublisher(index);
        this.dForm.setValue({
          name: this.editedItem.name,
          year: this.editedItem.year
        })
      }
    );
  }
onSubmit(form: NgForm){
  const value =form.value;
  const newPublisher = new Publisher(value.name,value.year);
  if(this.editMode){
    this.dtService.updatePublisher(this.editedItemIndex, newPublisher);
  }else{
    this.dtService.addPublisher(newPublisher);
  }
  this.editMode= false;
  form.reset();
}
onClear(){
  this.dForm.reset();
  this.editMode=false;

}
onDelete(){
  this.dtService.deletePublisher(this.editedItemIndex);
this.onClear();
}
ngOnDestroy(){
this.subscription.unsubscribe();
}
}