import { NgxGlideComponent } from 'ngx-glide';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { NgxTypedJsComponent, NgxTypedJsModule } from 'ngx-typed-js';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NavbarComponent, NgxGlideComponent,NgxTypedJsModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    }); 
  }
  

}
