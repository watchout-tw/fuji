# fuji

> Build Watchout services with nuxt.js

## New repo
```bash
cp -r fuji [repo name]
cd [repo_name]
rm -rf .git
```

## Customize this template for each

### `nuxt.config.js`
- `head`
  - `title`
  - `description`
  - icons in `link`
- `loading`
  - `color` - 應該要符合服務或頻道的標準色
- `modules`
  - GTM ID

### `package.json`
- `name`
- `description`
- `config`
  - `nuxt.port` - 建議從9000開始

### `README.md`
- Title
- Description

### `layouts/default.vue`
- `data()`
  - `channel`

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:[port]
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
