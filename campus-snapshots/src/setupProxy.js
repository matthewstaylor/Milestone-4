const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    proxy("/~cen4010fal19_g12/campus_snapshots/server/**", {
      target: "http://lamp.cse.fau.edu"
    })
  );
};
