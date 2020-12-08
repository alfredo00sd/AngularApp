import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppUserService } from 'src/app/shared/app-user.service';

@Component({
  selector: 'app-app-user-register',
  templateUrl: './app-user-register.component.html',
  styleUrls: ['./app-user-register.component.css']
})
export class AppUserRegisterComponent implements OnInit {

  constructor(public service : AppUserService, public toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
  
    if(form != null)
      form.resetForm();
    this.service.formData = {
      Id : 0,
      Name : "",
      Cedula : "",
      LastName : "",
      Email : "",
      Birthday : "",
      UserType : "",
      Gender : "",
      Color : "",
      Price : 0,
      Comment : ""
    }
  }

   // Here we have the data ones someone submit the form, then here we can access form-data.
   onSubmit(form : NgForm) {
    console.log(form)
    if(this.service.formData.Id == 0)
      this.insertRecord(form);
  }
  insertRecord(form : NgForm) {
    
    //Post form data to API.
    this.service.postAppUser().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Submitted Successfuly", "AngularApp");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
