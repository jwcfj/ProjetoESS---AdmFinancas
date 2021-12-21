export class Users {
    id:number;
    cpf:string;
    age:number;
    name:string;
    email:string;
    copyFrom(from: Users): void {
        this.name = from.name;
        this.cpf = from.cpf;
        this.age = from.age;
        this.email = from.email;
      }
  }
  