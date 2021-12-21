import { Users } from "../../common/users";

export class UsersAPI {
   usersArray: Users[] = [];
    cont: number=0;

    getUserById(id:number):Users{
        const user = this.usersArray.find(u=>u.id==id);
        return user;
    }
    rergisterUser(user: Users): Users {
     var result = null;
     if (this.notRegisteredCpf(user.cpf)) {
       user.id=this.cont;
       result = new Users();
       result.copyFrom(user);
       this.usersArray.push(result);
       this.cont++;
     }
     return result;
   }

   notRegisteredCpf(cpf: string): boolean {
      return !this.usersArray.find(a => a.cpf == cpf);
   }

    updateUser(user: Users): Users {
     var result: Users = this.usersArray.find(a => a.cpf == user.cpf);

     if (result){ 
         this.usersArray[result.id].name=user.name;
         this.usersArray[result.id].age=user.age;
         this.usersArray[result.id].email=user.email;
        }
      
     return result;
   }
   delete(id: number) :boolean{
    let userIndex = this.usersArray.findIndex(u=>u.id==id);
    if(userIndex == -1){
        return false;
    }
    this.usersArray.splice(userIndex,1);
    return true;
  }
    getUsers(): Users[] {
     return this.usersArray;
   }
   getUsersbyCPF(cpf: string): Users {
    return this.usersArray.find(a => a.cpf == cpf);
  }
}