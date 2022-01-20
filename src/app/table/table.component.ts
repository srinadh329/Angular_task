import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  student_details:any;
  data:any;
  result:any;
  marks_total:any;
  table_search:any;
  update_details:any;
  update_splice_details:any;
  constructor() { }

  ngOnInit(): void {
    this.student_details = [
      {id:1, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:2, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:3, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:4, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'}
    ]
    this.result = this.student_details.map((x:any)=>x.subj1_marks+x.subj2_marks+x.subj3_marks+x.subj4_marks)
    this.result = this.result.reduce((a:any,b:any)=>{
      return a+b
    })
    this.student_details['total']= this.result
    console.log(this.student_details)
    this.table_search = this.student_details
    console.log(this.table_search)

    this.update_details = this.student_details.find((x:any)=>x.id==2)
    console.log(this.update_details)
    this.update_splice_details = this.student_details.splice(this.update_details,1)
    console.log(this.update_splice_details) 
    this.update_splice_details = this.update_splice_details.map((x:any)=>[x.first='venkatesh',x.last='chavvakula'])
    console.log(this.update_splice_details) 
     this.student_details = [...this.update_splice_details,...this.student_details]
     console.log(this.student_details)
    }
  

  detele_item(student_details:any){
   let index_value = this.student_details.findIndex((x:any)=>x.id == student_details.id);
    console.log(index_value)
    if(index_value!=-1){
      this.student_details.splice(index_value,1)
    }
  }
  search_data(text:any){
    this.data = text.target.value
    console.log(this.data)
    this.student_details = this.table_search.filter((e:any)=>{
      console.log(e.first)
      if(e.includes(text)){
        return e;
      }
    })
  }
  asyn(){
    this.student_details.sort((a:any,b:any)=>a.id-b.id) 
  }
 
}
