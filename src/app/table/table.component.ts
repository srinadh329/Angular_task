import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  student_details:any;
  data:any;
  table_search:any;
  objIndex:any;
  exit_details:any;
  add_result:any;
  constructor() { }

  ngOnInit(): void {
    this.student_details = [
      {id:1, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:2, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:3, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'},
      {id:4, first:'siva',last:'srinadh',age:30,subj1_marks:100,subj2_marks:100,subj3_marks:100,subj4_marks:100,status:'pass'}
    ]
     // update function

     this.objIndex = this.student_details.findIndex((x:any)=>x.id==2)
     this.student_details[this.objIndex].first = 'venkatesh'
     this.student_details[this.objIndex].last = 'ch'
     console.log(this.objIndex)

   // update function

    // fullname and total marks
    this.add_result = this.student_details.map((x:any)=>{
      x.total=x.subj1_marks + x.subj2_marks+ x.subj3_marks+ x.subj4_marks
      x.name = x.first + x.last
      return(x)
    })
    console.log(this.add_result)  
    console.log(this.student_details) 

    // fullname and total marks


   
    // name exist for not
      this.exit_details = this.student_details.every((x:any)=>x.name)
      console.log(this.exit_details)
      
    
    // name exist for not
    
    }
  
  // delete function  
  detele_item(student_details:any){
   let index_value = this.student_details.findIndex((x:any)=>x.id == student_details.id);
    console.log(index_value)
    if(index_value!=-1){
      this.student_details.splice(index_value,1)
    }
  }
  // delete function

  // search function
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
  // search function
  // column filter
  asyn(){
    this.student_details.sort((a:any,b:any)=>a.id-b.id) 
  }
  // column filter
 
}
