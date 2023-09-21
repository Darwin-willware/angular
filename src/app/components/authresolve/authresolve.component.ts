import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-authresolve',
  templateUrl: './authresolve.component.html',
  styleUrls: ['./authresolve.component.css']
})
export class AuthresolveComponent implements OnInit {
    AllStudents!:Student[];
  service:StudentService = inject(StudentService);
  activeroute:ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {

       this.AllStudents = this.activeroute.snapshot.data['Students'];
      // this.service.getAllStudents().subscribe((x:any)=>{
      //   this.AllStudents = x;
      // })
  }
}
