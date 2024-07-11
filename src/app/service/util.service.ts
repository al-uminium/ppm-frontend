import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  generateSecureRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
      result += characters.charAt(randomValues[i] % charactersLength);
    }
    return result;
  }

  getExpenseSplitFromFormGroup(arr: FormGroup[], users: User[]): { [key: string]: number } {
    const expenseSplit = {} as { [key: string]: number };
    for(let i = 0; i < arr.length; i++) {
      const checkBoxVal = arr[i].get('checked')?.value;
      if (checkBoxVal) {
        const user = users[i];
        const costVal = arr[i].get('cost')?.value as number;
        expenseSplit[user.userName] = costVal;
      }
    }
    return expenseSplit;
  }

  getExpenseSplitIfSplitEven(total: number, arr: FormGroup[], users: User[]) {
    const expenseSplit = {} as { [key: string]: number };
    const usersInvolved = this.getUsersInvolved(arr, users);
    const splitAmt = Number.parseFloat((total / usersInvolved.length).toFixed(3));

    usersInvolved.forEach(user => {
      expenseSplit[user.userName] = splitAmt;
    });
    return expenseSplit;
  }

  getUsersInvolved(arr: FormGroup[], users: User[]): User[] {
    const usersInvolved = new Array<User>;

    for (let i = 0; i < arr.length; i++) {
      const checkBoxVal = arr[i].get('checked')?.value;
      if (checkBoxVal) {
        usersInvolved.push(users[i]);
      }
    }

    return usersInvolved;
  }
  
  getUsersFromForm(arr: FormArray): User[] {
    const userArray = new Array<User>; 

    for (let index = 0; index < arr.length; index++) {
      const val = arr.at(index).value as string
      if (val.length > 0) {
        const newUser = new User(val);
        userArray.push(newUser);
      }
    }
    return userArray
  }  

  getUsersFromBackend(obj: Object) {
    
  }
  

}
