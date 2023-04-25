import { AbstractControl, FormGroup,ValidatorFn } from "@angular/forms";

export default class CustomValidators {

    static ConfirmPasswordValidator(password : string, confirmpassword:string)
    {
      return(formGroup:FormGroup) => {
        let pwdcontrol = formGroup.controls[password];
        let cpwdcontrol = formGroup.controls[confirmpassword];
  
  
        if (cpwdcontrol.errors && !cpwdcontrol.errors['ConfirmPasswordValidator']) {
          return;
          }
          if (pwdcontrol.value !== cpwdcontrol.value) {
          cpwdcontrol.setErrors({ ConfirmPasswordValidator: true });
          } else {
            cpwdcontrol.setErrors(null);
  
          }
  
  
      }
    }
}
