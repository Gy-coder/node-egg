'use strict';

import { app } from 'egg-mock/bootstrap';

describe('user test', () => {
  it('user', () => {
    return app.httpRequest().get('/user').expect(200)
      .expect('213');
  });
  it('user lists', async () => {
    await app
      .httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect([{ id: '123' }]);
  });
  it('user detail', async () => {
    await app.httpRequest().get('/user/demo?id=123').expect(200)
      .expect('123');
  });
  it('user detail2', async () => {
    await app
      .httpRequest()
      .get('/user/demo2/213')
      .expect(200)
      .expect({ id: '213' });
  });
  it('user add post', async () => {
    await app
      .httpRequest()
      .post('/user/add')
      .send({
        name: 'gy',
        age: 18,
      })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: 'gy',
          age: 18,
        },
      });
  });
  it('user add post2', async () => {
    await app
      .httpRequest()
      .post('/user/add')
      .send({
        name: 'gy',
        age: '18',
      })
      .expect(422);
  });
});
