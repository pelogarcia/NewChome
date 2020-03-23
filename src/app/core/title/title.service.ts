import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';


import { environment } from '../../../environments/environment.prod';
@Injectable()
export class TitleService {
  constructor(
    private title: Title
  ) {}

}
