export class Users {
    id:number = 0;
    cpf:string;
    age:number;
    name:string;
    email:string;
    copyFrom(from: Users): void {
        this.id=from.id;
        this.name = from.name;
        this.cpf = from.cpf;
        this.age = from.age;
        this.email = from.email;
      }
  }
  