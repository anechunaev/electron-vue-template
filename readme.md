# Electron Vue Template

This repository provides a boilerplate template for building cross-platform desktop applications using [Electron](https://www.electronjs.org/) and [Vue.js](https://vuejs.org/).

## Features

- **Electron**: Build cross-platform desktop apps with web technologies.
- **Vue.js**: Reactive and component-based UI development.
- **Pre-configured**: Ready-to-use setup for faster development.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
	```bash
	git clone https://github.com/anechunaev/electron-vue-template.git
	cd electron-vue-template
	```

2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```

### Development

Start the development server with hot reload:
```bash
npm run dev && npm run start
# or
yarn dev && yarn start
```

### Build

To package the application for production:
```bash
npm run build
# or
yarn build
```

## Folder Structure

- `src/render/`: Contains the Vue.js application code.
- `src/main.ts`: Electron main process code.
- `assets/`: Static assets.
- `config/`: Build configuration files.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Electron](https://www.electronjs.org/)
- [Vue.js](https://vuejs.org/)
