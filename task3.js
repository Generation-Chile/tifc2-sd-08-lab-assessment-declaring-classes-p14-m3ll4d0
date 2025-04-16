export class Player {
  constructor(name, level) {
    //consulta el nombre dentro de info; especificamente el name que esta dentro del constructor
   this.name = name;
   //consulta el nivel dentro de info
   this.level = level;
  }
  info() {
    //Imprime en consola 
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}
