module Api
  module V1
    class WelcomeController < ApplicationController

      def index
        render json: { message: 'REST WebAPI Challenge 20200630 Running' }, status: :ok
      end
      
    end
  end
end