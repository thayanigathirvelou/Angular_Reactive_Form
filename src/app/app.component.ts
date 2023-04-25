import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'reactive-form';

  registrationForm : FormGroup = new FormGroup({});

  
  showMsg: boolean = false;
  formSubmitted : boolean = false;
  mobnumPattern = "^((\\+94-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";


  constructor(private fb: FormBuilder) { 
    this.registrationForm=this.fb.group(
      {
      firstname:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastname:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email:new FormControl('',[Validators.email,Validators.required,Validators.pattern(this.emailPattern)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.pwdPattern)]),
      confirmpassword:new FormControl('',Validators.required),
      phoneno:new FormControl('',[Validators.required,Validators.pattern(this.mobnumPattern)]),
      dateofbirth:new FormControl(''),
      address:new FormControl(''),
     

      

    },
    {
      validators:this.MustMatch('password','confirmpassword')

    })

    
    
  }

  MustMatch(password : string, confirmpassword:string)
    {
      return(formGroup:FormGroup) => {
        const pwdcontrol = formGroup.controls[password];
        const cpwdcontrol = formGroup.controls[confirmpassword];
  
  
        if (cpwdcontrol.errors && !cpwdcontrol.errors['ConfirmPasswordValidator']) {
          return;
          }
          if (pwdcontrol.value !== cpwdcontrol.value) {
          cpwdcontrol.setErrors({ MustMatch: true });
          } else {
            cpwdcontrol.setErrors(null);
  
          }
  
  
      }
    }
  


  

  onsubmit(){
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.valid);
    console.log(this.registrationForm.value.firstname);
    console.log(this.registrationForm.value.dateofbirth);
    this.showMsg= true;
    this.formSubmitted = true;


    if (this.registrationForm.invalid) {
      return;
  }

    alert('SUCCESS!! :-)')
    
    

    
  }

  onReset(): void {
    this.formSubmitted = false;
    this.registrationForm.reset();
  }

  

 

}
