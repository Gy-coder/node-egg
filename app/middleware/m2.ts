module.exports = () => {
  return async (ctx, next) => {
    console.log("m2 start");
    await next();
    console.log("m2 end");
  };
};
