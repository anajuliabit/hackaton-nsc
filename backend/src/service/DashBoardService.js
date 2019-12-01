const AWS = require("aws-sdk");
const comprehend = new AWS.Comprehend({ region: "us-west-2" });
const Message = require("../model/Messages");

module.exports = {
  async saveMessage(message) {
    try {
      const params = {
        Text: message,
        LanguageCode: "pt"
      };
      const model = await createModel(params);
      const data = await Message.create(model);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

async function getEntities(params) {
  const data = await comprehend.detectEntities(params).promise();
  const person = data.Entities.map(entity => {
    if (entity.Type === "PERSON") return entity.Text;
  });
  const location = data.Entities.map(entity => {
    if (entity.Type === "LOCATION") return entity.Text;
  });

  return {
    person: person[0],
    location: location.filter(location => location)[0]
  };
}

async function getKeyPhrases(params) {
  const data = await comprehend.detectKeyPhrases(params).promise();
  return data.KeyPhrases.map(keyPhrase => {
    return keyPhrase.Text;
  });
}

async function createModel(params) {
  const keyPhrases = await getKeyPhrases(params);
  const entities = await getEntities(params);
  return {
    person: entities.person,
    location: entities.location,
    text: keyPhrases,
    message: params.Text
  };
}
