# Skinet

## Overview

Skinet is a multi-layered e-commerce web application project, featuring a backend built with ASP.NET Core and a frontend built with Angular. The project is organized into several main components:

- **API**: ASP.NET Core Web API project serving data and business logic.
- **Core**: Contains entities, interfaces, and business logic abstractions.
- **Infrastructure**: Contains data access layers, repositories, and database configuration.
- **client**: Angular application, organized as a monorepo with multiple sub-libraries (core, application, infrastructure, view, ...).

## System Requirements

- .NET 9.0 SDK or later
- Node.js >= 18.x
- Angular CLI >= 20.x
- SQL Server (or SQLite, depending on configuration)

## Installation & Running

### Backend (API)

1. **Restore dependencies:**
   ```bash
   dotnet restore
   ```
2. **Run migrations and seed the database** (this is done automatically on first run):

   ```bash
   dotnet run --project API/API.csproj
   ```

   The API will run by default at `https://localhost:5050` (or the port configured in `appsettings.json`).

   - **Swagger UI** is available at: [http://localhost:5050/swagger/index.html](http://localhost:5050/swagger/index.html)
   - Database will be automatically migrated and seeded with sample data on first run.
   - You can change the database connection string in `API/appsettings.json`.

### Frontend (client)

1. **Install dependencies:**
   ```bash
   cd client
   npm install
   ```
2. **Start the Angular application:**
   ```bash
   npm start
   # or
   ng serve --project=app
   ```
   The application will run at `http://localhost:4200` by default.

#### Build & Test Commands (Frontend)

- **Build the main app:**
  ```bash
  ng build --project=app
  ```
- **Build sub-libraries:**
  ```bash
  ng build --project=@core/base
  ng build --project=@core/domain
  ng build --project=@application/base
  ng build --project=@infrastructure/base
  ```
- **Run unit tests:**
  ```bash
  ng test
  ```

## Main Packages

### Backend

- `AutoMapper.Extensions.Microsoft.DependencyInjection`
- `Microsoft.AspNetCore.OpenApi`
- `Microsoft.EntityFrameworkCore.Design`
- `Swashbuckle.AspNetCore`

### Frontend

- `@angular/core`, `@angular/material`, `rxjs`, `tailwindcss`, `font-awesome`, ...

## Folder Structure

- `API/` - ASP.NET Core Web API
- `Core/` - Business logic, entities, interfaces
- `Infrastructure/` - Data access, repositories
- `client/` - Angular monorepo (app, core, application, infrastructure, view, ...)

## Notes

- On first run, the API will automatically migrate and seed the database with sample data.
- You can reconfigure the database connection in `API/appsettings.json`.
- **Swagger UI** for API documentation is available at: [http://localhost:5050/swagger/index.html](http://localhost:5050/swagger/index.html)
- The frontend is organized as a monorepo with several libraries for better modularity and scalability.

## Contribution & Development

- Fork and clone the repository.
- Use feature branches for new features or bug fixes.
- Make sure to run tests before submitting a pull request.
- Follow the code style and commit message conventions.

## License

MIT

## Available API Endpoints

### Products

#### Get Products List

- **Route:** `GET /api/v1/products`
- **Query Parameters:**
  - `pageIndex` (int, default: 1): Page number
  - `pageSize` (int, default: 6, max: 50): Page size
  - `brandId` (int, optional): Filter by brand
  - `typeId` (int, optional): Filter by type
  - `sort` (string, optional): Sort by field (e.g. "priceAsc", "priceDesc", "name")
  - `search` (string, optional): Search by product name/description
- **Example:**
  ```http
  GET /api/v1/products?pageIndex=1&pageSize=6&brandId=2&sort=priceDesc&search=boot
  ```
- **Response:**
  ```json
  {
    "pageIndex": 1,
    "pageSize": 6,
    "count": 20,
    "data": [
      {
        "id": 1,
        "name": "Boot Core Black",
        "description": "A durable boot...",
        "price": 199.99,
        "pictureUrl": "http://localhost:5050/images/products/boot-core1.png",
        "productType": "Boots",
        "productBrand": "Core"
      },
      ...
    ]
  }
  ```

#### Get Product by ID

- **Route:** `GET /api/v1/products/{id}`
- **Response:**
  - `200 OK` with product data (same as above)
  - `404 Not Found` with error response:
    ```json
    {
      "statusCode": 404,
      "message": "Product with id {id} not found"
    }
    ```

#### Get Product Brands

- **Route:** `GET /api/v1/products/brands`
- **Response:**
  ```json
  [
    { "id": 1, "name": "Core" },
    { "id": 2, "name": "React" },
    ...
  ]
  ```

#### Get Product Types

- **Route:** `GET /api/v1/products/types`
- **Response:**
  ```json
  [
    { "id": 1, "name": "Boots" },
    { "id": 2, "name": "Gloves" },
    ...
  ]
  ```

### Buggy (Test/Error Endpoints)

- **Route Prefix:** `/api/v1/buggy`
- **Endpoints:**
  - `GET /api/v1/buggy/testauth` (requires auth): returns secret text
  - `GET /api/v1/buggy/notfound`: returns 404
  - `GET /api/v1/buggy/servererror`: triggers server error (500)
  - `GET /api/v1/buggy/badrequest`: returns 400
  - `GET /api/v1/buggy/badrequest/{id}`: returns 200 OK

### Error

- **Route:** `GET /errors/{code}`
- **Response:**
  ```json
  {
    "statusCode": 404,
    "message": "Resource found, it was not"
  }
  ```
