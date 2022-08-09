import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'CrisHood';
  role = "Beatmaker";
  btnDisabled = true;
  age= 28;
  emojis: string[] = ["🦌","🌌", "🏹"];
  image="https://crishood.github.io/static/media/avatar.d3b9ae26323b8f097503.jpg";
  skills = {
    music: "Flstudio",
    code: "JS"
  };
  newEmoji = "";
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: "Vintage"
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  plus(){
    this.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }
  addEmoji(){
    this.emojis.push(this.newEmoji);
  }
  deleteEmoji(index: number){
    this.emojis.splice(index, 1);
  }
}
