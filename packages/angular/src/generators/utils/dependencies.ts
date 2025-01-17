import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';
import { postcssVersion } from '../../utils/versions';

export function addBuildableLibrariesPostCssDependencies(tree: Tree): void {
  addDependenciesToPackageJson(
    tree,
    {},
    {
      postcss: postcssVersion,
      'postcss-import': '^14.0.2',
      'postcss-preset-env': '^6.7.0',
      'postcss-url': '^10.1.1',
    }
  );
}
