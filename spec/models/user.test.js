const User = require("../../models/user");
require("../mongodb_helper");
const mongoose = require("mongoose")

describe(User, () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a username, password and phone number, and knows if it is a admin ", () => {
    const user = new User({
      username: "bob",
      password: "password",
      admin: false,
      phone: 111
    });

    expect(user.username).toBe("bob");
    expect(user.password).toBe("password");
    expect(user.admin).toBe(false);
    expect(user.phone).toBe("111");
  });
});