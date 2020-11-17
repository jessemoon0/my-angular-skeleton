import { Observable, of } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

export class MockActivatedRouteService {
  public snapshot = {
    params: {
      id: null,
    },
    paramMap: {
      get: (key: string): any => {
        return this.paramList[key];
      },
    },
  };

  public params: Observable<any> = of({});

  public paramMap = of({
    get: (key: string): any => {
      return this.paramList[key];
    },
  });

  public paramList: any = {};

  public parent = {
    snapshot: {
      paramMap: {
        get: (key: string): any => {
          return this.paramList[key];
        },
      },
    },
  };

  public root: Partial<ActivatedRoute> = {
    routeConfig: {
      data: {},
    },
    snapshot: new ActivatedRouteSnapshot(),
  };
}
