#!/bin/sh

cd $(dirname $(dirname $(readlink -f $0)))

npm uninstall --save $(cat package.json | jq -r '(.dependencies | keys[])')
npm uninstall --save-dev $(cat package.json | jq -r '(.devDependencies | keys[])')
rm -Rf node_modules package-lock.json

npm install --save-dev \
  @babel/eslint-parser \
  @betit/rollup-plugin-rename-extensions \
  @rollup/plugin-buble \
  @rollup/plugin-eslint \
  @rollup/plugin-node-resolve \
  @types/jest \
  @types/node \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  jest \
  npm-run-all \
  prettier \
  rimraf \
  rollup \
  rollup-plugin-auto-external \
  rollup-plugin-peer-deps-external \
  rollup-plugin-prettier \
  rollup-plugin-rename \
  rollup-plugin-terser \
  rollup-plugin-typescript2 \
  ts-jest \
  ts-node \
  tsc \
  typescript

npm install --save \
  reflect-metadata \
  tslib
