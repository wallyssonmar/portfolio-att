import { Component, OnInit} from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import {  ImageModule } from 'primeng/image';

import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, GalleriaModule, ButtonModule, ImageModule,GalleriaModule],

  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isHovered = false;
  activeSection: string = 'sobre';
  images: any[] = [];
  
  ngOnInit(){
    this.images = [
      {projetoPriorize : '/sherek.jpg'},
      {projetoPriorize : '/git.png'},
      {projetoPriorize : '/sherek.jpg'},
    ]
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '991px',
      numVisible: 4,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];
}
