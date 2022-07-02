import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const session = ctx.session.user;
    console.log("session", session);

    const user = ctx.cookies.get("user");
    await ctx.render("user.html", {
      id: 100,
      name: "admin",
      lists: ["java", "php", "js", "ts", "css"],
      user: user ? JSON.parse(user) : null,
    });
  }
  public async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.cookies.set("user", JSON.stringify(body), {
      maxAge: 1000 * 60 * 10,
      httpOnly: false,
    });

    ctx.session.user = body;
    ctx.body = {
      status: 200,
      data: body,
    };
  }
  public async logout() {
    const { ctx } = this;
    ctx.session.user = null;
    ctx.cookies.set("user", null);
    ctx.body = {
      status: 200,
    };
  }
  public async lists() {
    const { ctx } = this;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    ctx.body = [{ id: "123" }];
  }
  public async demo() {
    const { ctx } = this;
    const res = await ctx.service.user.demo(100);
    console.log("ctx:query", ctx.query);
    console.log("res:", res);
    ctx.body = ctx.query.id;
  }
  public demo2() {
    const { ctx } = this;
    console.log("ctx:params", ctx.params);
    ctx.body = ctx.params;
  }
  public add() {
    const { ctx } = this;
    const rule = {
      name: { type: "string" },
      age: { type: "number" },
    };
    ctx.validate(rule);
    console.log("ctx.request.body", ctx.request.body);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
  public async del() {
    const { ctx } = this;
    console.log("delete", ctx.request.body);
    ctx.body = ctx.request.body;
  }
}
