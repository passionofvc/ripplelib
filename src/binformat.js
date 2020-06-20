'use strict';

/*eslint no-multi-spaces:0,space-in-brackets:0,key-spacing:0,comma-spacing:0*/

/**
 * Data type map.
 *
 * Mapping of type ids to data types. The type id is specified by the high
 *
 * For reference, see rippled's definition:
 * https://github.com/ripple/rippled/blob/develop/src/ripple/protocol/impl/SField.cpp
 */

exports.types = [undefined,

// Common
'Int16', // 1
'Int32', // 2
'Int64', // 3
'Hash128', // 4
'Hash256', // 5
'Amount', // 6
'VL', // 7
'Account', // 8

// 9-13 reserved
undefined, // 9
undefined, // 10
undefined, // 11
undefined, // 12
undefined, // 13

'Object', // 14
'Array', // 15

// Uncommon
'Int8', // 16
'Hash160', // 17
'PathSet', // 18
'Vector256' // 19
];

/**
 * Field type map.
 *
 * Mapping of field type id to field type name.
 */

var FIELDS_MAP = exports.fields = {
  // Common types
  1: { // Int16
    1: 'LedgerEntryType',
    2: 'TransactionType',
    3: 'SignerWeight'
  },
  2: { // Int32
    2: 'Flags',
    3: 'SourceTag',
    4: 'Sequence',
    5: 'PreviousTxnLgrSeq',
    6: 'LedgerSequence',
    7: 'CloseTime',
    8: 'ParentCloseTime',
    9: 'SigningTime',
    10: 'Expiration',
    11: 'TransferRate',
    12: 'WalletSize',
    13: 'OwnerCount',
    14: 'DestinationTag',
    // Skip 15
    16: 'HighQualityIn',
    17: 'HighQualityOut',
    18: 'LowQualityIn',
    19: 'LowQualityOut',
    20: 'QualityIn',
    21: 'QualityOut',
    22: 'StampEscrow',
    23: 'BondAmount',
    24: 'LoadFee',
    25: 'OfferSequence',
    26: 'FirstLedgerSequence',
    27: 'LastLedgerSequence',
    28: 'TransactionIndex',
    29: 'OperationLimit',
    30: 'ReferenceFeeUnits',
    31: 'ReserveBase',
    32: 'ReserveIncrement',
    33: 'SetFlag',
    34: 'ClearFlag',
    35: 'SignerQuorum',
    36: 'CancelAfter',
    37: 'FinishAfter',
    38: 'SignerListID',
    39: 'SettleDelay'
  },
  3: { // Int64
    1: 'IndexNext',
    2: 'IndexPrevious',
    3: 'BookNode',
    4: 'OwnerNode',
    5: 'BaseFee',
    6: 'ExchangeRate',
    7: 'LowNode',
    8: 'HighNode'
  },
  4: { // Hash128
    1: 'EmailHash'
  },
  5: { // Hash256
    1: 'LedgerHash',
    2: 'ParentHash',
    3: 'TransactionHash',
    4: 'AccountHash',
    5: 'PreviousTxnID',
    6: 'LedgerIndex',
    7: 'WalletLocator',
    8: 'RootIndex',
    9: 'AccountTxnID',
    16: 'BookDirectory',
    17: 'InvoiceID',
    18: 'Nickname',
    19: 'Amendment',
    20: 'TicketID',
    21: 'Digest',
    22: 'Channel'
  },
  6: { // Amount
    1: 'Amount',
    2: 'Balance',
    3: 'LimitAmount',
    4: 'TakerPays',
    5: 'TakerGets',
    6: 'LowLimit',
    7: 'HighLimit',
    8: 'Fee',
    9: 'SendMax',
    10: 'DeliverMin',
    16: 'MinimumOffer',
    17: 'RippleEscrow',
    18: 'DeliveredAmount'
  },
  7: { // VL
    1: 'PublicKey',
    2: 'MessageKey',
    3: 'SigningPubKey',
    4: 'TxnSignature',
    5: 'Generator',
    6: 'Signature',
    7: 'Domain',
    8: 'FundCode',
    9: 'RemoveCode',
    10: 'ExpireCode',
    11: 'CreateCode',
    12: 'MemoType',
    13: 'MemoData',
    14: 'MemoFormat',
    //skip 15
    16: 'Fulfillment',
    17: 'Condition',
    18: 'MasterSignature',
  },
  8: { // Account
    1: 'Account',
    2: 'Owner',
    3: 'Destination',
    4: 'Issuer',
    7: 'Target',
    8: 'RegularKey'
  },
  14: { // Object
    1: undefined, // end of Object
    2: 'TransactionMetaData',
    3: 'CreatedNode',
    4: 'DeletedNode',
    5: 'ModifiedNode',
    6: 'PreviousFields',
    7: 'FinalFields',
    8: 'NewFields',
    9: 'TemplateEntry',
    10: 'Memo',
    11: 'SignerEntry',
    16: 'Signer',
    // 17?
    18: 'Majority'
  },
  15: { // Array
    1: undefined, // end of Array
    2: 'SigningAccounts',
    3: 'Signers',
    4: 'SignerEntries',
    5: 'Template',
    6: 'Necessary',
    7: 'Sufficient',
    8: 'AffectedNodes',
    9: 'Memos',
    16: 'Majorities'
  },

  // Uncommon types
  16: { // Int8
    1: 'CloseResolution',
    2: 'Method',
    3: 'TransactionResult',
    16: 'TickSize'
  },
  17: { // Hash160
    1: 'TakerPaysCurrency',
    2: 'TakerPaysIssuer',
    3: 'TakerGetsCurrency',
    4: 'TakerGetsIssuer'
  },
  18: { // PathSet
    1: 'Paths'
  },
  19: { // Vector256
    1: 'Indexes',
    2: 'Hashes',
    3: 'Amendments'
  }
};

var INVERSE_FIELDS_MAP = exports.fieldsInverseMap = {};

Object.keys(FIELDS_MAP).forEach(function (k1) {
  Object.keys(FIELDS_MAP[k1]).forEach(function (k2) {
    INVERSE_FIELDS_MAP[FIELDS_MAP[k1][k2]] = [Number(k1), Number(k2)];
  });
});

var REQUIRED = exports.REQUIRED = 0,
    OPTIONAL = exports.OPTIONAL = 1,
    DEFAULT = exports.DEFAULT = 2;

var base = [['TransactionType', REQUIRED], ['Flags', OPTIONAL], ['SourceTag', OPTIONAL], ['Account', REQUIRED], ['Sequence', REQUIRED], ['PreviousTxnID', OPTIONAL], ['LastLedgerSequence', OPTIONAL], ['Fee', REQUIRED], ['OperationLimit', OPTIONAL], ['Memos', OPTIONAL], ['SigningPubKey', REQUIRED], ['TxnSignature', OPTIONAL], ['AccountTxnID', OPTIONAL], ['Signers', OPTIONAL]];

exports.tx = {
  AccountSet: [3].concat(base, [['EmailHash', OPTIONAL], ['WalletLocator', OPTIONAL], ['WalletSize', OPTIONAL], ['MessageKey', OPTIONAL], ['Domain', OPTIONAL], ['TransferRate', OPTIONAL], ['SetFlag', OPTIONAL], ['ClearFlag', OPTIONAL], ['TickSize', OPTIONAL]]),
  TrustSet: [20].concat(base, [['LimitAmount', OPTIONAL], ['QualityIn', OPTIONAL], ['QualityOut', OPTIONAL]]),
  OfferCreate: [7].concat(base, [['TakerPays', REQUIRED], ['TakerGets', REQUIRED], ['Expiration', OPTIONAL], ['OfferSequence', OPTIONAL]]),
  OfferCancel: [8].concat(base, [['OfferSequence', REQUIRED]]),
  SetRegularKey: [5].concat(base, [['RegularKey', OPTIONAL]]),
  Payment: [0].concat(base, [['Destination', REQUIRED], ['Amount', REQUIRED], ['SendMax', OPTIONAL], ['DeliverMin', OPTIONAL], ['Paths', DEFAULT], ['InvoiceID', OPTIONAL], ['DestinationTag', OPTIONAL]]),
  EnableAmendment: [100].concat(base, [['LedgerSequence', REQUIRED], ['Amendment', REQUIRED]]),
  SetFee: [101].concat(base, [['LedgerSequence', OPTIONAL], ['BaseFee', REQUIRED], ['ReferenceFeeUnits', REQUIRED], ['ReserveBase', REQUIRED], ['ReserveIncrement', REQUIRED]]),
  TicketCreate: [10].concat(base, [['Target', OPTIONAL], ['Expiration', OPTIONAL]]),
  TicketCancel: [11].concat(base, [['TicketID', REQUIRED]]),
  SignerListSet: [12].concat(base, [['SignerQuorum', REQUIRED], ['SignerEntries', OPTIONAL]]),
  EscrowCreate: [1].concat(base, [['Destination', REQUIRED], ['Amount', REQUIRED], ['Condition', OPTIONAL], ['CancelAfter', OPTIONAL], ['FinishAfter', OPTIONAL], ['DestinationTag', OPTIONAL]]),
  EscrowFinish: [2].concat(base, [['Owner', REQUIRED], ['OfferSequence', REQUIRED], ['Fulfillment', OPTIONAL], ['Condition', OPTIONAL]]),
  EscrowCancel: [4].concat(base, [['Owner', REQUIRED], ['OfferSequence', REQUIRED]]),
  PaymentChannelCreate: [13].concat(base, [['Destination', REQUIRED], ['Amount', REQUIRED], ['SettleDelay', REQUIRED], ['PublicKey', REQUIRED], ['CancelAfter', OPTIONAL], ['DestinationTag', OPTIONAL]]),
  PaymentChannelFund: [14].concat(base, [['Channel', REQUIRED], ['Amount', REQUIRED], ['Expiration', OPTIONAL]]),
  PaymentChannelClaim: [15].concat(base, [['Channel', REQUIRED], ['Amount', OPTIONAL], ['Balance', OPTIONAL], ['Signature', OPTIONAL], ['PublicKey', OPTIONAL]]),
  AccountDelete: [21].concat(base, [['Destination', REQUIRED], ['DestinationTag', OPTIONAL]]), //ttACCOUNT_DELETE    = 21
};

var sleBase = [['LedgerIndex', OPTIONAL], ['LedgerEntryType', REQUIRED], ['Flags', REQUIRED]];

exports.ledger = {
  AccountRoot: [97].concat(sleBase, [['Sequence', REQUIRED], ['PreviousTxnLgrSeq', REQUIRED], ['TransferRate', OPTIONAL], ['WalletSize', OPTIONAL], ['OwnerCount', REQUIRED], ['EmailHash', OPTIONAL], ['PreviousTxnID', REQUIRED], ['AccountTxnID', OPTIONAL], ['WalletLocator', OPTIONAL], ['Balance', REQUIRED], ['MessageKey', OPTIONAL], ['Domain', OPTIONAL], ['Account', REQUIRED], ['RegularKey', OPTIONAL], ['TickSize', OPTIONAL]]),
  DirectoryNode: [100].concat(sleBase, [['IndexNext', OPTIONAL], ['IndexPrevious', OPTIONAL], ['ExchangeRate', OPTIONAL], ['RootIndex', REQUIRED], ['Owner', OPTIONAL], ['TakerPaysCurrency', OPTIONAL], ['TakerPaysIssuer', OPTIONAL], ['TakerGetsCurrency', OPTIONAL], ['TakerGetsIssuer', OPTIONAL], ['Indexes', REQUIRED]]),
  Amendments: [102].concat(sleBase, [['Amendments', OPTIONAL], ['Majorities', OPTIONAL]]),
  FeeSettings: [115].concat(sleBase, [['ReferenceFeeUnits', REQUIRED], ['ReserveBase', REQUIRED], ['ReserveIncrement', REQUIRED], ['BaseFee', REQUIRED]]),
  LedgerHashes: [104].concat(sleBase, [['FirstLedgerSequence', OPTIONAL], ['LastLedgerSequence', OPTIONAL], ['Hashes', REQUIRED]]),
  Offer: [111].concat(sleBase, [['Sequence', REQUIRED], ['PreviousTxnLgrSeq', REQUIRED], ['Expiration', OPTIONAL], ['BookNode', REQUIRED], ['OwnerNode', REQUIRED], ['PreviousTxnID', REQUIRED], ['BookDirectory', REQUIRED], ['TakerPays', REQUIRED], ['TakerGets', REQUIRED], ['Account', REQUIRED]]),
  RippleState: [114].concat(sleBase, [['PreviousTxnLgrSeq', REQUIRED], ['HighQualityIn', OPTIONAL], ['HighQualityOut', OPTIONAL], ['LowQualityIn', OPTIONAL], ['LowQualityOut', OPTIONAL], ['LowNode', OPTIONAL], ['HighNode', OPTIONAL], ['PreviousTxnID', REQUIRED], ['Balance', REQUIRED], ['LowLimit', REQUIRED], ['HighLimit', REQUIRED]]),
  Escrow: [117].concat(sleBase, [['Account', REQUIRED], ['Destination', REQUIRED], ['Amount', REQUIRED], ['Condition', OPTIONAL], ['CancelAfter', OPTIONAL], ['FinishAfter', OPTIONAL], ['SourceTag', OPTIONAL], ['DestinationTag', OPTIONAL], ['OwnerNode', REQUIRED], ['PreviousTxnID', REQUIRED], ['PreviousTxnLgrSeq', REQUIRED]]),
  SignerList: [83].concat(sleBase, [['OwnerNode', REQUIRED], ['SignerQuorum', REQUIRED], ['SignerEntries', REQUIRED], ['SignerListID', REQUIRED], ['PreviousTxnID', REQUIRED], ['PreviousTxnLgrSeq', REQUIRED]]),
  Ticket: [84].concat(sleBase, [['Account', REQUIRED], ['Sequence', REQUIRED], ['OwnerNode', REQUIRED], ['Target', OPTIONAL], ['Expiration', OPTIONAL]]),
  PayChannel: [120].concat(sleBase, [['Account', REQUIRED], ['Destination', REQUIRED], ['Amount', REQUIRED], ['Balance', REQUIRED], ['PublicKey', REQUIRED], ['SettleDelay', REQUIRED], ['Expiration', OPTIONAL], ['CancelAfter', OPTIONAL], ['SourceTag', OPTIONAL], ['DestinationTag', OPTIONAL], ['OwnerNode', REQUIRED], ['PreviousTxnID', REQUIRED], ['PreviousTxnLgrSeq', REQUIRED]]),
};

exports.metadata = [['TransactionIndex', REQUIRED], ['TransactionResult', REQUIRED], ['AffectedNodes', REQUIRED]];

exports.ter = {
  tesSUCCESS: 0,
  tecCLAIM: 100,
  tecPATH_PARTIAL: 101,
  tecUNFUNDED_ADD: 102,
  tecUNFUNDED_OFFER: 103,
  tecUNFUNDED_PAYMENT: 104,
  tecFAILED_PROCESSING: 105,
  tecDIR_FULL: 121,
  tecINSUF_RESERVE_LINE: 122,
  tecINSUF_RESERVE_OFFER: 123,
  tecNO_DST: 124,
  tecNO_DST_INSUF_XRP: 125,
  tecNO_LINE_INSUF_RESERVE: 126,
  tecNO_LINE_REDUNDANT: 127,
  tecPATH_DRY: 128,
  tecUNFUNDED: 129, // Deprecated, old ambiguous unfunded.
  tecMASTER_DISABLED: 130,
  tecNO_REGULAR_KEY: 131,
  tecOWNERS: 132,
  tecNO_ISSUER: 133,
  tecNO_AUTH: 134,
  tecNO_LINE: 135,
  tecINSUFF_FEE: 136,
  tecFROZEN: 137,
  tecNO_TARGET: 138,
  tecNO_PERMISSION: 139,
  tecNO_ENTRY: 140,
  tecINSUFFICIENT_RESERVE: 141,
  tecNEED_MASTER_KEY: 142,
  tecDST_TAG_NEEDED: 143,
  tecINTERNAL: 144
};
