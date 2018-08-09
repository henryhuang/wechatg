/**
 * Created by Henry Huang on 2018/8/7.
 */
import fetch from 'node-fetch';
import { URL } from 'url';
import fs from 'fs';
import path from 'path';

export default (link, outputName) => {

  console.log(`Start crawl: ${link}`);

  const url = new URL(link);

  const fileName = `${outputName}.html`;
  const filePath = path.join(process.cwd(), 'result', fileName);

  fetch(url)
      .then(res => {
        return res.text();
      })
      .then(body => {
        fs.writeFileSync(filePath, body);
        console.log(`Output: ${filePath}`);
      });

}
