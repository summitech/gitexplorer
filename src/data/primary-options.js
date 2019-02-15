const options = [
  { value: 'add', label: 'add' },
  { value: 'commit', label: 'commit' },
  { value: 'revert', label: 'revert/reset' },
  { value: 'initialize', label: 'initialize' },
  { value: 'modify', label: 'modify' },
  { value: 'show', label: 'show/view' },
  { value: 'delete', label: 'delete/remove' },
  { value: 'compareCommits', label: 'compare two commits' },
  { value: 'configure', label: 'configure' },
  { value: 'clone', label: 'clone' },
  { value: 'ignore', label: 'ignore' },
  { value: 'rename', label: 'rename' },
  { value: 'merge', label: 'merge' },
  { value: 'squash', label: 'squash' },
  { value: 'debug', label: 'debug' },
  { value: 'recovery', label: 'recovery' },
  { value: 'synchronize', label: 'synchronize' }
];

export const primaryOptions = options.sort((x, y) => {
  return x.value - y.value;
});
