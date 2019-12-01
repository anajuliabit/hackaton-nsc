const { saveMessage } = require("../service/DashBoardService");

module.exports = {
  async getMessage(req, res) {
    try {
      const { message } = req.body;
      const response = await saveMessage(message);

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
