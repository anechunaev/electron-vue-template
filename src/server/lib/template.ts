import { assets, dist } from '../../common/url';

export function mainScreen() {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Main window</title>
	<link rel="stylesheet" href="${assets('styles/base.css')}" />
	<link rel="stylesheet" href="${assets('styles/fonts.css')}" />
	<link rel="stylesheet" href="${dist('public/render.css')}" />
	<script src="${dist('public/render.js')}" async></script>
</head>
<body>
	<div id="app">Loading...</div>
</body>
</html>`
}
