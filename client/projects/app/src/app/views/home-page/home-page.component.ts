// home-page.component.ts
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { DynamicHostDirective } from '@view/base';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, DynamicHostDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePage {
  @ViewChild(DynamicHostDirective, { static: true })
  dynamicHost!: DynamicHostDirective;

  get containerRef(): ViewContainerRef | null {
    return this.dynamicHost?.viewContainerRef ?? null;
  }
}
