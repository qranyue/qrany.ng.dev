import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

export const provideHttp = () => {
  return provideHttpClient(
    withFetch(),
    withInterceptors([
      (req, next) => {
        const rest = req.clone({ url: '/api/' + req.url });
        console.log(rest);
        return next(rest);
      },
    ]),
  );
};
