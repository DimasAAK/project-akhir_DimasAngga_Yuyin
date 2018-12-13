import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PerpustakaanService } from '../perpustakaan.service';


@Component({
  selector: 'app-perpustakaan-edit',
  templateUrl: './perpustakaan-edit.component.html',
  styleUrls: ['./perpustakaan-edit.component.css']
})
export class PerpustakaanEditComponent implements OnInit {
  id:number;
  editMode=false;
  perpustakaanForm: FormGroup;

  constructor( private route:ActivatedRoute,
               private perpustakaanService: PerpustakaanService,
               private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();

        //untuk mengecek mode dari edit mode
        //jika /new maka nilainya akan false
        //jika /0/edit (idnya/edit) maka nilainya true
        console.log(this.editMode);
      }
    )
    
  }
  onSubmit(){

  if(this.editMode){
    this.perpustakaanService.updatePerpustakaan(this.id, this.perpustakaanForm.value);
  }else{
    this.perpustakaanService.addPerpustakaan(this.perpustakaanForm.value);
  }
  this.onCancel();
  }
  onAddPublisher(){
    (<FormArray>this.perpustakaanForm.get('publishers')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'year':new FormControl(null,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
      })
    )
  }

  onDeletePublisher(index: number){
    (<FormArray>this.perpustakaanForm.get('publishers')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let perpustakaanName='';
    let perpustakaanPage='';
    let perpustakaanImagePath='';
    let perpustakaanDescription='';
    let perpustakaanPublishers = new FormArray([]);
    if(this.editMode){
      const perpustakaan=this.perpustakaanService.getPerpustakaan(this.id);
      perpustakaanName=perpustakaan.name;
      perpustakaanImagePath=perpustakaan.imagePath;
      perpustakaanDescription=perpustakaan.description;
      if (perpustakaan['publisher']){
        for(let publisher of perpustakaan.publisher){
          perpustakaanPublishers.push(
           new FormGroup({
             'name' : new FormControl(publisher.name,Validators.required),
             'year' : new FormControl(publisher.year,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
           ])
           }) 
          );

        }
      }
        }
this.perpustakaanForm =new FormGroup({
  'name': new FormControl(perpustakaanName,Validators.required),
  'page': new FormControl(perpustakaanPage,Validators.required),
  'imagePath':new FormControl(perpustakaanImagePath,Validators.required),
  'description':new FormControl(perpustakaanDescription,Validators.required),
  'publishers': perpustakaanPublishers
  });
  }

}
