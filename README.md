---

# Typescript, Tailwind, and HTML 

This project (Calculator) is a built using Typescript, Tailwind CSS, and HTML as a part of my internship task.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ERMIASWAKGARI/type-tailwind.git
   ```

2. Navigate to the project directory:
   ```bash
   cd type-tailwind
   ```

3. Install dependencies using npm:
   ```bash
   npm install
   ```

## How to Use

### Adding JavaScript from the Dist Folder

```bash
npm run dev
```

This command compiles Typescript files using `tsc`, copies the compiled JavaScript files from to `dist`, and watches for changes to Tailwind CSS (`src/main.css`) to rebuild the Tailwind styles.

### Running the Development Server

To start a development server:

```Don't forget to have `Live Server` extension to Launch a development local Server with live reload feature for       
   static & dynamic pages. If you don't have just go and install it(Also you can use another extension or package).

   You can run it using one of the followind:

   1. Open a project and click to Go Live from the status bar to turn the server on/off.

   2. Right click on a HTML file from Explorer Window and click on Open with Live Server.

   3. Open a HTML file and right-click on the editor and click on Open with Live Server. 
```

This will serve the files from the `dist` folder and watch for changes, automatically reloading the browser.

## Project Structure

- `src/`: Contains Typescript (`*.ts`) and CSS (`main.css`) source files.
- `dist/`: Generated output directory where compiled JavaScript and processed CSS are placed.
- `tsconfig.json`: Configuration file for Typescript compilation.
- `package.json`: Includes project metadata, dependencies, and build scripts.

## Dependencies

- [Typescript](https://www.typescriptlang.org/): Adds static typing to JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [Autoprefixer](https://autoprefixer.github.io/): Adds vendor prefixes to CSS rules.
- [PostCSS](https://postcss.org/): CSS post-processing tool.
- [ts-node](https://github.com/TypeStrong/ts-node): TypeScript execution and REPL for Node.js.


---
