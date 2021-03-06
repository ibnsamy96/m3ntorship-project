import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavOpen = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  toggleNavbar() {
    if (window.innerWidth <= 850) {
      console.log('toggle');
      // toggle boolean
      this.isNavOpen = !this.isNavOpen;
      // nav open by default
      this.toggleOverflow();
    }
  }

  toggleOverflow() {
    console.log('overflow');

    // overflow hidden for the body element
    setTimeout(() => {
      this.renderer.setStyle(
        this.document.body,
        'overflow',
        this.isNavOpen ? 'hidden' : 'auto'
      );
    }, 350);
  }
}
