import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);
  router.get("/user", controller.user.index);
  router.get("/user/lists", controller.user.lists);
  router.get("/user/demo", controller.user.demo);
  router.get("/user/demo2/:id", controller.user.demo2);
  router.post("/user/add", controller.user.add);
  router.del("/user/delete", controller.user.del);
  router.post("/user/login", controller.user.login);
  router.post("/user/logout", controller.user.logout);
  router.post("/user/edit", controller.user.edit);
};

// /user/:id
