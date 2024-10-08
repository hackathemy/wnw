const WNW_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      { indexed: false, internalType: 'bool', name: 'betUp', type: 'bool' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'BetPlaced',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256'
      }
    ],
    name: 'Claimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      }
    ],
    name: 'GameCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lastPrice',
        type: 'uint256'
      }
    ],
    name: 'GameEnded',
    type: 'event'
  },
  {
    inputs: [],
    name: 'WETH',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'burnAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'duration', type: 'uint256' },
      { internalType: 'uint256', name: 'minAmount', type: 'uint256' },
      { internalType: 'address', name: 'tokenAddress', type: 'address' },
      { internalType: 'string', name: 'title', type: 'string' }
    ],
    name: 'createGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gameId', type: 'uint256' }],
    name: 'endGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'gameCounter',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'games',
    outputs: [
      { internalType: 'string', name: 'gameTitle', type: 'string' },
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'duration', type: 'uint256' },
      { internalType: 'uint256', name: 'markedPrice', type: 'uint256' },
      { internalType: 'uint256', name: 'lastPrice', type: 'uint256' },
      { internalType: 'uint256', name: 'minAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'upAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'downAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'prizeAmount', type: 'uint256' },
      { internalType: 'bool', name: 'isEnded', type: 'bool' },
      { internalType: 'contract IERC20', name: 'token', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getActiveGameList',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'gameTitle', type: 'string' },
          { internalType: 'uint256', name: 'gameId', type: 'uint256' },
          { internalType: 'uint256', name: 'startTime', type: 'uint256' },
          { internalType: 'uint256', name: 'duration', type: 'uint256' },
          { internalType: 'uint256', name: 'markedPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'lastPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'minAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'upAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'downAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'prizeAmount', type: 'uint256' },
          { internalType: 'bool', name: 'isEnded', type: 'bool' },
          { internalType: 'contract IERC20', name: 'token', type: 'address' },
          { internalType: 'address[]', name: 'betUsers', type: 'address[]' }
        ],
        internalType: 'struct BetMeme.Game[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getEndedGameList',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'gameTitle', type: 'string' },
          { internalType: 'uint256', name: 'gameId', type: 'uint256' },
          { internalType: 'uint256', name: 'startTime', type: 'uint256' },
          { internalType: 'uint256', name: 'duration', type: 'uint256' },
          { internalType: 'uint256', name: 'markedPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'lastPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'minAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'upAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'downAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'prizeAmount', type: 'uint256' },
          { internalType: 'bool', name: 'isEnded', type: 'bool' },
          { internalType: 'contract IERC20', name: 'token', type: 'address' },
          { internalType: 'address[]', name: 'betUsers', type: 'address[]' }
        ],
        internalType: 'struct BetMeme.Game[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gameId', type: 'uint256' }],
    name: 'getGame',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'gameTitle', type: 'string' },
          { internalType: 'uint256', name: 'gameId', type: 'uint256' },
          { internalType: 'uint256', name: 'startTime', type: 'uint256' },
          { internalType: 'uint256', name: 'duration', type: 'uint256' },
          { internalType: 'uint256', name: 'markedPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'lastPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'minAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'upAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'downAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'prizeAmount', type: 'uint256' },
          { internalType: 'bool', name: 'isEnded', type: 'bool' },
          { internalType: 'contract IERC20', name: 'token', type: 'address' },
          { internalType: 'address[]', name: 'betUsers', type: 'address[]' }
        ],
        internalType: 'struct BetMeme.Game',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getGameList',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'gameTitle', type: 'string' },
          { internalType: 'uint256', name: 'gameId', type: 'uint256' },
          { internalType: 'uint256', name: 'startTime', type: 'uint256' },
          { internalType: 'uint256', name: 'duration', type: 'uint256' },
          { internalType: 'uint256', name: 'markedPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'lastPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'minAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'upAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'downAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'prizeAmount', type: 'uint256' },
          { internalType: 'bool', name: 'isEnded', type: 'bool' },
          { internalType: 'contract IERC20', name: 'token', type: 'address' },
          { internalType: 'address[]', name: 'betUsers', type: 'address[]' }
        ],
        internalType: 'struct BetMeme.Game[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gameId', type: 'uint256' }],
    name: 'getGameTitle',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gameId', type: 'uint256' }],
    name: 'getUserBet',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'gameId', type: 'uint256' },
          { internalType: 'bool', name: 'betUp', type: 'bool' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'string', name: 'status', type: 'string' }
        ],
        internalType: 'struct BetMeme.UserBet',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getUsersBetList',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'gameId', type: 'uint256' },
          { internalType: 'bool', name: 'betUp', type: 'bool' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'string', name: 'status', type: 'string' }
        ],
        internalType: 'struct BetMeme.UserBet[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'userBets',
    outputs: [
      { internalType: 'uint256', name: 'gameId', type: 'uint256' },
      { internalType: 'bool', name: 'betUp', type: 'bool' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'string', name: 'status', type: 'string' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];

export default WNW_ABI;