"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Wrench, ArrowRight, Check, Copy, Terminal, FileCode } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

type TechCategory = "frontend" | "backend" | "tools"
type Technology = {
  name: string
  category: TechCategory
  description: string
  color: string
  lovingReason: string
}

export default function TechnologySelector() {
  const { toast } = useToast()
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("frontend")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Technology data with added "lovingReason" field
  const technologies: Technology[] = [
    // Frontend
    {
      name: "React",
      category: "frontend",
      description: "A JavaScript library for building user interfaces",
      color: "from-blue-500 to-blue-600",
      lovingReason:
        "Its component-based architecture makes building complex UIs simple and maintainable. The virtual DOM provides excellent performance, and the ecosystem is unmatched.",
    },
    {
      name: "Next.js",
      category: "frontend",
      description: "The React framework for production",
      color: "from-black to-gray-800",
      lovingReason:
        "It combines the best of React with server-side rendering, static site generation, and API routes. The developer experience is top-notch with features like file-based routing.",
    },
    {
      name: "Vue",
      category: "frontend",
      description: "Progressive JavaScript framework",
      color: "from-green-500 to-green-600",
      lovingReason:
        "Its gentle learning curve and intuitive template syntax make it approachable. The Composition API provides excellent code organization for complex applications.",
    },
    {
      name: "Angular",
      category: "frontend",
      description: "Platform for building mobile & desktop web applications",
      color: "from-red-500 to-red-600",
      lovingReason:
        "Its comprehensive approach provides everything needed for large applications. TypeScript integration, dependency injection, and RxJS make it powerful for enterprise apps.",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      description: "Utility-first CSS framework",
      color: "from-cyan-500 to-cyan-600",
      lovingReason:
        "It speeds up development with utility classes that can be composed to create any design. The approach eliminates the need for naming CSS classes and reduces CSS bloat.",
    },
    {
      name: "SASS",
      category: "frontend",
      description: "CSS with superpowers",
      color: "from-pink-500 to-pink-600",
      lovingReason:
        "Its variables, nesting, mixins, and functions make CSS more maintainable and DRY. The ability to split code into multiple files improves organization.",
    },
    {
      name: "TypeScript",
      category: "frontend",
      description: "JavaScript with syntax for types",
      color: "from-blue-600 to-blue-700",
      lovingReason:
        "It catches errors during development rather than runtime. The improved IDE support, code navigation, and self-documenting nature make teams more productive.",
    },
    {
      name: "JavaScript",
      category: "frontend",
      description: "The programming language of the web",
      color: "from-yellow-400 to-yellow-500",
      lovingReason:
        "Its versatility allows it to run everywhere from browsers to servers. Modern features like async/await, modules, and arrow functions make it powerful yet approachable.",
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      description: "JavaScript runtime built on Chrome's V8 engine",
      color: "from-green-600 to-green-700",
      lovingReason:
        "It allows using JavaScript for both frontend and backend, simplifying the tech stack. Its event-driven, non-blocking I/O model makes it perfect for scalable applications.",
    },
    {
      name: "Express",
      category: "backend",
      description: "Fast, unopinionated web framework for Node.js",
      color: "from-gray-600 to-gray-700",
      lovingReason:
        "Its minimalist approach provides just what you need without unnecessary complexity. The middleware pattern makes it flexible and extensible for any project.",
    },
    {
      name: "Django",
      category: "backend",
      description: "High-level Python web framework",
      color: "from-green-800 to-green-900",
      lovingReason:
        "Its 'batteries-included' philosophy provides everything needed out of the box. The admin interface, ORM, and security features accelerate development significantly.",
    },
    {
      name: "Ruby on Rails",
      category: "backend",
      description: "Server-side web application framework",
      color: "from-red-600 to-red-700",
      lovingReason:
        "Its convention over configuration approach speeds up development. The elegant syntax and focus on developer happiness make it a joy to work with.",
    },
    {
      name: "MongoDB",
      category: "backend",
      description: "Document-oriented NoSQL database",
      color: "from-green-500 to-green-600",
      lovingReason:
        "Its flexible schema design adapts to changing requirements. The JSON-like documents align perfectly with JavaScript objects, making development intuitive.",
    },
    {
      name: "PostgreSQL",
      category: "backend",
      description: "Powerful, open source object-relational database",
      color: "from-blue-700 to-blue-800",
      lovingReason:
        "Its rock-solid reliability and ACID compliance ensure data integrity. Advanced features like JSON storage, full-text search, and extensibility make it versatile.",
    },
    {
      name: "GraphQL",
      category: "backend",
      description: "Query language for your API",
      color: "from-pink-600 to-pink-700",
      lovingReason:
        "It solves the over-fetching and under-fetching problems of REST. Clients can request exactly what they need, and the self-documenting schema improves API discoverability.",
    },
    {
      name: "Firebase",
      category: "backend",
      description: "Google's mobile platform for app development",
      color: "from-yellow-500 to-yellow-600",
      lovingReason:
        "It provides a complete backend solution with minimal setup. Real-time database, authentication, hosting, and cloud functions accelerate development significantly.",
    },

    // Tools & DevOps
    {
      name: "Git",
      category: "tools",
      description: "Distributed version control system",
      color: "from-orange-500 to-orange-600",
      lovingReason:
        "Its distributed nature allows for flexible workflows. Branching and merging capabilities make collaboration seamless, and the extensive tooling ecosystem is invaluable.",
    },
    {
      name: "Docker",
      category: "tools",
      description: "Platform for developing, shipping, and running applications",
      color: "from-blue-500 to-blue-600",
      lovingReason:
        "It eliminates 'works on my machine' problems with consistent environments. The containerization approach simplifies deployment and scaling of applications.",
    },
    {
      name: "Kubernetes",
      category: "tools",
      description: "Container orchestration system",
      color: "from-blue-600 to-blue-700",
      lovingReason:
        "Its declarative configuration and self-healing capabilities ensure reliability. The ecosystem and community support make it the standard for container orchestration.",
    },
    {
      name: "GitHub Actions",
      category: "tools",
      description: "CI/CD platform integrated with GitHub",
      color: "from-gray-700 to-gray-800",
      lovingReason:
        "Its tight integration with GitHub repositories streamlines workflows. The marketplace of pre-built actions and simple YAML configuration make automation accessible.",
    },
    {
      name: "AWS",
      category: "tools",
      description: "Cloud computing services",
      color: "from-orange-400 to-orange-500",
      lovingReason:
        "Its comprehensive suite of services covers virtually every cloud need. The maturity, reliability, and global infrastructure make it suitable for businesses of any size.",
    },
    {
      name: "Vercel",
      category: "tools",
      description: "Platform for frontend frameworks and static sites",
      color: "from-black to-gray-800",
      lovingReason:
        "Its focus on frontend deployment provides an unmatched developer experience. Preview deployments, edge functions, and seamless Git integration accelerate workflows.",
    },
    {
      name: "Jest",
      category: "tools",
      description: "JavaScript testing framework",
      color: "from-red-500 to-red-600",
      lovingReason:
        "Its zero-config setup and watch mode improve testing workflows. Snapshot testing, mocking capabilities, and parallel test execution make it comprehensive yet easy to use.",
    },
    {
      name: "Webpack",
      category: "tools",
      description: "Static module bundler for JavaScript applications",
      color: "from-blue-400 to-blue-500",
      lovingReason:
        "Its powerful module bundling capabilities optimize application delivery. The plugin ecosystem and code splitting features enable sophisticated build pipelines.",
    },
  ]

  // Add this after the technologies array
  const codeSamples = {
    // Frontend
    React: {
      filename: "App.jsx",
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;`,
    },
    "Next.js": {
      filename: "page.tsx",
      code: `import { GetServerSideProps } from 'next';

// This page uses Server-Side Rendering
export default function Product({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${"{product.price}"}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(\`https://api.example.com/products/\${id}\`);
  const product = await res.json();
  
  return {
    props: { product },
  };
}`,
    },
    Vue: {
      filename: "Counter.vue",
      code: `<template>
  <div class="counter">
    <h1>Vue Counter</h1>
    <p>You clicked {{ count }} times</p>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}

function reset() {
  count.value = 0;
}
</script>

<style scoped>
.counter {
  text-align: center;
  padding: 20px;
}
</style>`,
    },
    Angular: {
      filename: "counter.component.ts",
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div class="counter">
      <h1>Angular Counter</h1>
      <p>You clicked {{count}} times</p>
      <button (click)="increment()">Increment</button>
      <button (click)="reset()">Reset</button>
    </div>
  \`,
  styles: [\`
    .counter {
      text-align: center;
      padding: 20px;
    }
  \`]
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
  
  reset() {
    this.count = 0;
  }
}`,
    },
    "Tailwind CSS": {
      filename: "tailwind.html",
      code: `<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" 
           src="/img/building.jpg" alt="Modern building">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        Company retreats
      </div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-slate-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
      </p>
      <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
        Book now
      </button>
    </div>
  </div>
</div>`,
    },
    SASS: {
      filename: "styles.scss",
      code: `// Variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$border-radius: 4px;

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-style($bg-color) {
  background-color: $bg-color;
  color: white;
  border: none;
  border-radius: $border-radius;
  padding: 10px 15px;
  cursor: pointer;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

// Usage
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  &-primary {
    @include button-style($primary-color);
  }
  
  &-secondary {
    @include button-style($secondary-color);
  }
}

.card {
  border-radius: $border-radius;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &-header {
    @include flex-center;
    border-bottom: 1px solid #eee;
  }
}`,
    },
    TypeScript: {
      filename: "user.ts",
      code: `// Define interfaces
interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  address: Address;
  isActive: boolean;
  roles: string[];
}

// Type guards
function isAdmin(user: User): boolean {
  return user.roles.includes('admin');
}

// Generic function
function filterUsers<T extends User>(
  users: T[], 
  predicate: (user: T) => boolean
): T[] {
  return users.filter(predicate);
}

// Usage
const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 28,
    address: {
      street: '123 Main St',
      city: 'Boston',
      zipCode: '02108',
      country: 'USA'
    },
    isActive: true,
    roles: ['user', 'admin']
  },
  // More users...
];

const activeAdmins = filterUsers(users, 
  user => user.isActive && isAdmin(user)
);`,
    },
    JavaScript: {
      filename: "app.js",
      code: `// Modern JavaScript features
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching user data failed:', error);
    throw error;
  }
};

// Using optional chaining and nullish coalescing
const displayUserInfo = (user) => {
  const name = user?.name ?? 'Unknown User';
  const email = user?.contact?.email ?? 'No email provided';
  
  return {
    displayName: name,
    contactInfo: email,
    isVerified: user?.verified ?? false
  };
};

// Using array methods
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 }
];

const adultUsers = users
  .filter(user => user.age >= 30)
  .map(user => ({
    id: user.id,
    name: user.name.toUpperCase()
  }));

console.log(adultUsers);`,
    },

    // Backend
    "Node.js": {
      filename: "server.js",
      code: `const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\\/+|\\/+$/g, '');
  
  // Set default content type
  res.setHeader('Content-Type', 'application/json');
  
  // Simple routing
  try {
    if (trimmedPath === '') {
      // Home route
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'Welcome to our API' }));
    } 
    else if (trimmedPath === 'users') {
      // Get users
      const data = await fs.readFile('./data/users.json', 'utf8');
      res.writeHead(200);
      res.end(data);
    }
    else if (trimmedPath.startsWith('users/')) {
      // Get specific user
      const userId = trimmedPath.split('/')[1];
      const data = await fs.readFile('./data/users.json', 'utf8');
      const users = JSON.parse(data);
      const user = users.find(u => u.id.toString() === userId);
      
      if (user) {
        res.writeHead(200);
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'User not found' }));
      }
    }
    else {
      // Not found
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Route not found' }));
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
});

server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
    },
    Express: {
      filename: "app.js",
      code: `const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// User routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Product routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

module.exports = app;`,
    },
    Django: {
      filename: "views.py",
      code: `from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# Function-based views
def home(request):
    """Render the home page with featured products."""
    featured_products = Product.objects.filter(featured=True)[:6]
    categories = Category.objects.all()
    
    context = {
        'featured_products': featured_products,
        'categories': categories,
    }
    return render(request, 'shop/home.html', context)

@login_required
def product_detail(request, slug):
    """Display a single product with its details."""
    product = get_object_or_404(Product, slug=slug, available=True)
    related_products = Product.objects.filter(
        category=product.category
    ).exclude(id=product.id)[:4]
    
    context = {
        'product': product,
        'related_products': related_products,
    }
    return render(request, 'shop/product_detail.html', context)

# API views with Django REST Framework
class ProductViewSet(viewsets.ModelViewSet):
    """API endpoint for products."""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Filter products by category if provided."""
        queryset = Product.objects.all()
        category = self.request.query_params.get('category', None)
        
        if category:
            queryset = queryset.filter(category__slug=category)
        
        return queryset

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for categories (read-only)."""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer`,
    },
    "Ruby on Rails": {
      filename: "products_controller.rb",
      code: `class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]
  
  # GET /products
  def index
    @products = Product.all
    
    if params[:category].present?
      @category = Category.find_by_slug(params[:category])
      @products = @products.where(category: @category) if @category
    end
    
    if params[:search].present?
      @products = @products.search_by_name(params[:search])
    end
    
    @products = @products.page(params[:page]).per(12)
    
    respond_to do |format|
      format.html
      format.json { render json: @products }
    end
  end
  
  # GET /products/1
  def show
    @related_products = @product.related_products
    
    respond_to do |format|
      format.html
      format.json { render json: @product }
    end
  end
  
  # GET /products/new
  def new
    @product = current_user.products.build
    authorize @product
  end
  
  # POST /products
  def create
    @product = current_user.products.build(product_params)
    authorize @product
    
    if @product.save
      redirect_to @product, notice: 'Product was successfully created.'
    else
      render :new
    end
  end
  
  # PATCH/PUT /products/1
  def update
    authorize @product
    
    if @product.update(product_params)
      redirect_to @product, notice: 'Product was successfully updated.'
    else
      render :edit
    end
  end
  
  # DELETE /products/1
  def destroy
    authorize @product
    @product.destroy
    redirect_to products_url, notice: 'Product was successfully destroyed.'
  end
  
  private
  
  def set_product
    @product = Product.find(params[:id])
  end
  
  def product_params
    params.require(:product).permit(:name, :description, :price, 
                                   :category_id, :featured, images: [])
  end
end`,
    },
    MongoDB: {
      filename: "mongodb-queries.js",
      code: `// Connect to MongoDB
const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const database = client.db('e-commerce');
    const products = database.collection('products');
    const orders = database.collection('orders');
    
    // CRUD Operations
    
    // Create - Insert a document
    const newProduct = {
      name: 'Wireless Headphones',
      price: 99.99,
      category: 'Electronics',
      features: ['Noise cancellation', 'Bluetooth 5.0', '30h battery'],
      inStock: true,
      createdAt: new Date()
    };
    
    const insertResult = await products.insertOne(newProduct);
    console.log(\`Inserted document with _id: \${insertResult.insertedId}\`);
    
    // Read - Query documents
    // Find all electronics products
    const electronicProducts = await products
      .find({ category: 'Electronics' })
      .sort({ price: -1 })
      .toArray();
    
    console.log('Electronic products:', electronicProducts);
    
    // Find products with price range and in stock
    const filteredProducts = await products.find({
      price: { $gte: 50, $lte: 200 },
      inStock: true
    }).toArray();
    
    // Update - Modify documents
    const updateResult = await products.updateMany(
      { category: 'Electronics' },
      { $set: { discount: 0.1 } }
    );
    
    console.log(\`Updated \${updateResult.modifiedCount} documents\`);
    
    // Delete - Remove documents
    const deleteResult = await products.deleteOne({ 
      name: 'Wireless Headphones' 
    });
    
    console.log(\`Deleted \${deleteResult.deletedCount} document\`);
    
    // Aggregation pipeline
    const salesByCategory = await orders.aggregate([
      { $unwind: '$items' },
      { $lookup: {
          from: 'products',
          localField: 'items.productId',
          foreignField: '_id',
          as: 'productDetails'
        }
      },
      { $unwind: '$productDetails' },
      { $group: {
          _id: '$productDetails.category',
          totalSales: { $sum: { $multiply: ['$items.quantity', '$items.price'] } },
          count: { $sum: 1 }
        }
      },
      { $sort: { totalSales: -1 } }
    ]).toArray();
    
    console.log('Sales by category:', salesByCategory);
    
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

main().catch(console.error);`,
    },
    PostgreSQL: {
      filename: "queries.sql",
      code: `-- Create tables with relationships
CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  inventory_count INTEGER NOT NULL DEFAULT 0,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(customer_id),
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'pending',
  total_amount DECIMAL(10, 2)
);

CREATE TABLE order_items (
  order_item_id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(order_id),
  product_id INTEGER REFERENCES products(product_id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

-- Add indexes for performance
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- Insert sample data
INSERT INTO customers (first_name, last_name, email)
VALUES 
  ('John', 'Doe', 'john@example.com'),
  ('Jane', 'Smith', 'jane@example.com'),
  ('Bob', 'Johnson', 'bob@example.com');

INSERT INTO products (name, description, price, inventory_count, category)
VALUES
  ('Laptop', 'High-performance laptop', 1299.99, 10, 'Electronics'),
  ('Headphones', 'Wireless noise-cancelling', 249.99, 20, 'Electronics'),
  ('Coffee Maker', 'Programmable coffee maker', 89.99, 15, 'Kitchen');

-- Complex query: Sales report by category
SELECT 
  p.category,
  COUNT(oi.order_item_id) AS items_sold,
  SUM(oi.quantity) AS total_quantity,
  SUM(oi.quantity * oi.price) AS total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.order_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY p.category
ORDER BY total_revenue DESC;

-- Using a CTE to find top customers
WITH customer_spending AS (
  SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    c.email,
    SUM(o.total_amount) AS total_spent
  FROM customers c
  JOIN orders o ON c.customer_id = o.customer_id
  WHERE o.status = 'completed'
  GROUP BY c.customer_id
)
SELECT * FROM customer_spending
WHERE total_spent > 1000
ORDER BY total_spent DESC
LIMIT 10;

-- Using a window function to rank products by sales
SELECT 
  p.product_id,
  p.name,
  p.category,
  SUM(oi.quantity) AS units_sold,
  RANK() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity) DESC) as rank_in_category
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id
ORDER BY p.category, units_sold DESC;`,
    },
    GraphQL: {
      filename: "schema.graphql",
      code: `# GraphQL Schema Definition

# Types
type User {
  id: ID!
  username: String!
  email: String!
  profile: Profile
  posts: [Post!]
  comments: [Comment!]
  createdAt: String!
  updatedAt: String
}

type Profile {
  id: ID!
  user: User!
  firstName: String
  lastName: String
  bio: String
  avatar: String
  location: String
  website: String
  socialLinks: [SocialLink!]
}

type SocialLink {
  platform: SocialPlatform!
  url: String!
}

enum SocialPlatform {
  TWITTER
  FACEBOOK
  INSTAGRAM
  LINKEDIN
  GITHUB
  YOUTUBE
}

type Post {
  id: ID!
  title: String!
  content: String!
  excerpt: String
  slug: String!
  author: User!
  categories: [Category!]!
  tags: [Tag!]
  comments: [Comment!]
  status: PostStatus!
  featuredImage: String
  publishedAt: String
  createdAt: String!
  updatedAt: String
}

enum PostStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

type Category {
  id: ID!
  name: String!
  slug: String!
  description: String
  posts: [Post!]
}

type Tag {
  id: ID!
  name: String!
  slug: String!
  posts: [Post!]
}

type Comment {
  id: ID!
  content: String!
  author: User!
  post: Post!
  parent: Comment
  replies: [Comment!]
  createdAt: String!
  updatedAt: String
}

# Inputs
input CreateUserInput {
  username: String!
  email: String!
  password: String!
}

input UpdateProfileInput {
  firstName: String
  lastName: String
  bio: String
  avatar: String
  location: String
  website: String
}

input CreatePostInput {
  title: String!
  content: String!
  excerpt: String
  categoryIds: [ID!]!
  tagIds: [ID!]
  status: PostStatus
  featuredImage: String
}

# Queries
type Query {
  # User queries
  me: User
  user(id: ID!): User
  users(limit: Int, offset: Int): [User!]!
  
  # Post queries
  post(id: ID!): Post
  postBySlug(slug: String!): Post
  posts(
    limit: Int, 
    offset: Int, 
    status: PostStatus, 
    categoryId: ID
  ): [Post!]!
  
  # Category and tag queries
  categories: [Category!]!
  category(id: ID!): Category
  categoryBySlug(slug: String!): Category
  tags: [Tag!]!
  tag(id: ID!): Tag
}

# Mutations
type Mutation {
  # User mutations
  register(input: CreateUserInput!): AuthPayload!
  login(email: String!, password: String!): AuthPayload!
  updateProfile(input: UpdateProfileInput!): Profile!
  
  # Post mutations
  createPost(input: CreatePostInput!): Post!
  updatePost(id: ID!, input: CreatePostInput!): Post!
  deletePost(id: ID!): Boolean!
  
  # Comment mutations
  addComment(postId: ID!, content: String!, parentId: ID): Comment!
  updateComment(id: ID!, content: String!): Comment!
  deleteComment(id: ID!): Boolean!
}

# Auth payload
type AuthPayload {
  token: String!
  user: User!
}

# Subscriptions
type Subscription {
  newPost: Post!
  newComment(postId: ID!): Comment!
}
`,
    },
    Firebase: {
      filename: "firebase-app.js",
      code: `// Firebase Web App Configuration
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  onSnapshot 
} from 'firebase/firestore';
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Authentication functions
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

// Firestore functions
export const createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
};

export const getDocument = async (collectionName, documentId) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw error;
  }
};

export const queryDocuments = async (collectionName, conditions = [], sortOptions = {}, limitCount = 0) => {
  try {
    let q = collection(db, collectionName);
    
    // Apply where conditions
    conditions.forEach(condition => {
      q = query(q, where(condition.field, condition.operator, condition.value));
    });
    
    // Apply sorting
    if (sortOptions.field) {
      q = query(q, orderBy(sortOptions.field, sortOptions.direction || 'asc'));
    }
    
    // Apply limit
    if (limitCount > 0) {
      q = query(q, limit(limitCount));
    }
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error querying documents:', error);
    throw error;
  }
};

// Storage functions
export const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Real-time updates
export const subscribeToCollection = (collectionName, callback) => {
  const q = collection(db, collectionName);
  return onSnapshot(q, (querySnapshot) => {
    const documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(documents);
  });
};`,
    },

    // Tools & DevOps
    Git: {
      filename: "git-commands.sh",
      code: `#!/bin/bash
# Common Git workflow commands

# Initialize a new Git repository
git init

# Clone a repository
git clone https://github.com/username/repository.git

# Check status of working directory
git status

# Stage changes for commit
git add file.txt
git add .

# Commit changes
git commit -m "Add feature X"

# Branching
git branch feature-x
git checkout feature-x
git checkout -b bugfix-y

# Merging
git checkout main
git merge feature-x

# Remote repositories
git remote add origin https://github.com/username/repo.git
git push -u origin main
git pull`,
    },
    Docker: {
      filename: "Dockerfile",
      code: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]`,
    },
    Kubernetes: {
      filename: "deployment.yaml",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nodejs-app
  labels:
    app: nodejs-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nodejs-app
  template:
    metadata:
      labels:
        app: nodejs-app
    spec:
      containers:
      - name: nodejs-app
        image: my-nodejs-app:1.0.0
        ports:
        - containerPort: 3000
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 200m
            memory: 256Mi
---
apiVersion: v1
kind: Service
metadata:
  name: nodejs-app
spec:
  selector:
    app: nodejs-app
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP`,
    },
    "GitHub Actions": {
      filename: "ci-cd.yml",
      code: `name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        run: echo "Deploying to production server"`,
    },
    AWS: {
      filename: "cloudformation.yml",
      code: `AWSTemplateFormatVersion: '2010-09-09'
Description: 'CloudFormation template for a web application'

Resources:
  # S3 bucket for website hosting
  WebsiteBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub '\${AWS::StackName}-website'
      AccessControl: Private
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: error.html

  # CloudFront distribution
  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Origins:
          - DomainName: !GetAtt WebsiteBucket.RegionalDomainName
            Id: S3Origin
            S3OriginConfig:
              OriginAccessIdentity: !Sub 'origin-access-identity/cloudfront/\${CloudFrontOAI}'
        Enabled: true
        DefaultRootObject: index.html`,
    },
    Vercel: {
      filename: "vercel.json",
      code: `{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "env": {
    "DATABASE_URL": "@database_url",
    "API_KEY": "@api_key"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}`,
    },
    Jest: {
      filename: "test.js",
      code: `import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from '../components/UserProfile';

describe('UserProfile Component', () => {
  test('renders user information correctly', () => {
    render(<UserProfile name="John Doe" email="john@example.com" />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('edit button toggles edit mode', () => {
    render(<UserProfile name="John Doe" email="john@example.com" />);
    
    // Click edit button
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    // Should now be in edit mode
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });
});`,
    },
    Webpack: {
      filename: "webpack.config.js",
      code: `const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction 
        ? '[name].[contenthash].js' 
        : '[name].bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      isProduction && new MiniCssExtractPlugin()
    ].filter(Boolean)
  };
};`,
    },
  }

  const filteredTech = technologies.filter((tech) => tech.category === selectedCategory)
  const selectedTechnology = technologies.find((tech) => tech.name === selectedTech)
  const codeSample = selectedTech ? codeSamples[selectedTech] : null

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast({
      title: "Code copied to clipboard",
      description: "You can now paste it anywhere you need",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-xl">
      {/* Category Selector */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <CategoryButton
          isActive={selectedCategory === "frontend"}
          onClick={() => {
            setSelectedCategory("frontend")
            setSelectedTech(null)
          }}
          icon={<Code className="w-5 h-5" />}
          label="Frontend"
        />
        <CategoryButton
          isActive={selectedCategory === "backend"}
          onClick={() => {
            setSelectedCategory("backend")
            setSelectedTech(null)
          }}
          icon={<Database className="w-5 h-5" />}
          label="Backend"
        />
        <CategoryButton
          isActive={selectedCategory === "tools"}
          onClick={() => {
            setSelectedCategory("tools")
            setSelectedTech(null)
          }}
          icon={<Wrench className="w-5 h-5" />}
          label="Tools & DevOps"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Technology Grid */}
        <div className="md:col-span-1">
          <div className="grid grid-cols-2 gap-3">
            <AnimatePresence mode="wait">
              {filteredTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <button
                    onClick={() => setSelectedTech(tech.name === selectedTech ? null : tech.name)}
                    className={cn(
                      "w-full h-24 rounded-lg p-4 text-left transition-all overflow-hidden group",
                      "border border-gray-800 hover:border-gray-700",
                      tech.name === selectedTech
                        ? `bg-gradient-to-br ${tech.color} shadow-lg`
                        : "bg-gray-800/50 hover:bg-gray-800",
                    )}
                  >
                    <div className="absolute inset-0 opacity-10 bg-pattern" />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h3
                          className={cn(
                            "font-bold text-lg transition-colors",
                            tech.name === selectedTech ? "text-white" : "text-gray-100",
                          )}
                        >
                          {tech.name}
                        </h3>
                        {tech.name === selectedTech && <Check className="w-5 h-5 text-white" />}
                      </div>

                      <div
                        className={cn(
                          "text-xs transition-colors",
                          tech.name === selectedTech ? "text-white/80" : "text-gray-400",
                        )}
                      >
                        {tech.name === selectedTech ? (
                          tech.description
                        ) : (
                          <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>Select</span>
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Code Editor and Description */}
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            {selectedTechnology && codeSample ? (
              <motion.div
                key={selectedTechnology.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Why we love this technology */}
                <div className={`p-4 rounded-lg bg-gradient-to-br ${selectedTechnology.color} text-white`}>
                  <h3 className="text-xl font-bold mb-2">Why we love {selectedTechnology.name}</h3>
                  <p className="text-white/90">{selectedTechnology.lovingReason}</p>
                </div>

                {/* Code Editor */}
                <div className="rounded-lg overflow-hidden border border-gray-700 bg-gray-900 shadow-2xl">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center">
                      <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-mono text-gray-400 flex items-center">
                        <FileCode className="h-3.5 w-3.5 mr-1.5" />
                        <span>{codeSample.filename}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(codeSample.code)}
                      className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                      aria-label="Copy code"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 text-sm font-mono overflow-auto max-h-[400px]">
                    <pre className="text-gray-300 whitespace-pre-wrap">{codeSample.code}</pre>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex items-center justify-center p-8 text-center"
              >
                <div className="text-gray-500">
                  <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-medium text-gray-400 mb-2">Select a technology</h3>
                  <p className="max-w-md mx-auto">
                    Choose a technology from the left panel to see code samples and learn why we love working with it.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function CategoryButton({
  isActive,
  onClick,
  icon,
  label,
}: {
  isActive: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all",
        isActive
          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white",
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {isActive && (
        <motion.div layoutId="activeIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
      )}
    </button>
  )
}
