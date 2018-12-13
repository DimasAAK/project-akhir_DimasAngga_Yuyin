import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  onSaveData(){
    this.dataStorageService.storePerpustakaans()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getPerpustakaans();
  }

  ngOnInit() {
  }

}
