# Activity

- Rename dotenv to .env
- Use your own database (MONGO_URI in .env)
- populate database

```sh
node ./populate.js
```

- Discuss the content of the followings folders from high level:
  - Models
  - Controllers
  - Routes
  - Middleware
- In package.json file, pay attention to the scripts, dependencies and dev-dependencies
- Test the endpoints using POSTMAN or using vscode REST extension

```http
GET http://localhost:5000/api/v1/products
Content-Type: application/json
```
