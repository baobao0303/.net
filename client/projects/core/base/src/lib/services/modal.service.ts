import {
  Injectable,
  ViewContainerRef,
  ComponentRef,
  Type,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private containerRef!: ViewContainerRef;

  constructor() {}

  setRootViewContainerRef(containerRef: ViewContainerRef) {
    this.containerRef = containerRef;
  }

  openModal<T extends {}>(
    componentType: Type<T>,
    data?: Partial<T>
  ): ComponentRef<T> {
    const componentRef = this.containerRef.createComponent(componentType);

    if (data) {
      Object.assign(componentRef.instance, data);
    }

    return componentRef;
  }

  closeModal(componentRef: ComponentRef<any>) {
    componentRef.destroy();
  }
}
