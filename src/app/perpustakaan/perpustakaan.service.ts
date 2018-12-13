import { Injectable } from '@angular/core';
import { Perpustakaan } from '../perpustakaan/perpustakaan.model';
import { Publisher } from '../shared/publisher.model';
import { DataService } from '../data/data.service';
import { Subject } from 'rxjs/Subject';
@Injectable(

)
export class PerpustakaanService {
perpustakaansChanged=new Subject<Perpustakaan[]>();


  //property:class perpustakaan
  private perpustakaans:Perpustakaan[]=[
    new Perpustakaan('MENGUASAI ANGULAR JS UNTUK MEMBUAT WEBSITE DINAMIS','(Page-168)', 'AngularJS adalah Framework Javascript yang dikembangkan oleh GOOGLE dan banyak digunakan pada produk-produk yang dibuat oleh Google.',
    '../src/app/img/angular.jpg',[
    new Publisher('Lutfi Gani',2017),
    ]),
    new Perpustakaan('DATABASE DESIGN ALL IN ONE','(Page-195)', 'Dalam dunia bisnis modern sekarang ini, teknologi informasi memegang peranan yang sangat penting dalam perekonomian dunia. Kebanyakan perusahaan menganggap teknologi informasi sebagai jalan keluar untuk mengatasi permasalahan-permasalahan yang timbul.',
    '../src/app/img/database.jpg',[
    new Publisher('Indrajani, S.Kom., MM.',2017),
    ]),
    new Perpustakaan('HUKUM EKONOMI ISLAM','(Page-242)', 'Didalam mekanisme pasar yang bebas / liberal tentunya tak bisa terlepas dengan persoalan riba. Penulis juga memaparkan pendapatnya dalam buku ini. Ada di suatu pendapat di tengah tengah masyarakat yang menyatakan bahwa rente dan riba sama. ',
    '../src/app/img/hukum.png',[
    new Publisher('Sinar Grafika',2012),
    ]),
    new Perpustakaan('PENGANTAR ILMU PEMERINTAHAN','(Page-223)', 'Sebuah buku yang paling fundamental dalam membahas ilmu pemerintahan. Dikatakan demikian karena buku ini secara sistematis memetakan perdebatan makna ilmu pemerintahan, sistem pemerintahan, azas pemerintahan, dan dinamika politik pemerintahan dalam satu tarikan napa keilmuwan. ',
    '../src/app/img/pemerintahan.jpg',[
    new Publisher('Cahaya',2014),
    ]),
    new Perpustakaan('SENJA, HUJAN, & CERITA YANG TELAH USAI','(Page-172)', 'Buku ini dipersembahkan untuk orang-orang yang pernah dilukai, hingga susah melupakan. Untuk orang-orang yang mencintai, tapi dikhianati. Juga yang mengkhianati, lalu menyadari semua bukanlah hal yang baik untuk hati.',
    '../src/app/img/senja.jpg',[
    new Publisher('Mediakita',2015),
    ]),
    new Perpustakaan('UBUR-UBUR LEMBUR','(Page-240)', 'Hal kedua yang gue nggak sempat kasih tahu Iman: jadi orang yang dikenal publik harus tahan dengan asumsi-asumsi orang. Misalnya, orang-orang penuh dengan asumsi yang salah.',
    '../src/app/img/ubur.jpg',[
    new Publisher('Gramedia.com',2018),
    ]),
];

  getPerpustakaans(){
    return this.perpustakaans.slice();
  }

  addPublishersData(publishers: Publisher[]){
    this.dtService.addPublishers(publishers);
  }
  getPerpustakaan(index:number){
    return this.perpustakaans [index] ;
  }

constructor(private dtService: DataService) { 

}

setPerpustakaans(perpustakaans: Perpustakaan[]){
  this.perpustakaans = perpustakaans;
  this.perpustakaansChanged.next(this.perpustakaans.slice());
}

addPerpustakaan(perpustakaan: Perpustakaan){
this.perpustakaans.push(perpustakaan);
this.perpustakaansChanged.next(this.perpustakaans.slice());
}

updatePerpustakaan(index: number, newPerpustakaan: Perpustakaan){
this .perpustakaans[index]= newPerpustakaan;
this.perpustakaansChanged.next(this.perpustakaans.slice());
}

deletePerpustakaan(index: number){
  this.perpustakaans.splice(index, 1);
  this.perpustakaansChanged.next(this.perpustakaans.slice());
}
}