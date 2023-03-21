import prompts from 'prompts';
import chalk from 'chalk';

enum Difficulty {
  Easy,
  Normal,
  Hard,
}

const main = async () => {
  const { choice } = await prompts({
    type: 'select',
    name: 'choice',
    message: 'Select difficulty',
    choices: [
      { title: 'Easy', value: Difficulty.Easy },
      { title: 'Normal', value: Difficulty.Normal },
      { title: 'Hard', value: Difficulty.Hard },
    ],
  });

  let score = 0;

  for (let i = 0; i < 10; i++) {
    let a = 0;
    let b = 0;

    if (choice === Difficulty.Easy || choice === Difficulty.Normal) {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
    } else if (choice === Difficulty.Hard) {
      a = Math.floor(Math.random() * 100);
      b = Math.floor(Math.random() * 100);
    }

    switch (choice) {
      case Difficulty.Easy: {
        const operation = Math.random() > 0.5 ? '+' : '*';

        const { answer } = await prompts({
          type: 'number',
          name: 'answer',
          message: `${a} ${operation} ${b} = ?`,
        });

        if (operation === '+') {
          if (a + b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a + b}`));
          }
        } else if (operation === '*') {
          if (a * b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a * b}`));
          }
        }

        break;
      }
      case Difficulty.Normal: {
        const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

        if (operation === '-') {
          a = Math.max(a, b);
          b = Math.min(a, b);
        }

        if (operation === '/') {
          a = a * b;
        }

        const { answer } = await prompts({
          type: 'number',
          name: 'answer',
          message: `${a} ${operation} ${b} = ?`,
        });

        if (operation === '+') {
          if (a + b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a + b}`));
          }
        }

        if (operation === '-') {
          if (a - b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a - b}`));
          }
        }

        if (operation === '*') {
          if (a * b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a * b}`));
          }
        }

        if (operation === '/') {
          if (a / b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a / b}`));
          }
        }
        break;
      }
      case Difficulty.Hard: {
        const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

        if (operation === '/') {
          a = a * b;
        }

        const { answer } = await prompts({
          type: 'number',
          name: 'answer',
          message: `${a} ${operation} ${b} = ?`,
        });

        if (operation === '+') {
          if (a + b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a + b}`));
          }
        }

        if (operation === '-') {
          if (a - b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a - b}`));
          }
        }

        if (operation === '*') {
          if (a * b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a * b}`));
          }
        }

        if (operation === '/') {
          if (a / b === answer) {
            score++;
          } else {
            console.log(chalk.red(`Wrong answer! Correct was: ${a / b}`));
          }
        }
        break;
      }
    }
  }

  let colouredScore: string;

  if (score < 5) {
    colouredScore = chalk.red(score.toString());
  } else if (score < 8) {
    colouredScore = chalk.yellow(score.toString());
  } else {
    colouredScore = chalk.green(score.toString());
  }

  console.log(`Your score is ${colouredScore} / 10`);
};

main();
