const fs = require('fs');
//const csv = require('csv');
const parse = require('csv-parse/lib/sync');
const _ = require('lodash');

const filename = './data/sample.tsv';
const columns = [
  'jis',
  'postNumOld',
  'postNum',
  'prefKana',
  'countryKana',
  'townKana',
  'pref',
  'country',
  'town',
  'etc1',
  'etc2',
  'etc3',
  'etc4',
  'etc5',
  'etc6'];

let input = fs.readFileSync(filename,'utf-8');
let records = parse(input,{columns: columns,delimiter:'\t',comment:'#'});
//console.dir(records);
const zips = {};

// _.each(records,(ele,idx,ary)=>{
//   //console.log(idx + ' : ' + ele);
//   zips['No.' + ele.postNum] = ele;
// });

zips.zips = records;
console.log(zips);
