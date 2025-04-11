export function isPathWithinRoot(path: string, root: string): boolean {
	const relativePath = path.replace(/\\/g, '/');
	const normalizedRoot = root.replace(/\\/g, '/');

	return relativePath.startsWith(normalizedRoot);
}
