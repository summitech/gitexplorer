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
  { value: 'stash', label: 'stash' },
  { value: 'debug', label: 'debug' },
  { value: 'recover', label: 'recover' },
  { value: 'synchronize', label: 'synchronize' },
  { value: 'rebase', label: 'rebase' },
  { value: 'cherrypick', label: 'cherry-pick' },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
