class Api::V1::ProductsController < Api::V1::ApiController
      before_action :set_product, only: %i[show edit update destroy]

      def index
        @products = Product.all

        render json: @products
      end

      def show
        render json: @product
      end

      def new
        @product = Product.new
      end

      def create
        @product = Product.new(product_params)
    
        if @product.save
          render json: @product, status: :created
        else
          render json: @product.errors, status: :unprocessable_entity
        end
      end

      def edit; end

      def update
        if @product.update(product_params)
          render json: @product
        else
          render json: @product.errors, status: :unprocessable_entity
        end
      end
          
      def destroy
        @product.destroy
        render json: { message: 'Removed successfully' }, status: :ok
      end

      private

      def set_product
        @product = Product.find(params[:id])
      end
    
      def product_params
        params.require(:product).permit(:title, :classification, :rating, :price)        
      end
end