const { expect } = require('chai');
const { runCommand } = require('../utils/commandRunner');

describe('Git CLI Test Suite', () => {

  /**
   * Test Case 1: git --version
   * Validation:
   * - Exit code should be 0
   * - stdout should contain "git version"
   */
  it('should validate git --version output', async () => {
    const result = await runCommand('git --version');
    
    // Validate exit code
    expect(result.code).to.equal(0, 'Exit code should be 0');
    
    // Validate stdout contains "git version"
    expect(result.stdout.toLowerCase()).to.include('git version', 'Output should contain "git version"');
  });

  /**
   * Test Case 2: git --help
   * Validation:
   * - Exit code should be 0
   * - stdout should contain "usage" and "git"
   */
  it('should validate git --help output', async () => {
    const result = await runCommand('git --help');
    
    // Validate exit code
    expect(result.code).to.equal(0, 'Exit code should be 0');
    
    // Validate stdout contains "usage" and "git"
    const stdoutLower = result.stdout.toLowerCase();
    expect(stdoutLower).to.include('usage', 'Output should contain "usage"');
    expect(stdoutLower).to.include('git', 'Output should contain "git"');
  });

});
