const ENV = process.env.NODE_ENV || ''

module.exports = {
    ENV,
    isPrdDev: ENV === 'prd_dev',
    isPrd: ENV === 'production',
    isDev: ENV === 'dev',
    isTestLocal: ENV === 'test_local',
    isTestRemote: ENV === 'test_remote',
}
