require 'rails_helper'

RSpec.describe Product do
  context 'testing total of product' do 
    it 'returns total of product' do
      product = Product.create(title: 'Pêra', classification: 'Fruit', rating: 2, price: 40)
      product1 = Product.create(title: 'Pêra1', classification: 'Fruit', rating: 2, price: 40)
      product2 = Product.create(title: 'Pêra2', classification: 'Fruit', rating: 2, price: 40)
      product3 = Product.create(title: 'Pêra3', classification: 'Fruit', rating: 2, price: 40)
      product4 = Product.create(title: 'Pêra4', classification: 'Fruit', rating: 2, price: 40)

      expect(product.total_of_products).to eq 5
    end
  end
end