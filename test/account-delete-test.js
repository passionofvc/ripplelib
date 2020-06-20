/* eslint-disable max-len */

'use strict';

const assert = require('assert');
const lodash = require('lodash');
const Transaction = require('../src/index.js').Transaction;
const TransactionQueue = require('../src/index.js').TransactionQueue;
const Remote = require('../src/index.js').Remote;
const Server = require('../src/index.js').Server;
const sjcl = require('../src/index.js').sjcl;

const transactionResult = {
  engine_result: 'tesSUCCESS',
  engine_result_code: 0,
  engine_result_message: 'The transaction was applied.',
  ledger_hash: '2031E311FD28A6B37697BD6ECF8E6661521902E7A6A8EF069A2F3C628E76A322',
  ledger_index: 7106144,
  status: 'closed',
  type: 'transaction',
  validated: true,
  metadata: {
    AffectedNodes: [ ],
    TransactionIndex: 0,
    TransactionResult: 'tesSUCCESS'
  },
  tx_json: {
    Account: 'rHPotLj3CNKaP4bQANcecEuT8hai3VpxfB',
    Amount: '1000000',
    Destination: 'rYtn3D1VGQyf1MTqcwLDepUKm22YEGXGJA',
    Fee: '10',
    Flags: 0,
    LastLedgerSequence: 7106151,
    Sequence: 2973,
    SigningPubKey: '0306E9F38DF11402953A5B030C1AE8A88C47E348170C3B8EC6C8D775E797168462',
    TransactionType: 'Payment',
    TxnSignature: '3045022100A58B0460BC5092CB4F96155C19125A4E079C870663F1D5E8BBC9BDEE06D51F530220408A3AA26988ABF18E16BE77B016F25018A2AA7C99FFE723FC8598471357DBCF',
    date: 455660500,
    hash: '61D60378AB70ACE630B20A81B50708A3DB5E7CEE35914292FF3761913DA61DEA'
  }
};

describe('AccountDelete', function() {
  before(function() {
    sjcl.random.addEntropy(
      '3045022100A58B0460BC5092CB4F96155C19125A4E079C870663F1D5E8BBC9BD', 256);
  });

  it('Construct AccountDelete transaction', function() {
    const transaction = new Transaction().accountDelete(
      'rsLEU1TPdCJPPysqhWYw9jD97xtG5WqSJm',
      'r36xtKNKR43SeXnGn7kN4r4JdQzcrkqpWe'
    );
    console.log(transaction.tx_json);

    assert(transaction instanceof Transaction);
    assert.deepEqual(transaction.tx_json, {
      Flags: 0,
      TransactionType: 'AccountDelete',
      Account: 'rsLEU1TPdCJPPysqhWYw9jD97xtG5WqSJm',
      Destination: 'r36xtKNKR43SeXnGn7kN4r4JdQzcrkqpWe',
      Fee: '5000000'
    });
  });

  it('Construct AccountDelete transaction - params object', function() {
    const transaction = new Transaction().accountDelete({
      account: 'rsLEU1TPdCJPPysqhWYw9jD97xtG5WqSJm',
      destination: 'r36xtKNKR43SeXnGn7kN4r4JdQzcrkqpWe'
    });

    console.log(transaction.tx_json);
    assert(transaction instanceof Transaction);
    assert.deepEqual(transaction.tx_json, {
      Flags: 0,
      TransactionType: 'AccountDelete',
      Account: 'rsLEU1TPdCJPPysqhWYw9jD97xtG5WqSJm',
      Destination: 'r36xtKNKR43SeXnGn7kN4r4JdQzcrkqpWe',
      Fee: '5000000'
    });
  });

  it('Construct AccountDelete transaction - invalid source account', function() {
    assert.throws(function() {
      new Transaction().accountDelete(
        'xrsLEU1TPdCJPPysqhWYw9jD97xtG5WqSJm',
        'r36xtKNKR43SeXnGn7kN4r4JdQzcrkqpWe'
      );
    });
  });

  it('Construct AccountDelete transaction - invalid destination', function() {
    assert.throws(function() {
      new Transaction().accountDelete(
        'rsLEU1TPdCJPPysqhWYw9jD97xtG5WqSJm',
        'xr36xtKNKR43SeXnGn7kN4r4JdQzcrkqpWe'
      );
    });
  });

});
