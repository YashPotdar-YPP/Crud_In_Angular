import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { user } from 'src/app/user.module';

@Component({
  selector: 'app-addapi',
  templateUrl: './addapi.component.html',
  styleUrls: ['./addapi.component.css'],
})
export class AddapiComponent implements OnInit {
  formValue!: FormGroup;
  userObj: user = new user();
  userData!: any;
  showAddBtn!: boolean;
  showEditBtn!: boolean
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      _id:[''],
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
    });
    this.getAllUser();
  }
  clickAddUser(){
    this.formValue.reset()
    this.showAddBtn = true;
    this.showEditBtn = false
  }

  postUserDetails() {
    this.userObj.firstName = this.formValue.value.firstName;
    this.userObj.lastName = this.formValue.value.lastName;
    this.userObj.phoneNumber = this.formValue.value.phoneNumber;

    this.api.postUser(this.userObj).subscribe(
      (res) => {
        console.log(res);
        alert('User Added Successfully');
        this.formValue.reset();
          let close = document.getElementById('Close');
          close?.click();
        this.getAllUser();
      },
      (err) => {
        alert('something went wrong');
        this.formValue.reset();
      }
    );
  }

  getAllUser() {
    this.api.getUser(this.userObj).subscribe((res) => {
      this.userData = res;
    });
  }

  deleteUserDetails(row: any) {
    this.api.deleteUser(row._id).subscribe(
      (res) => {
        alert('User Deleted');
        this.getAllUser();
      },
      (err) => {
        alert('Somthing went wrong');
      }
    );
  }

  onEdit(row: any) {
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['phoneNumber'].setValue(row.phoneNumber);
    this.userObj._id = row._id;
    this.showAddBtn = false;
    this.showEditBtn = true
  }

  editUserDetails() {
    this.userObj.firstName = this.formValue.value.firstName;
    this.userObj.lastName = this.formValue.value.lastName;
    this.userObj.phoneNumber = this.formValue.value.phoneNumber;

    this.api.updateUser( this.userObj._id,this.userObj).subscribe(
      (res) => {
        alert('Updated Successfully');
        let close = document.getElementById('Close');
        close?.click();
        this.getAllUser();
        this.formValue.reset();
      },
      (err) => {
        alert('Something went Wrong');
      }
    );
  }
}
