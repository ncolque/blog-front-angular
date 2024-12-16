import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [HeaderComponent, NavComponent, FooterComponent, RouterOutlet, RouterLink, MaterialModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
