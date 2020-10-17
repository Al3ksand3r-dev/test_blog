const DataStore = require("nedb-promise");
const blogs = new DataStore({ filename: "./db/blogs.db", autoload: true });
module.exports = {
  async getAll(userID) {
    return await blogs.find({ owner: userID });
  },
  async create(body, userID) {
    if (body.title == "" || body.text == "") return;
    const newBlog = await blogs.insert({
      title: body.title,
      content: body.text,
      owner: userID,
    });
    return {
      title: newBlog.title,
      content: newBlog.content,
    };
  },
};
