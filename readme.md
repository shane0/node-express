# nucamp full stack course

- <https://github.com/shane0/node-express>
- <http://localhost:3000/>
- start local server

```sh
npm i
npm start 
```

```sh
npm install mongoose@5.10.9 mongoose-currency@0.2.0 --legacy-peer-deps
```

## week 3 authentication

- failed use --force

```sh
npm install passport-jwt@4.0.0 jsonwebtoken@8.5.1 --force
```

- failed use --force

```sh
npm install passport@0.4.1 passport-local@1.0.0 passport-local-mongoose@6.0.1 --force
```

```sh
npm install express-session@1.17.1 session-file-store@1.5.0
```

- nope

```sh
# npm install express-session session-file-store
# nope
npm install express-session session-file-store --force
# yep
```

- if nope

```sh
npm i --force
```

## errors

```sh
MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
    at Connection.openUri (/Users/shanenull/node-express/node_modules/mongoose/lib/connection.js:800:32)
    at /Users/shanenull/node-express/node_modules/mongoose/lib/index.js:342:10
    at /Users/shanenull/node-express/node_modules/mongoose/lib/helpers/promiseOrCallback.js:31:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/shanenull/node-express/node_modules/mongoose/lib/helpers/promiseOrCallback.js:30:10)
    at Mongoose.connect (/Users/shanenull/node-express/node_modules/mongoose/lib/index.js:341:10)
    at Object.<anonymous> (/Users/shanenull/node-express/app.js:17:26)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Module.require (node:internal/modules/cjs/loader:1105:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (/Users/shanenull/node-express/bin/www:7:11)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10) {
  reason: TopologyDescription {
    type: 'Single',
    setName: null,
    maxSetVersion: null,
    maxElectionId: null,
    servers: Map(1) { 'localhost:27017' => [ServerDescription] },
    stale: false,
    compatible: true,
    compatibilityError: null,
    logicalSessionTimeoutMinutes: null,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    commonWireVersion: null
  }
}
GET /campsites/1%20 500 256.589 ms - 1942
```
