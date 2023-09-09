import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled:boolean= true;
  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.isScrolled=window.pageYOffset == 0 }
  }

