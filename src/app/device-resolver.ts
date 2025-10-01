import { ResolveFn } from '@angular/router';

export const deviceResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
