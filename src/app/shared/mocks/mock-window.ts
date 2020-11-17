export class MockWindow {
  public lastElementTypeCreated = '';
  public lastCreatedUrl = '';
  public location = { href: '', origin: '' };
  
  public URL = {
    createObjectURL: (url: string) => {
      this.lastCreatedUrl = url;

      return this.lastCreatedUrl;
    }
  };

  public lastElement: any = {};
  
  public navigator: Partial<Navigator> = {
    languages: null
  };

  public document = {
    createElement: (element: string) => {
      this.lastElementTypeCreated = element;

      return this.lastElement;
    }
  };

  public confirm() {
    return;
  }
  
}
