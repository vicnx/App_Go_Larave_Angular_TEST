import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// import { Award, AwardsService } from '../../core';

@Component({
  selector: 'auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {

  isSubmitting = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

  }

  loadLogin() {
    let modal = document.getElementById('modal-auth-canvas');
    let auth = modal.querySelector('#modal-auth');
    console.log("LOGIN LOAD");
    // let auth = document.getElementById('modal-auth');
    auth.className = 'hide-modal';
    // load modalregister <3


    //esto carrega el form de login
  }

  loadRegister() {
    let modal = document.getElementById('modal-auth-canvas');
    let auth = modal.querySelector('#modal-auth');
    console.log("REGISTER LOAD");
    auth.className = 'hide-modal';
    //esto carrega el form de register
  }

  submitForm(event) {
    this.isSubmitting = true;
  }

  hideModal() {
    let auth = document.getElementById('modal-auth-canvas');

    auth.className = 'hide-modal';
  }

  
}
