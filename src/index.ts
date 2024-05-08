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

  const postcodeList = postcode.split(',');
  // console.log({ postcode, postcodeList });

  fs.readFile(__dirname + '/data/' + 'data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const postcodes = JSON.parse(data);
    // @ts-ignore
    const result = postcodes.filter((item) => {
      if (postcodeList.includes(item?.postcode)) {
        return item;
      }
    });

    // @ts-ignore
    const finalResult = result.map((item) => {
      return {
        id: item?.id,
        state: item?.state,
        postcode: item?.postcode,
        locatlity: item.locality,
      };
    });

    if (finalResult.length >= 1) {
      res.send(finalResult);
    } else {
      res.send('No results found');
    }
  });
});

const server = app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
