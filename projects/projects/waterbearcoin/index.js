const { getUniTVL } = require('../helper/unknownTokens');

module.exports = {
  methodology: "TVL is calculated based on the WBC/BNB liquidity pool on PancakeSwap",
  bsc: {
    tvl: getUniTVL({
      factory: '0xca143ce32fe78f1f7019d7d551a6402fc5350c73', // PancakeSwap v2 Factory
      useDefaultCoreAssets: true,
      includeLPs: true,
      blacklist: [],
    }),
  },
};
