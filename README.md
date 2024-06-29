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

## 3. Gün

1. **Önceki Günün Özeti**

2. **Rollup Code Splitting - Lazy Dynamic Loading**
   - `output.manualChunks` => [Manual Chunks Documentation](https://rollupjs.org/configuration-options/#output-manualchunks)
   - `output.chunkFileNames` => [Chunk File Names Documentation](https://rollupjs.org/configuration-options/#output-chunkfilenames)
   - `output.entryFileNames` => [Entry File Names Documentation](https://rollupjs.org/configuration-options/#output-entryfilenames)

3. **rollup-plugin-serve**
   - [npm Package](https://www.npmjs.com/package/rollup-plugin-serve)
   - Kurulum: `npm install --save-dev rollup-plugin-serve`

4. **React Lazy - Suspense**

5. **Pre Methods**
   - **mime-types**
     - [Common MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
   - `preMethods`
     - `import -> react-dom` => `return -> none` => `href -> string`
     - `preconnect(href)`
     - `prefetchDNS(href)`
     - `preinit(href,option)`
     - `preinitmodule(href,option)` => ES6
     - `preload(href,option)`
     - `preloadModule(href,option)` => ES6
   - **Init** => Indirir ve derler (Download and Execute)
   - **Load** => Yalnizca indirir (only Download)

6. **Ileri Component Konulari**
npx create-react-app [sampleApple]
npm i axios

Bu gün, Rollup ile kod bölme (code splitting) ve tembel yükleme (lazy loading) konularını detaylandırdık. Ayrıca, rollup-plugin-serve eklentisini inceledik ve nasıl kullanılacağına baktik. React'in tembel yükleme (lazy loading) ve Suspense özelliklerine giriş yaptık. Son olarak, React 18 yeni olan ön yükleme (preload) metodları hakkında bilgi edindik ve ileri düzey bileşen konularına (advanced component topics) giris yaptik.

## 4. Gün

1. **Önceki Günün Özeti**
2. Suspense icin de Inline Component Kullanimi
3. **Ileri Component Konular**
   - **Higher Order Component (HOC)**
   - **Reusable Higher Order Component**
   - **Pure Component**
4. React Hooks
   - useState
   - useEffect
   - useRef
  
### Günün Özeti

Bugün, önceki günün konularını gözden geçirdik ve ardından React'te Suspense kullanarak inline componentlerin nasıl oluşturulacağını öğrendik. Daha sonra ileri seviye component konularına, özellikle Higher Order Component (HOC), Reusable Higher Order Component ve Pure Component'lere odaklandık. Son olarak, React Hooks'tan useState, useEffect ve useRef kullanımlarını inceledik.

## 5. Gün

1. **Önceki Günün Özeti**
2. React Hooks (Genel Tablo)
   - Side Effect Kavramı
   - Memoization
   - useMemo
   - useMemo Ne Zaman Kullanılmalı/Kullanılmamalı
   - useCallback
   - useEffect vs useMemo vs useCallback
3. React 18 Hooks
   - useId
   - useDeferredValue
   - useTransition

### Günün Özeti

Bugün, önceki günün konularını özetleyerek başladık ve ardından React Hooks genel tablosunu inceledik. Side Effect kavramını ve Memoization'ı tartıştık. useMemo hook'unun ne zaman kullanılması veya kullanılmaması gerektiğini öğrendik ve useCallback ile karşılaştırmalar yaptık. Ayrıca, useEffect, useMemo ve useCallback arasındaki farkları ele aldık. Son olarak, React 18 ile gelen yeni hook'lar olan useId, useDeferredValue ve useTransition hakkında bilgi edindik.

## 6. Gün

1. **Önceki Günün Özeti**
2. React 18 Hooks
   - useTransition
   - useSyncExternalStore
   - useInsertions
   - useLayoutEffect
3. Redux
