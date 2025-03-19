"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[430],{7140:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/Asset/list","title":"","description":"Assets List API","source":"@site/docs/api/Asset/list.md","sourceDirName":"api/Asset","slug":"/api/Asset/list","permalink":"/API-Doc/api/Asset/list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"","pagination_next":null,"pagination_prev":null}}');var i=s(4848),r=s(8453);const l={title:"",pagination_next:null,pagination_prev:null},o=void 0,a={},d=[{value:"<span>Release Versions</span>",id:"release-versions",level:2},{value:"<span>Authentication - Login API</span>",id:"authentication---login-api",level:2},{value:"Endpoint Details",id:"endpoint-details",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response Body",id:"response-body",level:3},{value:"<span>List Assets API</span>",id:"list-assets-api",level:2},{value:"Endpoint Details",id:"endpoint-details-1",level:3},{value:"Request Body",id:"request-body-1",level:3},{value:"Example Response",id:"example-response",level:3},{value:"<span>List Asset Types at Locations API</span>",id:"list-asset-types-at-locations-api",level:2},{value:"Request Body",id:"request-body-2",level:3},{value:"Example Response",id:"example-response-1",level:3},{value:"<span>List Asset Types Counts at Locations API</span>",id:"list-asset-types-counts-at-locations-api",level:2},{value:"Request Body",id:"request-body-3",level:3},{value:"Example Response",id:"example-response-2",level:3},{value:"<span>Errors</span>",id:"errors",level:2},{value:"Error Responses",id:"error-responses",level:4}];function c(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{style:{color:"#004FDB"},children:"Assets List API"}),"\n",(0,i.jsx)("h2",{children:"Version 1.1 \u2014 May 2024"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-versions",children:(0,i.jsx)("span",{style:{color:"#004FDB"},children:"Release Versions"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Version"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Author"}),(0,i.jsx)(n.th,{children:"Release Date"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.0"}),(0,i.jsx)(n.td,{children:"List API for Assets"}),(0,i.jsx)(n.td,{children:"George Gu"}),(0,i.jsx)(n.td,{children:"05/28/2024"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.1"}),(0,i.jsx)(n.td,{children:"Asset Type APIs"}),(0,i.jsx)(n.td,{children:"Renuka Agrawal"}),(0,i.jsx)(n.td,{children:"06/03/2024"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"authentication---login-api",children:(0,i.jsx)("span",{style:{color:"#004FDB"},children:"Authentication - Login API"})}),"\n",(0,i.jsx)(n.p,{children:"To access the GraphQL APIs, users must first authenticate using the Xemelgo Login REST API."}),"\n",(0,i.jsx)(n.h3,{id:"endpoint-details",children:"Endpoint Details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"URL:"})," ",(0,i.jsx)(n.code,{children:"https://rest.api.xemelgo.com/login"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method:"})," ",(0,i.jsx)(n.code,{children:"POST"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"request-body",children:"Request Body"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "email": "base64_encoded_email",\n  "password": "base64_encoded_password"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"response-body",children:"Response Body"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "AccessToken": "token123",\n  "ExpiresIn": 3600,\n  "TokenType": "Bearer",\n  "RefreshToken": "refreshToken",\n  "IdToken": "idToken123"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"IdToken"})," as the authorization header for all API requests."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"list-assets-api",children:(0,i.jsx)("span",{style:{color:"#004FDB"},children:"List Assets API"})}),"\n",(0,i.jsx)(n.p,{children:"Retrieves all asset details with filtering capabilities."}),"\n",(0,i.jsx)(n.h3,{id:"endpoint-details-1",children:"Endpoint Details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"URL:"})," ",(0,i.jsx)(n.code,{children:"https://api.xemelgo.com/graphql"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method:"})," ",(0,i.jsx)(n.code,{children:"POST"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"request-body-1",children:"Request Body"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"query assets ($filter: String, $nextToken: String) {\n  assets (input: {filter: $filter, nextToken: $nextToken}) {\n    nextToken\n    assets {\n      id\n      name\n      description\n      trackerSerial\n      state\n      type {\n        name\n        id\n      }\n      lastUpdatedDate\n      lastDetectedAtLocation {\n        id\n        name\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-response",children:"Example Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "assets": {\n      "nextToken": null,\n      "assets": [\n        {\n          "id": "Asset Test 01",\n          "trackerSerial": "E280689400005013D8128491",\n          "state": "onhand",\n          "type": { "name": "Type 1", "id": "Type 1" },\n          "lastDetectedAtLocation": { "id": "Shop Floor", "name": "Shop Floor" }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"list-asset-types-at-locations-api",children:(0,i.jsx)("span",{style:{color:"#004FDB"},children:"List Asset Types at Locations API"})}),"\n",(0,i.jsx)(n.p,{children:"Retrieves all asset types at locations and their statuses."}),"\n",(0,i.jsx)(n.h3,{id:"request-body-2",children:"Request Body"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"query assetTypeMetrics ($filter: String, $nextToken: String) {\n  assetTypeMetrics(input: {filter: $filter, nextToken: $nextToken}) {\n    nextToken\n    assetTypes {\n      id\n      name\n      missingCount\n      dueSoonCount\n      overdueCount\n      onhandCount\n      totalCount\n      location {\n        id\n        name\n      }\n      type {\n        id\n        name\n        description\n        customProperties\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-response-1",children:"Example Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "assetTypeMetrics": {\n      "nextToken": null,\n      "assetTypes": [\n        {\n          "id": "Type-1",\n          "name": "Electronics",\n          "onhandCount": 50,\n          "location": { "id": "Warehouse-A", "name": "Warehouse A" }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"list-asset-types-counts-at-locations-api",children:(0,i.jsx)("span",{style:{color:"#004FDB"},children:"List Asset Types Counts at Locations API"})}),"\n",(0,i.jsx)(n.p,{children:"Retrieves total asset type counts at locations."}),"\n",(0,i.jsx)(n.h3,{id:"request-body-3",children:"Request Body"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"query assetTypeLocationMetrics ($filter: String, $nextToken: String) {\n  assetTypeLocationMetrics(input: {filter: $filter, nextToken: $nextToken}) {\n    nextToken\n    assetTypes {\n      totalCount\n      location {\n        id\n        name\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-response-2",children:"Example Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "assetTypeLocationMetrics": {\n      "nextToken": null,\n      "assetTypes": [\n        {\n          "totalCount": 100,\n          "location": { "id": "Warehouse-A", "name": "Warehouse A" }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"errors",children:(0,i.jsx)("span",{style:{color:"#004FDB"},children:"Errors"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Error"}),(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Expired token"}),(0,i.jsx)(n.td,{children:"401"}),(0,i.jsx)(n.td,{children:"Unauthorized"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Invalid token"}),(0,i.jsx)(n.td,{children:"401"}),(0,i.jsx)(n.td,{children:"Unauthorized"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Missing Auth Header"}),(0,i.jsx)(n.td,{children:"401"}),(0,i.jsx)(n.td,{children:"Unauthorized"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"error-responses",children:"Error Responses"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "errors": [\n    {\n      "errorType": "UnauthorizedException",\n      "message": "Token has expired."\n    }\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);