import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppTree } from 'src/app/shared/app-tree.model';
import { AppTreeService } from 'src/app/shared/app-tree.service';

@Component({
  selector: 'app-app-tree-list',
  templateUrl: './app-tree-list.component.html',
  styleUrls: []
})
export class AppTreeListComponent implements OnInit {

  constructor(public service : AppTreeService, public toastr : ToastrService) { }

  ngOnInit(): void { this.service.refreshList(); }

    //Update record by clicking element on the table
    populateForm(pd : AppTree) { this.service.formData = Object.assign({},pd); }
  
    onDelete(Id) {
      if(confirm("Are u sure to delete this?")) {
        this.service.deleteAppTree(Id).subscribe(
          res => {
            this.service.refreshList();
            this.toastr.warning('Deleted Successfully','Angular App')
          },
          err => {
            console.log(err);
          });
      }
    }
}
