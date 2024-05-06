import express from 'express';
import fs from 'fs';
import { AddressInfo } from 'net';

const app = express();

const PORT = 8080;

app.get('/post-codes', (req, res) => {
  fs.readFile(__dirname + '/' + 'data.json', 'utf8', (err, data) => {
    // console.log({ data });
    res.send(data);
  });
});

const server = app.listen(PORT, () => {
  const host = (server.address() as AddressInfo).address;
  const port = (server.address() as AddressInfo).port;
  console.log(`Running on port ${PORT}`);
});
