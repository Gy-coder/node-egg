// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHttpLog from '../../../app/middleware/httpLog';
import ExportM1 from '../../../app/middleware/m1';
import ExportM2 from '../../../app/middleware/m2';

declare module 'egg' {
  interface IMiddleware {
    httpLog: typeof ExportHttpLog;
    m1: typeof ExportM1;
    m2: typeof ExportM2;
  }
}
