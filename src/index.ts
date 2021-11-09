import { join } from 'path';
import { promisify } from 'util';
import { execFile as _execFile } from 'child_process';
import { Binary } from '@binary/type';

const execFile = promisify(_execFile);

export const HOME = join(__dirname, '..', 'binary');

export default <Binary>{
  homeDir: join(HOME, 'riscv32-esp-elf'),

  binaryDir: join(HOME, 'riscv32-esp-elf', 'bin'),

  async version() {
    const { stdout } = await execFile(join(this.binaryDir, 'riscv32-esp-elf-gcc'), ['--version']);
    return stdout.split('\n')[0].trim();
  }
};
