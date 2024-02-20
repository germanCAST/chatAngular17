export interface Mensaje {
  id: string;
  usuario: string;
  msj: string;
  tipo: 'enviado' | 'recibido';
}
