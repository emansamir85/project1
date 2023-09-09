import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

photoSrc: string="";
showPhoto(event:MouseEvent) {
  let photoDiv= event.currentTarget as HTMLDivElement,
      image= photoDiv.querySelector("img") as HTMLImageElement,
      imgSrc= image.src;
  this.photoSrc= imgSrc;
  console.log(this.photoSrc)

}
hidePhoto(){

  this.photoSrc="";
}

}
