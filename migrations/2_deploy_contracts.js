const Store = artifacts.require('OnlineStore')
module.exports = async (deployer) => {
  const [_feeAccount] = await web3.eth.getAccounts()
  const _name = 'Global Products'
  const _feePercent = 10
  await deployer.deploy(
    Store,
    _name,
    _feeAccount,
    _feePercent
  )
}