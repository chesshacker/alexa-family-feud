/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
global.sinon = require('sinon');
chai.use(require('sinon-chai'));

global.should = chai.should();
