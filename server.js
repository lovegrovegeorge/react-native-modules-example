const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server').default;
var faker = require('faker');

const PORT = 8702;
const app = express();

// generate event data
const days = new Array(45).fill();
const events = [];

for(let i = 0; i<45; i++) {
  const day = new Date();
  day.setDate(day.getDate() + i);

  for(let ii = 0; ii<Math.ceil(Math.random()*10); ii++) {
    events.push(
      {
        id: faker.random.uuid(),
        starts: new Date(day),
        title: faker.fake("{{commerce.product}} {{hacker.verb}} "),
        description: faker.lorem.paragraph(),
        image: 'https://picsum.photos/400/200',
        long_description: faker.lorem.paragraphs(),
        price: faker.fake("{{finance.currencySymbol}} {{finance.amount}}"),
        location: null,
      }
    );
  };
};

const data = { events };

app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT);