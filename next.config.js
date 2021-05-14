module.exports = {
  async redirects() {
    return [
      {
        source: '/library',
        destination: '/library/offensive-basketball-plays-for-elementary-boys',
        permanent: true,
      },
    ]
  }
}