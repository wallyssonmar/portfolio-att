import { Component, OnInit} from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import {  ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';

import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, GalleriaModule, ButtonModule, ImageModule,MenuModule],

  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isHovered = false;
  activeSection: string = 'sobre';
  images: any[] = [];
  items : any[] = [];
  
  ngOnInit(){
    this.images = [
      {projetoPriorize : '/priorize/priorize-1.png'},
      {projetoPriorize : '/priorize/priorize-2.png'},
      {projetoPriorize : '/priorize/priorize-3.png'},
    ]

    this.items = [
            {
                
    label: 'Sobre',
    icon: 'pi pi-user',
    command: () => this.scrollTo('sobre')
  },
  {
    label: 'Habilidades',
    icon: 'pi pi-star',
    command: () => this.scrollTo('habilidades')
  },
  {
    label: 'Projetos',
    icon: 'pi pi-briefcase',
    command: () => this.scrollTo('projetos')
  },
  {
    label: 'Contato',
    icon: 'pi pi-envelope',
    command: () => this.scrollTo('contato')
  }
            
        ];
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
