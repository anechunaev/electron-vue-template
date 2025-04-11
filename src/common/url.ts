import pkg from '../../package.json';

export const PROTOCOL = pkg.app?.protocol ?? 'app';
export const PROTOCOL_URL = `${PROTOCOL}://`;
export const PROTOCOL_ASSETS = `${PROTOCOL}-assets`;
export const PROTOCOL_ASSETS_URL = `${PROTOCOL_ASSETS}://`;
export const ASSETS_PATH = `${PROTOCOL_ASSETS}://assets/`;
export const DIST_PATH = `${PROTOCOL_ASSETS}://dist/`;

export function dist(path: string) {
	return `${DIST_PATH}${path}`;
}
export function assets(path: string) {
	return `${ASSETS_PATH}${path}`;
}
export function screen(screenName: string) {
	return `${PROTOCOL_URL}screen/${screenName}`;
}
