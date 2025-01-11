declare module 'dat.gui' {
  export class GUI {
    constructor();
    add(object: any, property: string): GUIController;
    destroy(): void;
  }

  interface GUIController {
    name(name: string): GUIController;
    onChange(fn: (value: any) => void): GUIController;
  }
}
