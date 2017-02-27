const fs = require('fs');
//const csv = require('csv');
const parse = require('csv-parse/lib/sync');
const _ = require('lodash');

const filename = './data/sample-faqs.tsv';
const columns = [
  'no',
  'public',
  'serviceName',
  'category',
  'createdBy',
  'workflowStatus',
  'createDate',
  'updateDate',
  'title',
  'context',
  'language',
  'countOfView'];

let input = fs.readFileSync(filename,'utf-8');
let records = parse(input,{columns: columns,delimiter:'\t',comment:'#',from :2});
//console.dir(records);
const faqs = {};

// _.each(records,(ele,idx,ary)=>{
//   //console.log(idx + ' : ' + ele);
//   zips['No.' + ele.postNum] = ele;
// });

faqs.faq = records;
console.log(faqs);
