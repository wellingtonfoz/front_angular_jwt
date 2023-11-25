import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login();
  roteador = inject(Router);
  loginService = inject(LoginService);

  constructor() {
    this.loginService.removerToken();
  }

  logar() {


    this.loginService.logar(this.login).subscribe({
      next: user => { // QUANDO DÁ CERTO
        console.log(user);
        this.loginService.addToken(user.token);
        this.roteador.navigate(['/admin/dashboard']);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });


  }


}
