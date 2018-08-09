/**
 * Created by Henry Huang on 2018/8/7.
 */
import crawler from './crawler';
import prompt from 'prompt';
import uuid from 'uuid/v1';

prompt.message = null;

prompt.start();

const tempOutputName = uuid();

const properties = [
  {
    name: 'url',
    required: true
  }, {
    name: 'outputFileName',
    default: tempOutputName,
  }
];

prompt.get(properties, (err, result) => {
  if (err) {
    throw err;
  }
  const { url, outputFileName } = result;
  crawler(url, outputFileName);
});

