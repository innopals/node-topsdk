module.exports = {
  endpoint: process.env.TEST_TOP_ENDPOINT || 'http://gw.api.tbsandbox.com/router/rest',
  endpoint_https: process.env.TEST_TOP_ENDPOINT || 'https://gw.api.tbsandbox.com/router/rest',
  app_key: process.env.TEST_TOP_APP_KEY || '1023307190',
  app_secret: process.env.TEST_TOP_APP_SECRET || 'sandbox01eff1e5ac77cf3d078982e6e',
  session: process.env.TOPSDK_TEST_SESSION || '61019148c6ec24ead112b7109e0345ab97b3067583533ba2074082786'
}
