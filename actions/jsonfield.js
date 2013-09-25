exports.action = {
  name: "jsonfield",
  description: "jsonfield",
  inputs: {
    required: ["username", "userdata"],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  version: 1.0,
  run: function(api, connection, next){
    // your logic here
    next(connection, true);
  }
};
