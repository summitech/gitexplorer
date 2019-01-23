export const secondaryOptions = {
  commit: [
    {
      value: 'local-changes',
      label: 'commit all local changes in tracked files',
      usage: 'git commit -a'
    },
    {
      value: 'local-changes',
      label: 'commit all stages changes',
      usage: 'git commit -m <message>',
      nb: 'Replace <message> with your commit message.'
    }
  ],

  configure: [
    {
      value: 'email-name',
      label: 'name and email address',
      usage: 'git config --global user.name "username" \n\ngit config --global user.email "email address"',
      nb: 'Your username and email address should be the same as the one used with your git hosting provider i.e. github, bitbucket, gitlab etc'
    },
    {
      value: 'editor',
      label: 'default editor',
      usage: 'git config --global core.editor "vim"',
      nb: 'Change default editor to vim.'
    },
    {
      value: 'color',
      label: 'color',
      usage: 'git config --global color.ui auto',
      nb: 'Enables helpful colorization of command line output'
    },
    {
      value: 'signingkey',
      label: 'add the GPG key',
      usage: 'git config --global user.signingkey <your-secret-gpg-key>',
      nb: 'Git is cryptographically secure, but it’s not foolproof. If you’re taking work from others on the internet and want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG.'
    }
  ],

  revert: [
    {
      value: 'specific-commit',
      label: 'a specific commit',
      usage: 'git revert <commit-hash>',
      nb: 'Use git log to see the hash of each commit'
    },
    {
      value: 'to-last-commit',
      label: 'to last commit',
      usage: 'git reset --hard'
    },
    {
      value: 'to-last-commit-from-remote',
      label: 'to last commit on remote branch',
      usage: 'git reset --hard <repo>/<branch>'
    },
  ],
  initialize: [
    {
      value: 'new-repo',
      label: 'a new repository',
      nb: 'Make sure you are in the right directory',
      usage: 'git init'
    }
  ],
  modify: [
    {
      value: 'commit-message',
      label: 'my last/latest commit message',
      usage: 'git commit --amend'
    },
    {
      value: 'commit',
      label: 'my last commit but leave the commit message as is',
      usage: 'git add . \ngit commit --amend --no-edit'
    },
    {
      value: 'remoteUrl',
      label: 'repo\'s remote url',
      usage: 'git remote set-url <alias> <url>',
      nb: '<alias> is your remote name e.g origin'
    }
  ],
  show: [
    {
      value: 'repo-status',
      label: 'status of project including staged, unstaged and untracked files',
      usage: 'git status'
    },
    {
      value: 'logs',
      label: 'commit logs/history'
    },
    {
      value: 'uncommittedChanges',
      label: 'uncommitted changes',
      usage: 'git diff'
    },
    {
      value: 'committedChanges',
      label: 'committed/staged changes',
      usage: 'git diff --staged'
    },
    {
      value: 'remoteUrl',
      label: 'repo\'s remote url',
      usage: 'git remote -v'
    },
    {
      value: 'stash',
      label: 'stash',
      usage: 'git stash list'
    },
    {
      value: 'branch',
      label: 'branches',
      usage: 'git branch',
      nb: 'The active branch is prefixed with *'
    }
  ],
  delete: [
    {
      value: 'branch',
      label: 'a branch',
      usage: 'git branch -D <branch name>'
    },
    {
      value: 'remote',
      label: 'remote',
      usage: 'git remote rm <remote>'
    },
    {
      value: 'stash',
      label: 'stash',
      usage: 'git stash clear'
    },
    {
      value: 'untracked-files',
      label: 'untracked files',
      usage: 'git clean -<flag>',
      nb: 'replace -<flag> with:\n -i for interactive command\n -n to preview what will be removed\n -f to remove forcefully\n -d to remove directories\n -X to remove ignored files\n -x to remove ignored and non-ignored files'
    },
    {
      value: 'files-from-index',
      label: 'files from index',
      usage: 'git rm --cached <file or dir>',
      nb: 'Use this option to unstage and remove paths only from the index. Working tree files, whether modified or not, will be left alone.'
    }
  ],
  compareCommits: [
    {
      value: 'terminal',
      label: 'and output result in the terminal',
      usage: 'git diff <sha1> <sha2> | less',
      nb: 'sha1 and sha2 are the sha hash of the commits you want to compare.',
    },
    {
      value: 'file',
      label: 'and output result to a file',
      usage: 'git diff <sha1> <sha2> > diff.txt',
      nb: 'sha1 and sha2 are the sha of the commits you want to compare. \n\ndiff.txt is the file you want to store the contents of the diff',
    }
  ],
  correct: [
    {
      value: 'commit-wrong-branch',
      label: 'commit to wrong branch',
      nb: 'Water is boiling',
      usage: 'pour water in kettle'
    }
  ],
  clone: [
    {
      value: 'clone-repo-into-a-new-dir',
      label: 'existing repo into a new directory',
      usage: 'git clone <repo-url> <directory>',
      nb: 'The repo is cloned into the specified directory\n\nReplace "directory" with the directory you want'
    },
    {
      value: 'clone-repo-into-a-current-dir',
      label: 'existing repo into the current directory',
      usage: 'git clone <repo-url> .',
      nb: 'The repo is cloned into the current directory\n\nThe current directory is represented with a "." (period)'
    },
  ],
  ignore: [
    {
      value: 'ignore-files-in-a-dir',
      label: 'all files in a directory',
      usage: '<dir name>/*',
      nb: 'This must be added to .gitignore file\n\nReplace "dir name" with name of directory whose files you want git to ignore'
    }
  ],
  help: [
    {
      value: 'command-help',
      label: 'about a command',
      usage: 'append --help to the command',
      nb: 'e.g. git merge --help\n\nType q to quite terminal'
    }
  ],
  add: [
    {
      value: 'new-changes',
      label: 'new changes',
      usage: 'git add <file.ext>',
      nb: 'To add all the files in the current directory, use "git add ."\n\nTo add a directory use "git add <directory>"'
    },
    {
      value: 'add-new-branch',
      label: 'a new branch',
    },
    {
      value: 'add-repo',
      label: 'new remote repo',
      usage: 'git remote add <shortname> <url>'
    },
    {
      value: 'add-alias',
      label: 'alias',
      usage: 'git config --global alias.<alias> <command>',
      nb: 'e.g. git config --global alias.st status. Typing git st in the terminal now does the same thing as git status'
    },
    {
      value: 'add-annotated-tag',
      label: 'annotated tag',
      usage: 'git tag -a v1.4 -m "my version 1.4"\n\ngit push',
    },
    {
      value: 'add-annotated-tag-for-old-commit',
      label: 'annotated tag for old commit',
      usage: "git tag -a v1.2 -m 'version 1.2' <commit-hash>\n\ngit push",
    }
  ],
  push: [
    {
      value: 'new-remote-branch',
      label: 'non-existent remote branch',
      usage: 'git push -u origin <branchname>'
    }
  ],
  rename: [
    {
      value: 'branch',
      label: 'branch',
    },
    {
      value: 'remoteUrl',
      label: 'remote',
      usage: 'git remote rename <oldname> <newname>'
    }
  ],
  merge: [
    {
      value: 'branch',
      label: 'another branch to current branch',
      usage: 'git merge <branch-name>'
    }
  ],
  squash: [
    {
      value: 'pr',
      label: 'commits in pull request into single commit',
      usage: 'git rebase -i <branch name>',
      nb: 'Make sure that latest commits are fetched from upstream.\n\nFor example (assuming you have a remote named upstream):\n\ngit fetch upstream\ngit rebase -i upstream/master\n\nChange "pick" to "squash" for the commits you wish to squash and save.\n\ngit push origin <topic branch> --force-with-lease'
    }
  ],
  debug: [
    {
      value: 'bisect',
      label: 'binary search',
      usage: 'git bisect start\ngit bisect bad                 # Current version is bad\ngit bisect good v2.13          # v6.12 is known to be good',
      nb: 'Once you have specified at least one bad and one good commit, git bisect selects a commit in the middle of that range of history, checks it out, and outputs something similar to the following:\nBisecting: 675 revisions left to test after this (roughly 10 steps)\nYou should now compile the checked-out version and test it. If that version works correctly, type\n\ngit bisect good\n\nIf that version is broken, type\n\ngit bisect bad\n\nThen git bisect will respond with something like\n\nBisecting: 337 revisions left to test after this (roughly 9 steps)\n\nKeep repeating the process: compile the tree, test it, and depending on whether it is good or bad run git bisect good or git bisect bad to ask for the next commit that needs testing.\nEventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit. The reference refs/bisect/bad will be left pointing at that commit.\nAfter a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command:\n\ngit bisect reset'
    },
    {
      value: 'blame',
      label: 'who modified each lines',
      usage: 'git blame -L <number-line-start>,<number-line-end> <filename>',
      'nb': 'The -L option will restrict the output to the requested line range\n',
    },
    {
      value: 'grep',
      label: 'search in files',
      usage: 'git grep -n <your_text_or_expression>',
      'nb': 'Print lines matching a pattern.\nOption -n to display the numbering of lines in which there are matches',
    }
  ]
};
