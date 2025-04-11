import path from 'node:path';
import url from 'node:url';
import { app, protocol, net } from 'electron';
import * as AppUrl from '../../common/url';
import * as AppPath from './path';
import { mainScreen } from './template';

export function handleCustomProtocol(dirname: string) {
	protocol.registerSchemesAsPrivileged([
		{
			scheme: AppUrl.PROTOCOL,
			privileges: {
				standard: true,
				secure: true,
				supportFetchAPI: true,
			},
		},
	]);
	
	app.whenReady().then(() => {
		protocol.handle(AppUrl.PROTOCOL_ASSETS, (request) => {
			const filePath = request.url.slice(AppUrl.PROTOCOL_ASSETS_URL.length);
			const destPath = path.join(dirname, '../', filePath);
	
			if (AppPath.isPathWithinRoot(destPath, path.join(dirname, '../'))) {
				return net.fetch(url.pathToFileURL(destPath).toString());
			} else {
				return new Response('Invalid path', {
					status: 403,
					headers: {
						'Content-Type': 'text/plain',
					},
				});
			}
		});
	
		protocol.handle(AppUrl.PROTOCOL, (request) => {
			return new Response(
				mainScreen(),
				{
					headers: {
						'Content-Type': 'text/html',
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET',
						'Access-Control-Allow-Headers': 'Content-Type',
						'Access-Control-Max-Age': '86400',
						'Content-Security-Policy': 'default-src \'self\' app-assets://*;',
					},
				}
			);
		});
	});
}