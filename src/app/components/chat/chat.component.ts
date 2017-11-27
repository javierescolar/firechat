import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string = "";

  elemento:any;

  constructor( public _chatService: ChatService) {
    this._chatService.cargarMensajes().subscribe(()=>{
      setTimeout(()=>{
          this.elemento.scrollTop = this.elemento.scrollHeight;
      },50);

    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }



  enviarMensaje() {
    console.log(this.mensaje);
    if(this.mensaje.length == 0) {
      return;
    } else {
      this._chatService.agregarMensaje(this.mensaje)
        .then( () => {
          console.log("mensaje guardado");
          this.mensaje = "";
        })
        .catch(() => console.error("Error al guardar mensaje"));
    }
  }

}
