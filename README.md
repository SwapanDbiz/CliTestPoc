# CLI Test Automation Project

This project is a simple test automation framework built with Node.js, Mocha, and Chai to validate Git CLI commands.

## Project Structure

```
cli-automation/
  package.json
  test/
    gitCli.test.js
  utils/
    commandRunner.js
  README.md
```

## Prerequisites

- Node.js (v14 or later)
- Git installed on the system (CLI)

## Setup

1. Clone or download the repository.
2. Navigate to the project root directory.
3. Install dependencies:

```bash
npm install
```

## Running Tests

To execute the Mocha tests, run the following command:

```bash
npm test
```

## How it Works

1. **Command Execution**: The `utils/commandRunner.js` uses the Node.js `child_process.exec` method to run shell commands asynchronously.
2. **Result Capture**: It captures the standard output (`stdout`), standard error (`stderr`), and the process exit code.
3. **Assertions**: The tests in `test/gitCli.test.js` use the Chai assertion library to verify that the command outputs contain the expected strings and that the exit codes are successful (0).
4. **Logging**: Each command execution is logged to the console, showing the command being run and its output.

## Test Cases

### 1. git --version
- **Goal**: Verify that Git version information is returned.
- **Validations**: Exit code 0, stdout contains "git version".

### 2. git --help
- **Goal**: Verify that Git help documentation is accessible.
- **Validations**: Exit code 0, stdout contains "usage" and "git".
