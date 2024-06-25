# Edu-React-ileri-seviye-AB.G01

İleri Seviye React Eğitimi

## 1. Gün

01. **Bundle Nedir?**
02. **Bundle lar Neden Kullanılır ve Ne İşe Yarar?**
03. **CSS Pre-Processor Nedir?**
04. **Code Splitting Nedir?**
05. **Webpack ve Mantığı**
6. **Webpack Kurulumu**
7. **Webpack de Custom Configuration**
8. **Loader**
9. **Plugins**
10. **webpack-Server**

### Günün Özeti

İlk günümüzde, bundle nedir ve neden kullanılır konusundan başlayarak, CSS pre-processor, code splitting ve webpack'in mantığı üzerine derinlemesine bilgiler edindik. Web kurulumu ve custom configuration yapmayı öğrenip, loader ve plugin kullanımına geçiş yaptık. Webpack-server hakkında bilgi sahibi olduktan sonra günü tamamladık.

## 2. Gün

1. **Önceki Günün Özeti**
2. **webpack-server de alinan hatanin giderilmesi**

    ```bash
    # Check the webpack-dev-server
    http://localhost:8080/webpack-dev-server
    mode: 'development',
    ```

3. **Rollup - Webpack - Snowpack Performans/Popülerlik/Bundle Size Karşılaştırması**
4. **Rollup Nedir?**
5. **Rollup Kurulumu**

    ```bash
    npm install --save-dev rollup
    # GLOBAL
    npm install rollup --global
    # or `npm i rollup -g` for short
    rollup -v / rollup --help
    ```

6. **Rollup ile Bundle Oluşturma**

    ```bash
    # Compile to a CommonJS module ('cjs')
    rollup main.js --file bundle.js --format cjs
    rollup src/main.js --format cjs
    rollup src/main.js -f cjs -o bundle.js
    rollup src/main.js -f cjs > bundle.js
    ```

7. **Rollup da Kullanılabilecek Formatlar**
    - **esm (ES Module)**: ArrowFunc, import, export
    - **cjs (CommonJS)**: require, export
    - **iife (Immediately Invoked Function Expression)**
    - **umd (Universal Module Definition)**: nodejs + browser
    - **amd (Asynchronous Module Definition)**: RequireJS
    - **system (SystemJS)**
8. **Konfigürasyon Kullanımı**
9. **Rollup da Plugin**
    [Rollup Awesome Plugins](https://github.com/rollup/awesome)

    ```bash
    npm install @rollup/plugin-json --save-dev
    ```

10. **Rollup da Output Plugin Kullanımı**
    [Output Plugin Documentation](https://rollupjs.org/plugin-development/#build-hooks)

    ```bash
    npm install @rollup/plugin-terser --save-dev
    ```

### Günün Özeti

İkinci günümüzde, önceki günün özetini yaparak başladık. Yine önceki günde Webpack-server'da alınan hatanın nasıl giderileceğini öğrendik. Ardından, Rollup, Webpack ve Snowpack'in performans, popülerlik ve bundle boyutu açısından karşılaştırmasını yaptık. Rollup'un ne olduğunu, kurulumunu ve Rollup ile bundle oluşturmayı öğrendik. Rollup'da kullanılabilecek formatları inceledik, konfigürasyon kullanımını ve pluginleri öğrendik. Son olarak, Rollup'da output plugin kullanımına dair bilgiler edindik.
