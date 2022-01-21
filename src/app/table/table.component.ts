import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  create_id:any
  total_count=[];
  status:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.student_details = [
      {id:1, first:'siva',last:'srinadh',age:30,subj1_marks:25,subj2_marks:60,subj3_marks:50,subj4_marks:70,status:'pass'},
      {id:2, first:'siva',last:'srinadh',age:30,subj1_marks:40,subj2_marks:25,subj3_marks:65,subj4_marks:45,status:'pass'},
      {id:3, first:'siva',last:'srinadh',age:30,subj1_marks:60,subj2_marks:90,subj3_marks:80,subj4_marks:20,status:'pass'},
      {id:4, first:'siva',last:'srinadh',age:30,subj1_marks:32,subj2_marks:22,subj3_marks:55,subj4_marks:75,status:'pass'},
    ]
    this.table_search = this.student_details;

  

    // total count
     this.total_count = this.student_details.length
     console.log(this.total_count) 

    // total count

     // update function

     this.objIndex = this.student_details.findIndex((x:any)=>x.id==2)
     this.student_details[this.objIndex].first = 'venkatesh'
     this.student_details[this.objIndex].last = 'ch'
     console.log(this.objIndex)

   // update function

  //  status
   this.status = this.student_details.every((x:any)=>{
     return x.subj1_marks>24 && x.subj2_marks>24 && x.subj3_marks>24 && x.subj3_marks>24
   })
   console.log(this.status, 'status')
  //  status

    // fullname and total marks
    this.add_result = this.student_details.map((x:any)=>{
      x.total=x.subj1_marks + x.subj2_marks+ x.subj3_marks+ x.subj4_marks;
      x.name = x.first +' '+ x.last
      return(x)
    })
    console.log(this.add_result)  
    console.log(this.student_details) 

    // fullname and total marks


   
    // name exist for not
      this.exit_details = this.student_details.every((x:any)=>x.first=="siva" && x.last == "siva")
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
    this.total_count =this.student_details.length
  }
  // delete function

  // search function
  search_data(text:any){
    // this.data = text.target.value
    // console.log(this.data)
    // this.student_details = this.table_search.filter((e:any)=>(this.data))
    this.student_details = this.table_search.filter((e:any)=>{
      console.log(e.name)
      if(e.id.include(text)||e.first.include(text)||e.last.include(text) || e.name.include(text) || e.status.include(text) || e.subj1_marks.include(text) || 
      e.subj2_marks.include(text) || e.subj3_marks.include(text) || e.subj4_marks.include(text) || e.total.include(text))
     return e

    })
  }
  // search function


  // column filter
  asyn(){
    this.student_details.sort((a:any,b:any)=>a.id-b.id) 
  }
  // column filter


 // add create
 create(){
    var nextid=0;
    for(var i=0;i<this.student_details.length;i++){
      if(this.student_details[i].id>nextid){
          nextid = this.student_details[i].id
      }
    }
    nextid++
    this.student_details.push({id:nextid})
    // this.student_details.unshift({id:nextid})
    this.total_count =this.student_details.length
    console.log(this.student_details)
    console.log(this.total_count)
    } 
 // add create

  // logout function
  logout(){
    this.router.navigate(['/'])
    localStorage.setItem('all_users','islogged:false')
  }

  // logout function
  someMethod(event:any){
    console.log(event.value)
  }


}
