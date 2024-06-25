# Edu-React-ileri-seviye-AB.G01
Ileri Seviye Recat Egitimi


1. Bundle Nedir?
2. Neden kullanilir ve ne ise yarar?
3. Css Pre-Processor Nedir?
4. Code Splitting
5. webpack ve mantigi?
6. web krulumunu yaptik
7. Custom configuration
8. Loader
9. Plugin
10. webpack-server
11. rollup - webpack - snowpack karsilastirmasi
12. rollup
13. Rollup Kurulumu
 npm install --save-dev rollup
 GLOBAL
 npm install rollup --global
 # or `npm i rollup -g` for short
 rollup -v / rollup --help
14. Bundle Olusturma
# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs
rollup src/main.js --format cjs
rollup src/main.js -f cjs -o bundle.js
rollup src/main.js -f cjs > bundle.js
   
15. Kullanilabilecek Formatlar
a. esm (ES Module) => ArrowFunc, import, export
b. csj (CommonJS) => require, export
c. iife (Immedietly Invoked Function Expression)
d. umd (Universal Module Definition) => nodejs + browser
e. amd (async module definition) => RequireJS
f. system(SystemJS)
16. Konfigürasyon Kullanimi
17. Plugin
https://github.com/rollup/awesome
npm install @rollup/plugin-json --save-dev
18. Output Plugin i kullanimi
https://rollupjs.org/plugin-development/#build-hooks
npm install @rollup/plugin-terser --save-dev

19. 