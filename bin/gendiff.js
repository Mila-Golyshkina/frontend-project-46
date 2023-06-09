import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')

program
    .helpOption('-h, --help', 'output usage informaion')
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2) => {
        console.log(filepath1, filepath2);
    })
    
    
    

program.parse();