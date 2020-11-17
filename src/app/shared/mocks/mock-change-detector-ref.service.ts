export class MockChangeDetectorRefService {
  public hasChanges = false;

  public detectChanges() {
    this.hasChanges = true;
  }
}
