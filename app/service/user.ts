'use strict';

import { Service } from 'egg';

class UserService extends Service {
  async demo(id) {
    return {
      id,
      name: 'john',
      age: 18,
    };
  }
}

export default UserService;
