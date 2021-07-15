import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-btn',
  templateUrl: './cta-btn.component.html',
  styleUrls: ['./cta-btn.component.css'],
})
export class CtaBtnComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() letterSpacing!: string;
  @Input() lineHeight!: string;
  @Input() fontSize!: string;
  @Input() paddingX!: string;
  @Input() paddingY!: string;
  @Input() responsivenessBehavior!: {
    breakpoint: number;
    fontSize?: string;
    paddingX?: string;
    paddingY?: string;
  }[];

  finalState!: {
    paddingY: string;
    paddingX: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    buttonText: string;
  };

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }
  constructor() {}

  ngOnInit(): void {
    this.finalState = {
      buttonText: this.buttonText,
      letterSpacing: this.letterSpacing,
      lineHeight: this.lineHeight,
      fontSize: this.fontSize,
      paddingX: this.paddingX,
      paddingY: this.paddingY,
    };

    this.detectScreenSize();
  }

  detectScreenSize(): void {
    const innerWidth = window.innerWidth;
    this.responsivenessBehavior?.forEach((state) => {
      if (innerWidth <= state.breakpoint) {
        this.finalState.fontSize = state.fontSize ?? this.fontSize;
        this.finalState.paddingX = state.paddingX ?? this.paddingX;
        this.finalState.paddingY = state.paddingY ?? this.paddingY;
      }
    });
  }
}
