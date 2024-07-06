# Edu-React-ileri-seviye-AB.G01

İleri Seviye React Eğitimi

## 01. Gün

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

## 02. Gün

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

## 03. Gün

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

### Günün Özeti

Bugün, önceki günün konularını gözden geçirdik ve ardından Rollup ile kod bölme ve dinamik yükleme yöntemlerini inceledik. `output.manualChunks`, `output.chunkFileNames` ve `output.entryFileNames` gibi Rollup konfigürasyon seçeneklerine göz attık. `rollup-plugin-serve` eklentisinin kurulumu ve kullanımı hakkında bilgi edindik.

React'te Lazy ve Suspense kullanarak bileşenlerin nasıl ertelenerek yükleneceğini öğrendik. Ayrıca, `mime-types` ne olduğuna ve `preMethods` (preconnect, prefetchDNS, preinit, preinitmodule, preload, preloadModule) gibi ön yükleme yöntemlerini inceledik. Son olarak, ileri seviye bileşen konularına değindik ve `npx create-react-app` komutuyla yeni bir React projesi oluşturup, `axios` ile bir endpoint'e GET işlemi yapıp projeyi ertesi gün için hazır hale getirip, ileri düzey bileşen konularına (advanced component topics) giriş yaptık.

## 04. Gün

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

## 05. Gün

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

## 06. Gün

1. **Önceki Günün Özeti**
2. React 18 Hooks
   - useTransition
   - useSyncExternalStore
   - useInsertionEffect
   - useLayoutEffect
3. Soru-Cevap
4. Redux

### Günün Özeti

Bugün, önceki haftanın konularını özetleyerek başladık ve ardından React 18 ile gelen yeni hook'ları incelemeye devam ettik. İlk olarak, useTransition hook'unun kullanımını ve uygulamalarını tartıştık. Sonrasında, dış veri kaynaklarıyla senkronizasyonu sağlayan useSyncExternalStore hook'unu öğrendik. Daha sonra, CSS veya DOM manipülasyonları için tasarlanan useInsertionEffect hook'unun detaylarına değindik. useLayoutEffect hook'unun ne zaman ve nasıl kullanılacağını ele aldık. Günü, soru-cevap  ve Redux'ın temel kavramları ile teorisi üzerine bir giriş ile tamamladık.

## 07. Gün

1. **Önceki Günün Özeti**
2. Redux
   - npx create-react-app sample01
   - <https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif>
   - npm i redux
   - npm i @reduxjs/toolkit
   - Reducer, Store, getState(), Action, subscribe(), dispatch()
   - Multi Reducer => CombineReducer
   - Initial data for reducer
   - Provider - npm install react-redux
   - Connect Store from any Component
   - useSelector
   - Set data to Store from any COmponent
   - useDispatch
3. redux Slice (Modern React)
   - npx create-react-app sample01 - Counter App
   - npm install redux @reduxjs/toolkit react-redux
   - createSlice()
4. PROJECT STRUCTURE - Clean Code Yapısi

- <https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5>

5. Redux Essential
   - <https://redux.js.org/tutorials/essentials/part-2-app-structure>
   - npx create-react-app sample03 --template redux

6. Redux Notlari

- <https://medium.com/@fdikmen/redux-toolkit-ile-modern-redux-kullan%C4%B1m%C4%B1-5b59f8055da6>

### Günün Özeti

Bugün dersimizde Redux'a odaklandık. React ile birlikte Redux'u kullanarak state yönetimini nasıl gerçekleştireceğimizi öğrendik.

npx create-react-app kullanarak örnek bir React projesi oluşturduk.
Redux'u ve @reduxjs/toolkit'i kurduk.
Reducer, Store, getState(), Action, subscribe() ve dispatch() gibi temel Redux kavramlarını inceledik.
Birden fazla reducer'ı birleştirmek için combineReducer'ı kullandık.
Reducer için ilk veriyi nasıl ayarlayacağımızı öğrendik.
react-redux ile Provider'ı kurduk ve herhangi bir componentten Store'a nasıl bağlanacağımızı gördük.
useSelector ve useDispatch ile Store'dan veriyi nasıl okuyacağımızı ve Store'a veriyi nasıl yazacağımızı öğrendik.
Modern React'te Redux Slice'ı nasıl kullanacağımızı inceledik.
Temiz kod yapısı için Redux projesinde nasıl bir yapı kurulacağını öğrendik.
Redux'un temel kavramlarını ve uygulama adımlarını pekiştirmek için örnekler ve kaynaklar üzerinden çalışmalar yaptık.
Ek olarak, npx create-react-app komutuyla Redux şablonu kullanarak yeni bir React projesi nasıl oluşturulacağını da öğrendik

## 08. Gün

1. **Önceki Günün Özeti**
2. Isomorphic
3. CSR - SSR
4. NextJS
   - node -v
   - npx create-next-app@latest

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

- NextJS Snippets
- npm run build && npm run start => .next
- npm run dev
- Routing & Routing Type
- (), [], [[]],[...]
- Link
- "use client" -  server side;

-----

### Günün Özeti

Bugün isomorphic uygulamalar, Client-Side Rendering (CSR) ve Server-Side Rendering (SSR) arasındaki farklar, NextJS framework'ünün kurulumu ve temel yapı taşları hakkında öğrendik. NextJS ile yeni bir uygulama oluştururken karşımıza çıkan seçenekleri gördük. Ayrıca routing mekanizmasını ve routing tiplerini (), [], [[]], [...] gibi ifadelerle nasıl kullandığımızı öğrendik. Son olarak Link component'i ve "use client" ile server-side rendering ilişkisine değindik.

## 09. Gün

1. **Önceki Günün Özeti**
2. NextJS Routing (), [], [[...]], [...]
3. NextJS Link => replace - prefetch
4. NextJS App Folder
5. NextJS File Convensitons
   - default.js
   - error.js
   - layout.js
   - loading.js
   - not-found.js
   - page.js
   - route.js
   - Metadata Files => generateMetadata()
6. Http vs WebSocket
   - WebSocket Libraries => https://github.com/facundofarias/awesome-websockets
7. SocketIO
8. SocketIO Codes
   - npm init -y
   - type-module
   - npm install express

### Günün Özeti

Bugün NextJS routing konusunu derinleştirerek (), [], [[...]], [...] gibi ifadelerin routing yapısındaki anlamlarını öğrendik. Ayrıca, NextJS'de bulunan Link component'i ile sayfalar arasında geçiş yöntemlerini ve replace ile prefetch seçeneklerini inceledik. Yeni uygulama yapısında kullanılan app klasörü ve NextJS'in dosya isimlendirme kurallarına(page.js, .error.js, .layout.js vb.) değindik. Son olarak, HTTP ve WebSocket arasındaki farkları anlayıp Socket.IO framework'ünü kurarak bir projeyi oluşturduk.

## 10. Gün

1. **Önceki Günün Özeti**
2. SocketIO Codes (Devam)
   - npm init -y
   - type-module
   - npm install express
   - npm i nodemon
   - npm i socket.io
   - npm i sqlite sqlite3
   - using socket.io-client in HTML
3. SocketIO Project with React
   - client/server project
   - using socket.io & socket.io-client
4. Vite.js - Sample Project
5. MicroFrontend
6. MicroFrontend Project with React
   - npx create-mf-app
7. (Giriş) UI TEST (jest, enyzme, mocha)

### Günün Özeti

Eğitimin son gününde, Socket.IO kullanarak gerçek zamanlı uygulamalar geliştirmeye devam ettik. Express, Nodemon, SQLite ve Socket.IO kurulumlarının ardından, Socket.IO istemcisinin HTML içinde nasıl kullanılacağını öğrendik. Daha sonra, Socket.IO ve React ile client/server projeleri oluşturduk. MicroFrontend mimarisi hakkında bilgi edinip, Vite.js üzerinde konuştuktan sonra Vite.js kullanarak bir örnek proje geliştirdik. Sonra React ile MicroFrontend projesi oluşturup, bir Core projesindeki component/fonksiyon vb. ögeleri diğer bir React Projesi olan ProjectA da kullandık. Son olarak da jest, enzyme ve mocha gibi araçlardan bahsedip UI testlerine giriş yapıp, npx create-react-app ile gelen projedeki test değerlendirdik.
