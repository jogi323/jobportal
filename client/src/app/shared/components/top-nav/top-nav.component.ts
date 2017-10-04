import { Component, OnInit } from '@angular/core';

import { DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from '../../../login/login.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    private dialogService:DialogService
  ) { }

  ngOnInit() {
  }

  showConfirm() {
    let disposable = this.dialogService.addDialog(LoginComponent, {
      
        title:'Confirm title', 
        message:'Confirm message'}, { closeByClickingOutside:true, backdropColor: 'rgba(255, 0, 0, 0.5)' })
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
            }
            else {
            }
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    // setTimeout(()=>{
    //     disposable.unsubscribe();
    // },10000);
}

}
