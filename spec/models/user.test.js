const User = require("../../models/user");
require("../mongodb_helper");

describe(User, () => {
  // beforeEach((done) => {
  //   mongoose.connection.collections.users.drop(() => {
  //     done();
  //   });
  // });

  it("has email and password", () => {
    const user = new User({
      email: "test1@test.com",
      password: "password",
    });

    expect(user.email).toBe("test1@test.com");
    expect(user.password).toBe("password");
  });
});