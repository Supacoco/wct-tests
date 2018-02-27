module.exports = {
  suites: ['test/index.html'],
  plugins: {
    local: {
      browsers: ['chrome']
    },
    sauce: {
      disabled: true
    },
    istanbub: {
      dir: './coverage',
      reporters: ['text-summary', 'lcov'],
      include: [
        '**/*.html'
      ],
      exclude: [
        '/test/'
      ]
      // thresholds: {
      //   global: {
      //     statements: 80,
      //     branches: 80,
      //     functions: 90,
      //     lines: 80
      //   }
      // }
    }
  }
}
