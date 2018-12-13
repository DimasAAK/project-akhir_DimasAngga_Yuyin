import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Perpustakaan } from '../../perpustakaan.model';
import { PerpustakaanService } from '../../perpustakaan.service';

@Component({
  selector: 'app-perpustakaan-item',
  templateUrl: './perpustakaan-item.component.html',
  styleUrls: ['./perpustakaan-item.component.css']
})
export class PerpustakaanItemComponent implements OnInit {

  @Input() perpustakaan:Perpustakaan;
  @Input() index:number;


  ngOnInit() {
  }

}
