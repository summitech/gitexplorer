const options = [
  { value: 'apply', label: 'update certain configurations in the existing kubeconfig file' },
  { value: 'check', label: 'check on the health of the cluster' },
  { value: 'completion', label: 'check the output of the shell completion code for the specified shell (bash or zsh)' },
  { value: 'config', label: 'manage installation related configuration' },
  { value: 'cordon', label: 'mark nodes as unschedulable' },
  { value: 'create', label: 'create a new node pool in the cluster configuration' },
  { value: 'deploy', label: 'deploy a fully functioning Kubernetes cluster and addons' },
  { value: 'destroy', label: 'destroy cluster resources' },
  { value: 'diagnose', label: 'creates a diagnostics bundle of the cluster' },
  { value: 'diff', label: 'print the difference between two resources' },
  { value: 'destroy', label: 'destroy the Kubernetes cluster' },
  { value: 'drain', label: 'drain pods from machines managed by konvoy' },
  { value: 'generate', label: 'generates artifacts' },
  { value: 'get', label: 'get cluster related information' },
  { value: 'image', label: 'run Konvoy CLI images related actions' },
  { value: 'init', label: 'create the provision and deploy configuration with default values' },
  { value: 'provision', label: 'provision the nodes according to the provided Terraform variables file' },
  { value: 'pull', label: 'pull cluster state' },
  { value: 'push', label: 'push cluster state' },
  { value: 'reset', label: 'reset any modifications to the nodes made by the installer, and cleanup file artifacts' },
  { value: 'scale', label: 'changes the node pool\'s number of machines in the cluster configuration' },
  { value: 'uncordon', label: 'Marks nodes in the node pool as schedulable' },
  { value: 'up', label: 'provision a cluster' },
  { value: 'view', label: 'view various artifacts' },
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
