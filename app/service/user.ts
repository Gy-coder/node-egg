"use strict";

import { Service } from "egg";

class UserService extends Service {
  async lists() {
    try {
      const { app } = this;
      const res = await app.mysql.select("Persons");
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async demo(id) {
    return {
      id,
      name: "john",
      age: 18,
    };
  }
  async detail(id) {
    try {
      const { app } = this;
      // @ts-ignore
      const res = app.mysql.get("Persons", { id });
      return res;
    } catch (error) {
      return null;
    }
  }
  async add(params) {
    try {
      const { app } = this;
      const res = app.mysql.insert("Persons", params);
      return res;
    } catch (error) {
      return null;
    }
  }
  async edit(params) {
    try {
      const { app } = this;
      const res = app.mysql.update("Persons", params);
      return res;
    } catch (error) {
      return null;
    }
  }
  async delete(id) {
    try {
      const { app } = this;
      const res = app.mysql.delete("Persons", { id });
      return res;
    } catch (error) {
      return null;
    }
  }
}

export default UserService;
