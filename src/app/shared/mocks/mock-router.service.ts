import { of } from 'rxjs';

export class MockRouterService {
  public lastEvent: any;
  public lastPath = '';
  public url = '';

  public navigate(routes: string[]): void {
    this.lastPath = routes.join('/');
  }

  public navigateByUrl(route: string): void {
    this.lastPath = route;
  }

  public get events() {
    return of(this.lastEvent);
  }
}
