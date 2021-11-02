# README

App_chalenge
Make things easier for your teammates with a complete collection description.
Routes
GET /: Return a Status: 200 and a Message "REST WebAPI Challenge 20200630 Running".

POST /products: The endpoint will process the products.json which will be sent by the Web Project.

PUT /products/:productId: Will be responsible for receiving updates made to the Web Project.

DELETE /products/:productId: Remove product from base.

GET /products/:productId: Get only one product information from the database.

GET /products: List all products in the database.

GET
Request GET/
https://chalenge-app.herokuapp.com/api/v1/
Retornar um Status: 200 e uma Mensagem "REST WebAPI Challenge 20200630 Running"

Request Headers
X-USER-EMAIL
rodrigo@teste.com
X-USER-TOKEN
sSMcP9QPi3hYDDyscjq5
POST
Request POST/products
https://chalenge-app.herokuapp.com/api/v1/products
O endpoint irá processar o products.json que será enviado pelo Projeto Web

{
"id": 4,
"title": "Alface",
"classification": "Verdura",
"rating": 2,
"price": "3.0",
"created_at": "2021-11-02T17:04:16.037Z",
"updated_at": "2021-11-02T17:04:16.037Z"
}

Bodyform-data
product[title]
Alface
product[classification]
Verdura
product[rating]
2
product[price]
3
PUT
Request PUT/products
https://chalenge-app.herokuapp.com/api/v1/products/1?product[classification]=Fruta
Será responsável por receber atualizações realizadas no Projeto Web

Request Params
product[classification]
Fruta
DEL
Request DELETE/product/id
https://chalenge-app.herokuapp.com/api/v1/products/1
Remover o produto da base

{
"message": "Removed successfully"
}

GET
Request GET/products
https://chalenge-app.herokuapp.com/api/v1/products/
Listar todos os produtos da base de dados

[
{
"id": 2,
"title": "Alface",
"classification": "Verdura",
"rating": 2,
"price": "3.0",
"created_at": "2021-11-02T14:09:28.550Z",
"updated_at": "2021-11-02T14:09:28.550Z"
},
{
"id": 3,
"title": "Banana",
"classification": "Fruta",
"rating": 3,
"price": "5.0",
"created_at": "2021-11-02T15:55:47.516Z",
"updated_at": "2021-11-02T15:55:47.516Z"
}
]
