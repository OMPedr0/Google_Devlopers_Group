module.exports = {
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/LoginPage',
      },
    ];
  },
  reactStrictMode: true,
};
