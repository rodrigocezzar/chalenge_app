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

GET
Request GET/products
https://chalenge-app.herokuapp.com/api/v1/products/
Listar todos os produtos da base de dados

JUMP TO
Introduction

Routes
##################################################################################################################################################################

{
	"info": {
		"_postman_id": "873048fb-c396-4a51-ad1a-28dca7395c3d",
		"name": "App_chalenge",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Routes",
			"item": [
				{
					"name": "Request GET/",
					"protocolProfileBehavior": {
						"followRedirects": false
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "X-USER-EMAIL",
								"value": "rodrigo@teste.com",
								"type": "text",
								"disabled": true
							},
							{
								"key": "X-USER-TOKEN",
								"value": "sSMcP9QPi3hYDDyscjq5",
								"type": "text",
								"disabled": true
							}
						],
						"url": {
							"raw": "https://chalenge-app.herokuapp.com/api/v1/",
							"protocol": "https",
							"host": [
								"chalenge-app",
								"herokuapp",
								"com"
							],
							"path": [
								"api",
								"v1",
								""
							]
						},
						"description": "Retornar um Status: 200 e uma Mensagem \"REST WebAPI Challenge 20200630 Running\""
					},
					"response": []
				},
				{
					"name": "Request POST/products",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "product[title]",
									"value": "Alface",
									"type": "text"
								},
								{
									"key": "product[classification]",
									"value": "Verdura",
									"type": "text"
								},
								{
									"key": "product[rating]",
									"value": "2",
									"type": "text"
								},
								{
									"key": "product[price]",
									"value": "3",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://chalenge-app.herokuapp.com/api/v1/products",
							"protocol": "https",
							"host": [
								"chalenge-app",
								"herokuapp",
								"com"
							],
							"path": [
								"api",
								"v1",
								"products"
							]
						},
						"description": "O endpoint irá processar o products.json que será enviado pelo Projeto Web"
					},
					"response": []
				},
				{
					"name": "Request PUT/products",
					"request": {
						"method": "PUT",
						"header": [],
						"url": {
							"raw": "https://chalenge-app.herokuapp.com/api/v1/products/1?product[classification]=Fruta",
							"protocol": "https",
							"host": [
								"chalenge-app",
								"herokuapp",
								"com"
							],
							"path": [
								"api",
								"v1",
								"products",
								"1"
							],
							"query": [
								{
									"key": "product[classification]",
									"value": "Fruta"
								}
							]
						},
						"description": "Será responsável por receber atualizações realizadas no Projeto Web"
					},
					"response": []
				},
				{
					"name": "Request DELETE/product/id",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "https://chalenge-app.herokuapp.com/api/v1/products/1",
							"protocol": "https",
							"host": [
								"chalenge-app",
								"herokuapp",
								"com"
							],
							"path": [
								"api",
								"v1",
								"products",
								"1"
							]
						},
						"description": "Remover o produto da base"
					},
					"response": []
				},
				{
					"name": "Request GET/products",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://chalenge-app.herokuapp.com/api/v1/products/",
							"protocol": "https",
							"host": [
								"chalenge-app",
								"herokuapp",
								"com"
							],
							"path": [
								"api",
								"v1",
								"products",
								""
							]
						},
						"description": "Listar todos os produtos da base de dados"
					},
					"response": []
				}
			],
			"description": "GET /: Return a Status: 200 and a Message \"REST WebAPI Challenge 20200630 Running\".\n\nPOST /products: The endpoint will process the products.json which will be sent by the Web Project.\n\nPUT /products/:productId: Will be responsible for receiving updates made to the Web Project.\n\nDELETE /products/:productId: Remove product from base.\n\n\nGET /products/:productId: Get only one product information from the database.\n\nGET /products: List all products in the database."
		}
	]
}
