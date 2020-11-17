export class MockAuthGuard {
  public lastParam: any;
  public willLoad = true;

  public canLoad(next: any) {
    this.lastParam = next;

    return this.willLoad;
  }
}
