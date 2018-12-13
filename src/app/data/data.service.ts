import { Injectable, EventEmitter } from '@angular/core';
import { Publisher } from'../shared/publisher.model';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  PublisherChanged = new Subject<Publisher[]>();
  startedEditing =new Subject<number>();
  private publishers:Publisher[]=[
    new Publisher('Lutfi Gani',2017),
  ];
constructor() { }
getPublishers(){
  return this.publishers.slice();
}
getPublisher(index:number){
  return this.publishers[index];
}
addPublisher(publisher:Publisher){
  this.publishers.push(publisher);
  this.PublisherChanged.next(this.publishers.slice());
}
addPublishers(publishers: Publisher[]){
  this.publishers.push(...publishers);
  this.PublisherChanged.next(this.publishers.slice());
}
updatePublisher(index: number, newPublisher: Publisher){
  this.publishers[index] =newPublisher;
  this.PublisherChanged.next(this.publishers.slice());


}
deletePublisher(index: number){
  this.publishers.splice(index, 1);
  this.PublisherChanged.next(this.publishers.slice());
}
}
