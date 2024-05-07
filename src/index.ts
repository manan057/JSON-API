import express from 'express';
import fs from 'fs';
import { AddressInfo } from 'net';

const app = express();
const PORT = 8080;

app.get('/post-codes', (req, res) => {
  fs.readFile(__dirname + '/data/' + 'data.json', 'utf8', (err, data) => {
    // console.log({ data });
    res.send(data);
  });
});

// 8785  6000,6107,6155
app.get('/api/search/:postcode', (req, res) => {
  const postcode = req.params.postcode;
  console.log({ postcode });

  fs.readFile(__dirname + '/data/' + 'data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // TODO - parse through an array of data
    const postcodes = JSON.parse(data);
    // @ts-ignore
    const result = postcodes.filter((item) => {
      if (String(item?.postcode) === postcode) {
        return item;
      }
    });

    res.send(result);
  });
});

const server = app.listen(PORT, () => {
  const host = (server.address() as AddressInfo).address;
  const port = (server.address() as AddressInfo).port;
  console.log(`Running on port ${PORT}`);
});
