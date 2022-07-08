import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import * as p from "path";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1656680424801_8920";

  // add your egg config in here
  config.middleware = ["httpLog"];
  config.httpLog = {
    type: "fuck",
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    mapping: {
      ".html": "ejs",
    },
    root: [
      p.join(appInfo.baseDir, "app/html"),
      p.join(appInfo.baseDir, "app/view"),
    ].join(","),
  };
  config.ejs = {
    // delimiters: "$",
  };
  config.static = {
    prefix: "/public/",
  };
  config.session = {
    key: "MUKE_SESS",
    maxAge: 1000 * 50,
  };
  config.mysql = {
    client: {
      // host
      host: "127.0.0.1",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "",
      // 数据库名
      database: "egg",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
