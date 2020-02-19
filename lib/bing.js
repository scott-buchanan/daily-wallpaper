const { logError } = require("./util");
const got = require("got");

module.exports = class Bing {
  constructor() {
    this.api =
      "https://bing.com/HPImageArchive.aspx?format=js&idx=0&n=2&mkt=en-ca";
  }

  async getDaily() {
    try {
      const { body } = await got(this.api, {
        json: true
      });
      console.log(body.images);
      return `https://bing.com/${body.images[0].url}`;
    } catch (error) {
      logError("Network is not good, please try again");
    }

    return "";
  }

  async getRandom() {
    try {
      const { headers } = await got(
        "https://source.unsplash.com/collection/1065976/1920x1080",
        {
          followRedirect: false
        }
      );

      return headers.location;
    } catch (error) {
      logError("Network is not good, please try again");
    }

    return "";
  }
};
