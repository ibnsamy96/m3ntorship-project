import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
