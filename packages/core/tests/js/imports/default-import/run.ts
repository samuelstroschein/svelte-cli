import { imports } from '@sveltejs/cli-core/js';
import type { ScriptFileEditor } from '@sveltejs/cli-core';

export function run({ ast }: ScriptFileEditor<any>): void {
	imports.addDefault(ast, 'package', 'MyPackage');
}
