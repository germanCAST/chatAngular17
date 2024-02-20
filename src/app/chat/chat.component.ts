import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  sendMessage(): void {
    //*enviando
    const msj: any = document.getElementById('mensaje');
    //! enviar un push al chat
    try {
      this.chat.push(msj.value);
    } catch (error) {
      alert(error);
    }
  }
  chat = [
    { msj: 'Hola, como estas?', tipo: 'enviado' },
    { msj: 'Bien y tu?', tipo: 'recibido' },
    { msj: 'Bien :)', tipo: 'enviado' },
    { msj: ':D ok', tipo: 'recibido' },
  ];
}
