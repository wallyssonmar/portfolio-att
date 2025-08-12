import { Component, model } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { Image, ImageModule } from 'primeng/image';


import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, GalleriaModule, ButtonModule,ImageModule,Image],
  
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isHovered = false;
  activeSection: string = 'sobre';

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

 


  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  
}
