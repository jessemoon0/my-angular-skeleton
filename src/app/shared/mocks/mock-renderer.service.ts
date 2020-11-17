class MockRendererClass {
  constructor(public el: any, public name: string ) {}
}

class MockRendererStyle {
  constructor(public el: any, public style: string, public value: any ) {}
}

export class MockRendererService {
  public parent: any;
  public style: MockRendererStyle;
  public addedClass: MockRendererClass;
  public removedClass: MockRendererClass;

  public parentNode(node: any) {
    this.parent = node;
  }

  public setStyle(el: any, style: string, value: any) {
    this.style = new MockRendererStyle(el, style, value);
  }

  public addClass(el: any, name: string) {
    this.addedClass = new MockRendererClass(el, name);
  }

  public removeClass(el: any, name: string) {
    this.removedClass = new MockRendererClass(el, name);
  }
}
