import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent {
  sidebarOpened: boolean;
  @ViewChild('backdrop', {static: false}) backdrop: ElementRef;
  @ViewChild('checkbox', {static: false}) checkbox: ElementRef;

  async onToggleSideBar(){
    if(this.sidebarOpened){
      this.backdrop.nativeElement.classList.remove('fade-in');
      this.backdrop.nativeElement.classList.add('fade-out');
      await setTimeout( () => {
        this.backdrop.nativeElement.style.display = 'none';
      }, 650);
    } else {
      this.backdrop.nativeElement.classList.remove('fade-out');
      this.backdrop.nativeElement.style.display = 'block';
      this.backdrop.nativeElement.classList.add('fade-in');
    }
  }

}
