export const tertiaryOptions = {
  logs: [
    {
      value: 'all',
      label: 'all',
      usage: 'git log',
      nb: 'Type q in the terminal to exit the logs'
    },
    {
      value: 'last-n-commit',
      label: 'for last xxx number of commits',
      usage: 'git log -n',
      nb: 'Replace n with number of commits e.g. git log -2'
    },
    {
      value: 'particular-period',
      label: 'since a particular period',
      usage: 'git log --since=period',
      nb: 'Replace period with intended timeframe e.g git log --since=3days. You can use dates like 2018-12-31.\n\n Similar flags are --until, --before, --after'
    },
    {
      value: 'commit-on-oneline',
      label: 'with each commit on one line',
      usage: 'git log --oneline'
    },
    {
      value: 'patches-introduced',
      label: 'with the patches introduced in each commit',
      usage : 'git log -p'
    }
  ],
  branch: [
    {
      value: 'in',
      label: 'while working in the branch',
      usage: 'git branch -m <new name>'
    },
    {
      value: 'outside',
      label: 'from outside the branch',
      usage: 'git branch -m <old name> <new name>'
    }
  ],
  'add-new-branch': [
    {
      value: 'no-checkout',
      label: 'but remain in the current branch I am working from',
      usage: 'git branch <new name>'
    },
    {
      value: 'checkout',
      label: 'and switch to the new branch',
      usage: 'git checkout -b <new name>'
    },
    {
      value: 'checkout-remote',
      label: 'from another branch',
      usage: 'git checkout -b <new name> <another branch>'
    }
  ],
  'apply-stash': [
    {
      value: 'latest',
      label: 'latest stash',
      usage: 'git stash apply'
    },
    {
      value: 'specific',
      label: 'a specific stash',
      usage: 'git stash apply <stash id>',
      nb: 'The stash id can be gotten when you run git stash list. It\'s usually in this format: stash@{index} e.g. stash@{0}'
    },
    {
      value: 'pop',
      label: 'and delete stash',
      usage: 'git stash pop <stash id>',
      nb: 'Stash id optional. Add it if you want to apply and delete a specific stash otherwise leave to pop the latest stash'
    }
  ],
  'delete-stash': [
    {
      value: 'all',
      label: 'all stashed changes',
      usage: 'git stash clear'
    },
    {
      value: 'specific',
      label: 'specific stash',
      usage: 'git stash drop <stash id>'
    },
  ],
  'delete-multiple-branches': [
    {
      value: 'name',
      label: 'by name',
      usage: 'git branch -D <branch name> <branch name> <branch name>'
    },
    {
      value: 'pattern',
      label: 'by pattern',
      usage: 'git branch | grep <regex pattern> | xargs git branch -D',
      nb: 'e.g. git branch | grep "-" | xargs git branch -D will delete all branches that have \'-\' in their names or git branch | grep -v "master\\|staging" | xargs git branch -D will delete all branches except staging and master.\n\nNB: Always put your regex pattern in quotes'
    }
  ]
};
