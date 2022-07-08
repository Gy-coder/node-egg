import dayjs from "dayjs";
import fs from "fs";
import { Context } from "egg";

export default (option) => {
  return async (ctx: Context, next) => {
    console.log("option:", option);
    const sTime = new Date();
    const startTime = dayjs(sTime).format("YYYY-MM-DD HH:mm:ss");
    const req = ctx.request;
    await next();
    const log = {
      method: req.method,
      url: req.url,
      data: req.body,
      startTime,
      endTime: dayjs(sTime).format("YYYY-MM-DD HH:mm:ss"),
      timeLength: Number(new Date()) - Number(sTime),
    };
    console.log("log:", log);
    const data =
      dayjs(sTime).format("YYYY-MM-DD HH:mm:ss") +
      " [httpLog] " +
      JSON.stringify(log) +
      "\r\n";
    fs.appendFileSync(ctx.app.baseDir + "/httpLog.log", data);
  };
};
