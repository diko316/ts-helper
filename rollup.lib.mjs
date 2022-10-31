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

function getBuildInfo(options) {
  const config = options || {};
  const isMonoRepo = config.isMonoRepo === true;
  const settings = JSON.parse(readFileSync('./package.json'));
  const fullModuleName = settings.name;
  const moduleName = fullModuleName.replace(/@[^/]+\//, '');
  const sourceDirectory = config.sourceDirectory || 'lib';
  const relativeSourceDirectory =
    config.relativeSourceDirectory || `./${sourceDirectory}`;
  const relativeDestinationDirectory =
    config.relativeDestinationDirectory || `./dist`;

  return {
    fullModuleName: fullModuleName,
    moduleName: moduleName,
    sourceDirectory: sourceDirectory,
    relativeSourceDirectory: relativeSourceDirectory,
    relativeDestinationDirectory: isMonoRepo
      ? `${relativeDestinationDirectory}/${moduleName}`
      : relativeDestinationDirectory,
    entryFiles: config.entryFiles || listFiles(relativeSourceDirectory, ['ts']),
    umdEntryFile: config.entryFile || `./${sourceDirectory}/index.ts`,
    tsConfigFile: fileExist('tsconfig.build.json')
      ? `tsconfig.build.json`
      : `tsconfig.json`,
  };
}

function createPlugins(options) {
  const settings = options.buildSettings;
  const commonCompilerOptionOverrides = {
    paths: {},
    composite: false,
    outDir: settings.relativeDestinationDirectory,
  };
  const tsOverrides = options.emitDeclarations
    ? {
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            ...commonCompilerOptionOverrides,
            rootDir: settings.relativeSourceDirectory,
            declaration: true,
            declarationDir: settings.relativeDestinationDirectory,
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
      tsconfig: settings.tsConfigFile,
      clean: true,
      ...tsOverrides,
    }),

    // auto external
    options.externals ? autoExternal() : null,

    // buble
    options.es5
      ? buble({
          objectAssign: true,
          include: ['**/*.js', '**/*.ts'],
          exclude: ['**/*.d.ts'],
        })
      : null,

    // rename directories
    // options.renameDirectories
    //   ? rename({
    //       include: ['**/*.js', '**/*.js.map', '**/*.ts'],
    //       map: (name) => name.replace(`${SRC_DIR}/`, ''),
    //     })
    //   : null,

    // options.renameExtension ? renameExtension(options.renameExtension) : null,

    options.minify ? terser() : null,
  ].filter((plugin) => !!plugin);
}

export function umd(options) {
  const overrides = options || {};
  const buildSettings = getBuildInfo(options);

  return {
    input: buildSettings.umdEntryFile,
    output: {
      dir: buildSettings.relativeDestinationDirectory,
      format: 'umd',
      name: `$${buildSettings.moduleName}`,
      esModule: false,
      sourcemap: true,
      ...(overrides.output || {}),
    },
    plugins: createPlugins({
      buildSettings: buildSettings,
      renameDirectories: true,
      minify: true,
      es5: true,
      ...(overrides.plugin || {}),
    }),
  };
}

export function cjs(options) {
  const overrides = options || {};
  const buildSettings = getBuildInfo(options);

  return {
    input: buildSettings.entryFiles,
    output: {
      dir: buildSettings.relativeDestinationDirectory,
      entryFileNames: '[name].cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      ...(overrides.output || {}),
    },
    plugins: createPlugins({
      buildSettings: buildSettings,
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
  const buildSettings = getBuildInfo(options);

  return {
    input: buildSettings.entryFiles,
    output: {
      dir: buildSettings.relativeDestinationDirectory,
      entryFileNames: '[name].mjs',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
      ...(overrides.output || {}),
    },
    plugins: createPlugins({
      buildSettings: buildSettings,
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

export function all(options) {
  return [umd(options), cjs(options), esm(options)];
}
