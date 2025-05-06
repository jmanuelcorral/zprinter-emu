# zprinter-emu

A Zebra Printer Emulator that provides both HTTP and raw socket interfaces to simulate Zebra printers for development and testing purposes.

## 📋 Description

This project emulates a Zebra printer by providing:
- A raw socket interface on port 9100 (standard printer port)
- An HTTP interface for web-based interactions
- Docker containerization for easy deployment

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 20.6.0 or higher
- npm (included with Node.js)
- Docker (optional, for container deployment)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jmanuelcorral/zprinter-emu.git
   cd zprinter-emu
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the project: 
   ```sh
   npm run bundle
   ```

## 🏃‍♂️ Running the Emulator
Using Node.js
Create a .env file (or use the existing one):
```
HTTP_PORT=80
RAW_PORT=9100
```

Start the emulator:
```sh
npm start
```
Using Docker
1. Build the Docker image:
```sh
docker build -t zprinter-emu .
```
2. Run the container:
```sh
docker run -p 3000:3000 -p 9100:9100 zprinter-emu
```
The emulator will now be accessible at:

- HTTP interface: http://localhost:3000
- Raw socket interface: localhost:9100

## 🔧 Configuration
The emulator can be configured using environment variables:

Variable	Description	Default
HTTP_PORT	Port for the HTTP interface	80
RAW_PORT	Port for the raw socket interface	9100

##  💻 Development
Available Scripts
- ```npm run format:write``` - Format code with Prettier
- ```npm run lint``` - Run ESLint
- ```npm run package``` - Build the project with NCC
- ```npm run all``` - Format, lint and package
- ```npm test``` - Run tests with Vitest
##  📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

##  📦 Project Structure

```
src/
├── http.ts       - HTTP server implementation
├── index.ts      - Entry point
├── main.ts       - Main application setup
├── socket.ts     - Raw socket implementation
└── types.ts      - Type definitions
```