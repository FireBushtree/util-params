import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'envcloud-utils-params',
  favicon:
    './images/logo.png',
  logo: '/util-params/images/logo.png',
  outputPath: 'docs-dist',
  base: '/util-params',
  publicPath: '/util-params/',
  hash: true,
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: 'css' },
      'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
