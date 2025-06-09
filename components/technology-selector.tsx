"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Copy, Terminal, FileCode } from "lucide-react"
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

  // Technology data
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
    {
      name: "PHP",
      category: "backend",
      description: "Popular general-purpose scripting language",
      color: "from-purple-600 to-purple-700",
      lovingReason:
        "Its simplicity and wide hosting support make it accessible for beginners. Modern PHP with frameworks like Laravel provides powerful features for web development.",
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

  // Code samples for each technology
  const getCodeSample = (techName: string) => {
    const samples: Record<string, { filename: string; code: string }> = {
      // Frontend
      "React": {
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

export default Counter;`
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
      <p>Price: ${'${product.price}'}</p>
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
}`
      },
      "Vue": {
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
</style>`
      },
      "Angular": {
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
}`
      },
      "Tailwind CSS": {
        filename: "card.html",
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
</div>`
      },
      "SASS": {
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
}`
      },
      "TypeScript": {
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
);`
      },
      "JavaScript": {
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

console.log(adultUsers);`
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
});`
      },
      "Django": {
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
    serializer_class = CategorySerializer`
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
end`
      },
      "MongoDB": {
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
    const electronicProducts = await products
      .find({ category: 'Electronics' })
      .sort({ price: -1 })
      .toArray();
    
    console.log('Electronic products:', electronicProducts);
    
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
    
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

main().catch(console.error);`
      },
      "PostgreSQL": {
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

-- Add indexes for performance
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_orders_customer_id ON orders(customer_id);

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
ORDER BY total_revenue DESC;`
      },
      "GraphQL": {
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
  
  # Category queries
  categories: [Category!]!
  category(id: ID!): Category
}

# Mutations
type Mutation {
  # User mutations
  register(input: CreateUserInput!): AuthPayload!
  login(email: String!, password: String!): AuthPayload!
  
  # Post mutations
  createPost(input: CreatePostInput!): Post!
  updatePost(id: ID!, input: CreatePostInput!): Post!
  deletePost(id: ID!): Boolean!
  
  # Comment mutations
  addComment(postId: ID!, content: String!): Comment!
  updateComment(id: ID!, content: String!): Comment!
  deleteComment(id: ID!): Boolean!
}

# Auth payload
type AuthPayload {
  token: String!
  user: User!
}`
      },
      "Firebase": {
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
};`
      },
      "PHP": {
        filename: "index.php",
        code: `<?php
// Database configuration
$host = 'localhost';
$dbname = 'your_database';
$username = 'your_username';
$password = 'your_password';

try {
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // User class
    class User {
        private $pdo;
        
        public function __construct($pdo) {
            $this->pdo = $pdo;
        }
        
        public function getAllUsers() {
            $stmt = $this->pdo->query("SELECT * FROM users ORDER BY created_at DESC");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function getUserById($id) {
            $stmt = $this->pdo->prepare("SELECT * FROM users WHERE id = ?");
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        
        public function createUser($name, $email, $password) {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $stmt = $this->pdo->prepare("INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, NOW())");
            return $stmt->execute([$name, $email, $hashedPassword]);
        }
        
        public function updateUser($id, $name, $email) {
            $stmt = $this->pdo->prepare("UPDATE users SET name = ?, email = ?, updated_at = NOW() WHERE id = ?");
            return $stmt->execute([$name, $email, $id]);
        }
        
        public function deleteUser($id) {
            $stmt = $this->pdo->prepare("DELETE FROM users WHERE id = ?");
            return $stmt->execute([$id]);
        }
    }
    
    // Usage
    $userManager = new User($pdo);
    
    // Handle different HTTP methods
    $method = $_SERVER['REQUEST_METHOD'];
    
    switch ($method) {
        case 'GET':
            if (isset($_GET['id'])) {
                $user = $userManager->getUserById($_GET['id']);
                echo json_encode($user);
            } else {
                $users = $userManager->getAllUsers();
                echo json_encode($users);
            }
            break;
            
        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            $result = $userManager->createUser($data['name'], $data['email'], $data['password']);
            echo json_encode(['success' => $result]);
            break;
            
        case 'PUT':
            $data = json_decode(file_get_contents('php://input'), true);
            $result = $userManager->updateUser($data['id'], $data['name'], $data['email']);
            echo json_encode(['success' => $result]);
            break;
            
        case 'DELETE':
            $data = json_decode(file_get_contents('php://input'), true);
            $result = $userManager->deleteUser($data['id']);
            echo json_encode(['success' => $result]);
            break;
    }
    
} catch (PDOException $e) {
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
}
?>`
      },

      // Tools & DevOps
      "Git": {
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
git add file.txt                # Stage specific file
git add directory/              # Stage directory
git add -p                      # Interactive staging
git add .                       # Stage all changes

# Commit changes
git commit -m "Add feature X"   # Commit with message
git commit -a -m "Fix bug Y"    # Stage tracked files and commit

# Branching
git branch                      # List branches
git branch feature-x            # Create new branch
git checkout feature-x          # Switch to branch
git checkout -b bugfix-y        # Create and switch to new branch
git switch -c new-feature       # Create and switch (Git 2.23+)

# Merging
git checkout main               # Switch to target branch
git merge feature-x             # Merge feature branch into current branch
git merge --no-ff feature-x     # Merge with no fast-forward

# Rebasing
git checkout feature-x          # Switch to feature branch
git rebase main                 # Rebase feature branch onto main
git rebase -i HEAD~3            # Interactive rebase last 3 commits

# Remote repositories
git remote -v                   # List remotes
git remote add origin https://github.com/username/repo.git
git push -u origin main         # Push and set upstream
git pull                        # Fetch and merge changes
git fetch                       # Fetch without merging

# Viewing history
git log                         # View commit history
git log --oneline --graph       # Compact history with graph
git log -p file.txt             # See changes to specific file
git blame file.txt              # See who changed each line

# Undoing changes
git restore file.txt            # Discard changes (Git 2.23+)
git restore --staged file.txt   # Unstage changes (Git 2.23+)
git reset HEAD~1                # Undo last commit, keep changes
git reset --hard HEAD~1         # Undo last commit, discard changes
git revert abc123f              # Create new commit that undoes commit

# Stashing
git stash                       # Stash changes
git stash list                  # List stashes
git stash apply                 # Apply most recent stash
git stash pop                   # Apply and remove most recent stash
git stash drop                  # Remove most recent stash

# Tags
git tag v1.0.0                  # Create lightweight tag
git tag -a v1.0.0 -m "Version 1.0.0"  # Create annotated tag
git push origin v1.0.0          # Push tag to remote`
      },
      "Docker": {
        filename: "Dockerfile",
        code: `# Use Node.js LTS as the base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Build the application
FROM deps AS builder
# Copy all files
COPY . .
# Build the application
RUN npm run build

# Production image
FROM base AS runner
# Set to production environment
ENV NODE_ENV production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

# Docker commands to build and run:
# docker build -t my-nextjs-app .
# docker run -p 3000:3000 my-nextjs-app`
      },
      "Kubernetes": {
        filename: "deployment.yaml",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nextjs-app
  namespace: production
  labels:
    app: nextjs-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nextjs-app
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: nextjs-app
    spec:
      containers:
      - name: nextjs-app
        image: my-registry.io/nextjs-app:1.0.0
        imagePullPolicy: Always
        ports:
        - containerPort: 3000
          name: http
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 200m
            memory: 256Mi
        readinessProbe:
          httpGet:
            path: /api/health
            port: http
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /api/health
            port: http
          initialDelaySeconds: 15
          periodSeconds: 20
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        - name: NODE_ENV
          value: "production"
---
apiVersion: v1
kind: Service
metadata:
  name: nextjs-app
  namespace: production
spec:
  selector:
    app: nextjs-app
  ports:
  - port: 80
    targetPort: 3000
    name: http
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nextjs-app-ingress
  namespace: production
  annotations:
    kubernetes.io/ingress.class: "nginx"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - app.example.com
    secretName: app-tls-cert
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nextjs-app
            port:
              name: http`
      },
      "GitHub Actions": {
        filename: "ci-cd.yml",
        code: `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Check formatting with Prettier
        run: npm run format:check

  test:
    name: Test
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Upload test coverage
        uses: actions/upload-artifact@v3
        with:
          name: coverage
          path: coverage/

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: test
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: .next/

  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    environment:
      name: production
      url: https://example.com
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
          path: .next/

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${'${{ secrets.VERCEL_TOKEN }}'}
          vercel-org-id: ${'${{ secrets.VERCEL_ORG_ID }}'}
          vercel-project-id: ${'${{ secrets.VERCEL_PROJECT_ID }}'}
          vercel-args: '--prod'`
      },
      "AWS": {
        filename: "cloudformation.yml",
        code: `AWSTemplateFormatVersion: '2010-09-09'
Description: 'CloudFormation template for a serverless web application'

Parameters:
  DomainName:
    Type: String
    Description: Domain name for the application
    Default: example.com
  
  Environment:
    Type: String
    Description: Deployment environment
    Default: production
    AllowedValues:
      - development
      - staging
      - production

Resources:
  # S3 bucket for website hosting
  WebsiteBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub '\${DomainName}-\${Environment}'
      AccessControl: Private
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: error.html
      CorsConfiguration:
        CorsRules:
          - AllowedHeaders: ['*']
            AllowedMethods: [GET]
            AllowedOrigins: ['*']
            MaxAge: 3000
      Tags:
        - Key: Environment
          Value: !Ref Environment

  # CloudFront Origin Access Identity
  CloudFrontOriginAccessIdentity:
    Type: AWS::CloudFront::CloudFrontOriginAccessIdentity
    Properties:
      CloudFrontOriginAccessIdentityConfig:
        Comment: !Sub 'OAI for \${DomainName}'

  # CloudFront distribution
  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Aliases:
          - !Ref DomainName
          - !Sub 'www.\${DomainName}'
        Origins:
          - DomainName: !GetAtt WebsiteBucket.RegionalDomainName
            Id: S3Origin
            S3OriginConfig:
              OriginAccessIdentity: !Sub 'origin-access-identity/cloudfront/\${CloudFrontOriginAccessIdentity}'
        DefaultCacheBehavior:
          AllowedMethods: [GET, HEAD, OPTIONS]
          CachedMethods: [GET, HEAD, OPTIONS]
          Compress: true
          DefaultTTL: 86400
          ForwardedValues:
            QueryString: false
            Cookies:
              Forward: none
          TargetOriginId: S3Origin
          ViewerProtocolPolicy: redirect-to-https
        DefaultRootObject: index.html
        CustomErrorResponses:
          - ErrorCode: 404
            ResponseCode: 200
            ResponsePagePath: /index.html
        Enabled: true
        HttpVersion: http2
        PriceClass: PriceClass_100
        Tags:
          - Key: Environment
            Value: !Ref Environment

  # Lambda function for API backend
  ApiLambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: !Sub '\${DomainName}-api-\${Environment}'
      Handler: index.handler
      Role: !GetAtt LambdaExecutionRole.Arn
      Code:
        ZipFile: |
          exports.handler = async (event) => {
            return {
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: JSON.stringify({
                message: 'Hello from Lambda!'
              })
            };
          };
      Runtime: nodejs18.x
      Timeout: 30
      MemorySize: 128
      Environment:
        Variables:
          ENVIRONMENT: !Ref Environment

  # IAM role for Lambda execution
  LambdaExecutionRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: 'sts:AssumeRole'
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'

Outputs:
  WebsiteBucketName:
    Description: Name of S3 bucket to hold website content
    Value: !Ref WebsiteBucket

  CloudFrontDistributionId:
    Description: ID of CloudFront distribution
    Value: !Ref CloudFrontDistribution

  CloudFrontDomainName:
    Description: Domain name of CloudFront distribution
    Value: !GetAtt CloudFrontDistribution.DomainName`
      },
      "Vercel": {
        filename: "vercel.json",
        code: `{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "regions": ["iad1", "sfo1", "hnd1"],
  "env": {
    "DATABASE_URL": "@database_url",
    "API_KEY": "@api_key",
    "NODE_ENV": "production"
  },
  "build": {
    "env": {
      "NEXT_PUBLIC_API_URL": "@next_public_api_url"
    }
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
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, PUT, DELETE, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-Requested-With, Content-Type, Accept"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    { "source": "/blog", "destination": "/articles", "permanent": true },
    { "source": "/docs", "destination": "/documentation", "permanent": false }
  ],
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" },
    { "source": "/health", "destination": "/api/health" }
  ],
  "cleanUrls": true,
  "trailingSlash": false,
  "github": {
    "enabled": true,
    "silent": false
  }
}`
      },
      "Jest": {
        filename: "test.js",
        code: `import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';
import UserProfile from '../components/UserProfile';

// Mock axios
jest.mock('axios');

// Mock data
const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
  avatar: 'https://example.com/avatar.jpg',
  bio: 'Software developer with 5 years of experience'
};

describe('UserProfile Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders loading state initially', () => {
    render(<UserProfile userId={1} />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });

  test('renders user data after successful API call', async () => {
    // Mock the API response
    axios.get.mockResolvedValueOnce({ data: mockUser });
    
    render(<UserProfile userId={1} />);
    
    // Wait for the user data to load
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    });
    
    // Check if user data is displayed
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('admin')).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toHaveAttribute('src', mockUser.avatar);
    expect(screen.getByText(mockUser.bio)).toBeInTheDocument();
  });

  test('displays error message when API call fails', async () => {
    // Mock the API error
    const errorMessage = 'Failed to fetch user data';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));
    
    render(<UserProfile userId={1} />);
    
    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    });
    
    expect(screen.getByText(/error loading user profile/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
  });

  test('edit button toggles edit mode', async () => {
    // Mock the API response
    axios.get.mockResolvedValueOnce({ data: mockUser });
    
    render(<UserProfile userId={1} editable={true} />);
    
    // Wait for the user data to load
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    });
    
    // Initially not in edit mode
    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument();
    
    // Click edit button
    fireEvent.click(screen.getByRole('button', { name: /edit profile/i }));
    
    // Should now be in edit mode
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bio/i)).toBeInTheDocument();
    
    // Form fields should have the user's data
    expect(screen.getByLabelText(/name/i)).toHaveValue(mockUser.name);
    expect(screen.getByLabelText(/email/i)).toHaveValue(mockUser.email);
    expect(screen.getByLabelText(/bio/i)).toHaveValue(mockUser.bio);
  });
});`
      },
      "Webpack": {
        filename: "webpack.config.js",
        code: `const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction 
        ? 'static/js/[name].[contenthash:8].js' 
        : 'static/js/[name].bundle.js',
      chunkFilename: isProduction 
        ? 'static/js/[name].[contenthash:8].chunk.js' 
        : 'static/js/[name].chunk.js',
      publicPath: '/',
      assetModuleFilename: 'static/media/[name].[hash][ext]'
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 3000,
      hot: true,
      historyApiFallback: true,
      compress: true,
    },
    module: {
      rules: [
        // JavaScript/React
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }]
              ]
            }
          }
        },
        // CSS, PostCSS, Sass
        {
          test: /\.(css|scss|sass)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: !isProduction,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-flexbugs-fixes',
                    [
                      'postcss-preset-env',
                      {
                        autoprefixer: {
                          flexbox: 'no-2009',
                        },
                        stage: 3,
                      },
                    ],
                  ],
                },
                sourceMap: !isProduction,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
          ],
        },
        // Images
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024, // 10kb
            },
          },
        },
        // Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'components': path.resolve(__dirname, 'src/components'),
        'pages': path.resolve(__dirname, 'src/pages'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        name: false,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      runtimeChunk: {
        name: entrypoint => \`runtime-${entrypoint.name}`,
      },
    },
    plugins: [\
      new CleanWebpackPlugin(),\
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,\
        } : undefined,
      }),\
      isProduction && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),\
    ]
    .filter(Boolean),
    performance:
    hints: isProduction ? 'warning' : false,\
    maxEntrypointSize: 512000,\
    maxAssetSize: 512000,\
    ,
  }
}
;`
      }
    };

    return samples[techName] || null;
  };

  const filteredTech = technologies.filter((tech) => tech.category === selectedCategory)
  const selectedTechnology = technologies.find((tech) => tech.name === selectedTech)
  const codeSample = selectedTech ? getCodeSample(selectedTech) : null

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
                        ? \`bg-gradient-to-br ${tech.color} shadow-lg`
\
                        : "bg-gray-800/50 hover:bg-gray-800",
                    )}
                  >
                    <div className="absolute inset-0 opacity-10 bg-pattern" />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h3
                          className=
{
  cn("font-bold text-lg transition-colors", tech.name === selectedTech ? "text-white" : "text-gray-100")
}
\
                        >
{
  tech.name
}
</h3>
{
  tech.name === selectedTech && <Check className="w-5 h-5 text-white" />
}
</div>

                      <div
                        className=
{
  cn("text-xs transition-colors", tech.name === selectedTech ? "text-white/80" : "text-gray-400")
}
\
                      >
{
  tech.name === selectedTech ? (
    tech.description
  ) : (
    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
      <span>Select</span>
      <ArrowRight className="w-3 h-3 ml-1" />
    </div>
  )
}
</div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

{
  /* Code Editor and Description */
}
;<div className="md:col-span-2">
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
