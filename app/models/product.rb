class Product < ApplicationRecord
  before_create :new_product

  def new_product
    self.title = title
    self.classification = classification
    self.rating = rating
    self.price = price
  end

  def total_of_products
    Product.count
  end
end