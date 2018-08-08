const test = require('tape');
const app = require('../index.js');

test(`always works`, (t) => {
  t.true(app.returnTrue());
  t.end();
});
