// import { HttpInterceptorFn } from '@angular/common/http';
// import { environment } from '../../environments/environment';

// const crypto = require('node:crypto');
// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const body:string = JSON.stringify(req.body);
//   const url:string = req.url;
//   const message:string = url+environment.apiUserName+environment.authKeyNameFaktura+body;
//   const messageHash = crypto.createHmac('sha1',environment.authKeyFaktura)
//     .update(message)
//     .digest('hex');
//   const authReq = req.clone({
//     headers:req.headers
//       .set('Accept','application/json')
//       .set('Content-type','application/json; charset=UTF-8')
//       .set('Authentication','IAPIS user='+environment.apiUserName+", hmac-sha1="+messageHash)
//   });
  
//   return next(authReq);
// };
