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
    // await new Promise<void>((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 2000);
    // });
    // const res = await ctx.service.user.lists();

    const res = await ctx.model.User.findAll();
    ctx.body = res;
  }
  public async demo() {
    const { ctx } = this;
    // const res = await ctx.service.user.demo(100);
    // console.log("ctx:query", ctx.query);
    // console.log("res:", res);
    const res = await ctx.model.User.findByPk(ctx.query.id);
    ctx.body = res;
  }
  public async demo2() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(ctx.params.id);
    ctx.body = res;
  }
  public async add() {
    const { ctx } = this;
    const rule = {
      name: { type: "string" },
      age: { type: "number" },
    };
    ctx.validate(rule);
    // console.log("ctx.request.body", ctx.request.body);
    // const res = await ctx.service.user.add(ctx.request.body);
    const res = await ctx.model.User.create(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }
  public async edit() {
    const { ctx } = this;
    // const res = await ctx.service.user.edit(ctx.request.body);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: "ID is not exist",
      };
      return;
    }
    const res = user.update(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }
  public async del(id) {
    const { ctx } = this;
    // @ts-ignore
    // const res = await ctx.service.user.delete(ctx.request.body.id);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: "ID is not exist",
      };
      return;
    }
    const res = user.destroy(ctx.request.body.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}
