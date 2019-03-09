// tslint:disable-next-line:no-implicit-dependencies no-submodule-imports
import { PluggableProgramFactoryInterface } from 'fork-ts-checker-webpack-plugin/lib/PluggableProgramFactory'; // import for types alone
import { MdxProgram } from './MdxProgram';

export const MdxProgramFactory: PluggableProgramFactoryInterface = {
  loadProgram(config) {
    const programConfig =
      config.programConfig ||
      MdxProgram.loadProgramConfig(
        config.typescript,
        config.configFile,
        config.compilerOptions
      );

    const program = MdxProgram.createProgram(
      config.typescript,
      programConfig,
      config.files,
      config.watcher!,
      config.oldProgram!
    );

    return { program, programConfig };
  },
  watchExtensions: ['.ts', '.tsx', '.md', '.mdx']
};
