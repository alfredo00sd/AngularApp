import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppTreeService } from 'src/app/shared/app-tree.service';

@Component({
  selector: 'app-app-tree-form',
  templateUrl: './app-tree-form.component.html',
  styleUrls: []
})
export class AppTreeFormComponent implements OnInit {

  constructor(public service : AppTreeService, public toastr : ToastrService) { }

  ngOnInit(): void { this.resetForm(); }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.service.formData.Latitud =  ""+position.coords.latitude;
      this.service.formData.Longitud = ""+position.coords.longitude;
    });
  }

  // Clear form data
  resetForm(form ?: NgForm) {
  
    if(form != null)
      form.resetForm();
    this.service.formData = {
      Id : 0,
      Especie : "",
      Nombre : "",
      Descripcion : "",
      Foto : "",
      Latitud : "",
      Longitud : "",
      Plantador : ""
    }
  }

  // Here we have the data ones someone submit the form, then here we can access form-data.
  onSubmit(form : NgForm) {
    // console.log(form)
    if(form.valid) {
      if(this.service.formData.Id == 0)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    } 
  }

  insertRecord(form : NgForm) {
    
    //Post form data to API.
    this.service.postAppTree().subscribe(
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

  updateRecord(form : NgForm) {
    
    //Post form data to API.
    this.service.updateAppTree().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info("Data updated Successfuly", "AngularApp");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
