import { join, extname } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';

import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
// import renameExtensionPlugin from '@betit/rollup-plugin-rename-extensions';
import autoExternal from 'rollup-plugin-auto-external';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';
// import renamePlugin from 'rollup-plugin-rename';

// const rename = renamePlugin.default;
// const renameExtension = renameExtensionPlugin.default;

const settings = JSON.parse(readFileSync('./package.json'));
const SRC_DIR = 'lib';
const ENTRY_FILE = listFiles(`./${SRC_DIR}`, ['ts']);
const MODULE_PREFIX = 'dist';
const MODULE_NAME = settings.name.replace(/@[^/]+\//, '');
const TS_CONFIG_FILE = fileExist('tsconfig.build.json')
  ? `tsconfig.build.json`
  : `tsconfig.json`;

function listFiles(directory, extensions) {
  let list = readdirSync(directory);

  if (!list || !list.length) {
    return [];
  }

  list = list.map((file) => join(directory, file));

  if (extensions) {
    return list.filter((file) =>
      extensions.includes(extname(file).substring(1))
    );
  }

  return list;
}

function fileExist(path) {
  try {
    const stat = statSync(path);
    return stat.isFile();
  } catch (error) {
    return false;
  }
}

function createPlugins(options) {
  const config = options || {};
  const commonCompilerOptionOverrides = {
    paths: {},
    composite: false,
  };
  const tsOverrides = config.emitDeclarations
    ? {
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            ...commonCompilerOptionOverrides,
            rootDir: `./${SRC_DIR}`,
            declaration: true,
            declarationDir: './dist',
          },
        },
      }
    : {
        useTsconfigDeclarationDir: false,
        tsconfigOverride: {
          compilerOptions: {
            ...commonCompilerOptionOverrides,
            declaration: false,
          },
        },
      };

  return [
    // resolve
    resolve({
      jsnext: true,
      main: true,
    }),

    // typescript
    typescript({
      tsconfig: TS_CONFIG_FILE,
      clean: true,
      ...tsOverrides,
    }),

    // auto external
    config.externals ? autoExternal() : null,

    // buble
    config.es5
      ? buble({
          objectAssign: true,
          include: ['**/*.js', '**/*.ts'],
          exclude: ['**/*.d.ts'],
        })
      : null,

    // rename directories
    // config.renameDirectories
    //   ? rename({
    //       include: ['**/*.js', '**/*.js.map', '**/*.ts'],
    //       map: (name) => name.replace(`${SRC_DIR}/`, ''),
    //     })
    //   : null,

    // config.renameExtension ? renameExtension(config.renameExtension) : null,

    config.minify ? terser() : null,
  ].filter((plugin) => !!plugin);
}

export function umd(options) {
  const overrides = options || {};

  return {
    input: overrides.entryFile || `./${SRC_DIR}/index.ts`,
    output: {
      dir: `${MODULE_PREFIX}`,
      format: 'umd',
      name: `$${MODULE_NAME}`,
      esModule: false,
      sourcemap: true,
      ...(overrides.output || {}),
    },
    plugins: createPlugins({
      renameDirectories: true,
      minify: true,
      es5: true,
      ...(overrides.plugin || {}),
    }),
  };
}

export function cjs(options) {
  const overrides = options || {};

  return {
    input: overrides.entryFile || ENTRY_FILE,
    output: {
      dir: `${MODULE_PREFIX}`,
      entryFileNames: '[name].cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      ...(overrides.output || {}),
    },
    plugins: createPlugins({
      //renameDirectories: true,
      externals: true,
      es5: true,
      emitDeclarations: true,
      ...(overrides.plugin || {}),
    }),
  };
}

export function esm(options) {
  const overrides = options || {};

  return {
    input: overrides.entryFile || ENTRY_FILE,
    output: {
      dir: `${MODULE_PREFIX}`,
      entryFileNames: '[name].mjs',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
      ...(overrides.output || {}),
    },
    plugins: createPlugins({
      renameDirectories: true,
      externals: true,
      emitDeclarations: true,
      renameExtension: {
        include: ['**/*.js', '**/*.ts'],
        mappings: {
          '.js': '.mjs',
        },
      },
      ...(overrides.plugin || {}),
    }),
  };
}

export default [umd(), cjs(), esm()];
