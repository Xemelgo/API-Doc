# Xemelgo Assets List APIs Documentation

## Version 1.1 — May 2024

© 2024 Xemelgo, Inc.  
📧 support@xemelgo.com  

---

## Table of Contents

1. [Release Versions](#release-versions)
2. [Authentication - Login API](#authentication---login-api)
3. [List Assets API](#list-assets-api)
4. [List Asset Types at Locations API](#list-asset-types-at-locations-api)
5. [List Asset Types Counts at Locations API](#list-asset-types-counts-at-locations-api)
6. [Errors](#errors)

---

## Release Versions

| Version | Description             | Author          | Release Date |
|---------|-------------------------|----------------|--------------|
| 1.0     | List API for Assets     | George Gu      | 05/28/2024   |
| 1.1     | Asset Type APIs         | Renuka Agrawal | 06/03/2024   |

---

## Authentication - Login API

To access the GraphQL APIs, users must first authenticate using the Xemelgo Login REST API.

### **Endpoint Details**
- **URL:** `https://rest.api.xemelgo.com/login`
- **Method:** `POST`

### **Request Body**
```json
{
  "email": "base64_encoded_email",
  "password": "base64_encoded_password"
}
```

### **Response Body**
```json
{
  "AccessToken": "token123",
  "ExpiresIn": 3600,
  "TokenType": "Bearer",
  "RefreshToken": "refreshToken",
  "IdToken": "idToken123"
}
```

Use the `IdToken` as the authorization header for all API requests.

---

## List Assets API

Retrieves all asset details with filtering capabilities.

### **Endpoint Details**
- **URL:** `https://api.xemelgo.com/graphql`
- **Method:** `POST`

### **Request Body**
```graphql
query assets ($filter: String, $nextToken: String) {
  assets (input: {filter: $filter, nextToken: $nextToken}) {
    nextToken
    assets {
      id
      name
      description
      trackerSerial
      state
      type {
        name
        id
      }
      lastUpdatedDate
      lastDetectedAtLocation {
        id
        name
      }
    }
  }
}
```

### **Example Response**
```json
{
  "data": {
    "assets": {
      "nextToken": null,
      "assets": [
        {
          "id": "Asset Test 01",
          "trackerSerial": "E280689400005013D8128491",
          "state": "onhand",
          "type": { "name": "Type 1", "id": "Type 1" },
          "lastDetectedAtLocation": { "id": "Shop Floor", "name": "Shop Floor" }
        }
      ]
    }
  }
}
```

---

## List Asset Types at Locations API

Retrieves all asset types at locations and their statuses.

### **Request Body**
```graphql
query assetTypeMetrics ($filter: String, $nextToken: String) {
  assetTypeMetrics(input: {filter: $filter, nextToken: $nextToken}) {
    nextToken
    assetTypes {
      id
      name
      missingCount
      dueSoonCount
      overdueCount
      onhandCount
      totalCount
      location {
        id
        name
      }
      type {
        id
        name
        description
        customProperties
      }
    }
  }
}
```

### **Example Response**
```json
{
  "data": {
    "assetTypeMetrics": {
      "nextToken": null,
      "assetTypes": [
        {
          "id": "Type-1",
          "name": "Electronics",
          "onhandCount": 50,
          "location": { "id": "Warehouse-A", "name": "Warehouse A" }
        }
      ]
    }
  }
}
```

---

## List Asset Types Counts at Locations API

Retrieves total asset type counts at locations.

### **Request Body**
```graphql
query assetTypeLocationMetrics ($filter: String, $nextToken: String) {
  assetTypeLocationMetrics(input: {filter: $filter, nextToken: $nextToken}) {
    nextToken
    assetTypes {
      totalCount
      location {
        id
        name
      }
    }
  }
}
```

### **Example Response**
```json
{
  "data": {
    "assetTypeLocationMetrics": {
      "nextToken": null,
      "assetTypes": [
        {
          "totalCount": 100,
          "location": { "id": "Warehouse-A", "name": "Warehouse A" }
        }
      ]
    }
  }
}
```

---

## Errors

| Error                   | Code | Description         |
|-------------------------|------|---------------------|
| Expired token          | 401  | Unauthorized       |
| Invalid token          | 401  | Unauthorized       |
| Missing Auth Header    | 401  | Unauthorized       |

#### **Error Responses**
```json
{
  "errors": [
    {
      "errorType": "UnauthorizedException",
      "message": "Token has expired."
    }
  ]
}
```


