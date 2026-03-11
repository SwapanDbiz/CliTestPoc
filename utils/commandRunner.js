const { exec } = require('child_process');

/**
 * Reusable utility to execute shell commands.
 * Captures stdout, stderr, and exit code.
 */
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    console.log(`Executing command: ${command}`);
    
    exec(command, (error, stdout, stderr) => {
      const result = {
        stdout: stdout ? stdout.trim() : '',
        stderr: stderr ? stderr.trim() : '',
        code: error ? error.code : 0,
      };

      // Logging for command output
      if (result.stdout) {
        console.log(`[STDOUT]: ${result.stdout}`);
      }
      if (result.stderr) {
        console.error(`[STDERR]: ${result.stderr}`);
      }

      // We resolve even if there is an error code, 
      // as some commands might intentionally return non-zero exit codes.
      // The test cases will handle the validation.
      resolve(result);
    });
  });
};

module.exports = {
  runCommand,
};
