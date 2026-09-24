# REST API — Short Cheat Sheet

GET → Take data from server

```text
GET /api/products
GET /api/products/101
```

POST → Send/Create data on server

```text
POST /api/products
Body → new data
```

PUT → Update/Replace full data

```text
PUT /api/products/101
Body → updated data
```

PATCH → Update part of data

```text
PATCH /api/products/101
Body → changed data
```

DELETE → Delete data

```text
DELETE /api/products/101
```

## Remember

```text
GET     → Take
POST    → Create
PUT     → Update
PATCH   → Partial Update
DELETE  → Remove
```

## Express

```text
req.params → URL data
req.query  → ? query data
req.body   → Sent data
res.json() → Send response
```

### Easy Rule

```text
URL        → Where?
METHOD     → What?
BODY       → What data?
RESPONSE   → Server's answer
```