const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const style = fs.readFileSync(`${__dirname}/../client/style.css`);

const respond = (request, response, content, type) => {
  response.setHeader('Content-Type', type);
  response.write(content);
  response.end();
};

const getIndex = (request, response) => {
  respond(request, response, index, 'text/html');
};

const getStyle = (request, response) => {
  respond(request, response, style, 'text/css');
};

module.exports = {
  getIndex,
  getStyle,
};
