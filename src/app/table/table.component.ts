import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  student_details:any;
  constructor() { }

  ngOnInit(): void {
    this.student_details = [
      {id:1, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:2, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:3, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:4, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'}
    ]
  }

  detele_item(student_details:any){
   let index_value = this.student_details.findIndex((x:any)=>x.id == student_details.id);
    console.log(index_value)
    if(index_value!=-1){
      this.student_details.splice(index_value,1)
    }
  }
  search_data(text:any){
    console.log(text)
    this.student_details = this.student_details.filter((e:any)=>{
      if(e.student_details.includes(text)){
        return e;
      }
    })
  }
 
}
