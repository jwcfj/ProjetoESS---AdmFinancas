import { Users } from "../../common/users";

export class UsersAPI {
   usersArray: Users[] = [];

    rergisterUser(user: Users): Users {
     var result = null;
     if (this.notRegisteredCpf(user.cpf)) {
       result = new Users();
       result.copyFrom(user);
       this.usersArray.push(result);
       
     }
     return result;
   }

   notRegisteredCpf(cpf: string): boolean {
      return !this.usersArray.find(a => a.cpf == cpf);
   }

    update(user: Users): Users {
     var result: Users = this.usersArray.find(a => a.cpf == user.cpf);

     if (result) result.copyFrom(user);
     return result;
   }

   atualizarEmail(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.relatorioEnviado = true;
    return result;
  }
    getUsers(): Users[] {
     return this.usersArray;
   }
   getUsersbyCPF(cpf: string): Users {
    return this.usersArray.find(a => a.cpf == cpf);
  }
}