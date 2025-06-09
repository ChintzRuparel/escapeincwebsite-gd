"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Wrench, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { github, env, secrets } from "@/lib/env" // Declare variables before using them

type TechCategory = "frontend" | "backend" | "tools"

interface Technology {
  name: string
  category: TechCategory
  filename: string
  code: string
  reasons: string[]
}

export default function TechnologySelector() {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("frontend")
  const [selectedTech, setSelectedTech] = useState<string>("JavaScript")

  const technologies: Technology[] = [
    // Frontend
    {
      name: "JavaScript",
      category: "frontend",
      filename: "app.js",
      code: `// Modern JavaScript ES6+ features
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    
    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      isActive: userData.status === 'active'
    };
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('User fetch failed');
  }
};

// Arrow functions and destructuring
const UserCard = ({ user, onEdit }) => {
  const { name, email, isActive } = user;
  
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <button onClick={() => onEdit(user.id)}>
        Edit User
      </button>
    </div>
  );
};`,
      reasons: [
        "Versatile language that runs everywhere from browsers to servers",
        "Modern ES6+ features like async/await and destructuring",
        "Huge ecosystem with millions of npm packages"
      ]
    },
    {
      name: "React",
      category: "frontend",
      filename: "App.jsx",
      code: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-profile">
      <img src={user.avatar || "/placeholder.svg"} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => setUser({...user, active: !user.active})}>
        {user.active ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

export default UserProfile;`,
      reasons: [
        "Component-based architecture for reusable UI elements",
        "Virtual DOM provides excellent performance optimization",
        "Huge ecosystem with extensive community support"
      ]
    },
    {
      name: "Vue",
      category: "frontend",
      filename: "UserCard.vue",
      code: `<template>
  <div class="user-card">
    <img :src="user.avatar" :alt="user.name" />
    <div class="user-info">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <span :class="statusClass">{{ user.status }}</span>
    </div>
    <button @click="toggleStatus" :disabled="loading">
      {{ loading ? 'Updating...' : 'Toggle Status' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const loading = ref(false)

const statusClass = computed(() => ({
  'status-active': props.user.status === 'active',
  'status-inactive': props.user.status === 'inactive'
}))

const toggleStatus = async () => {
  loading.value = true
  try {
    await updateUserStatus(props.user.id)
  } finally {
    loading.value = false
  }
}
</script>`,
      reasons: [
        "Gentle learning curve with intuitive template syntax",
        "Excellent performance with reactive data binding",
        "Flexible architecture suitable for any project size"
      ]
    },
    {
      name: "Angular",
      category: "frontend",
      filename: "user.component.ts",
      code: `import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: \`
    <div class="user-card">
      <img [src]="user.avatar" [alt]="user.name">
      <div class="user-info">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <span [ngClass]="getStatusClass()">
          {{ user.status }}
        </span>
      </div>
      <button (click)="toggleStatus()" 
              [disabled]="loading">
        {{ loading ? 'Updating...' : 'Toggle Status' }}
      </button>
    </div>
  \`,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  loading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  async toggleStatus(): Promise<void> {
    this.loading = true;
    try {
      await this.userService.updateStatus(this.user.id);
    } finally {
      this.loading = false;
    }
  }

  getStatusClass(): string {
    return \`status-\${this.user.status}\`;
  }
}`,
      reasons: [
        "Full-featured framework with everything built-in",
        "TypeScript-first approach for better code quality",
        "Powerful CLI and development tools"
      ]
    },
    {
      name: "TypeScript",
      category: "frontend",
      filename: "types.ts",
      code: `// Type definitions
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Generic function with type constraints
async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(\`Fetch failed: \${error.message}\`);
  }
}

// Usage with type safety
const getUserById = async (id: number): Promise<User> => {
  const response = await fetchData<User>(\`/api/users/\${id}\`);
  return response.data;
};

// Type guards
function isActiveUser(user: User): user is User & { status: 'active' } {
  return user.status === 'active';
}`,
      reasons: [
        "Catches errors at compile time instead of runtime",
        "Excellent IDE support with autocomplete and refactoring",
        "Makes large codebases more maintainable and scalable"
      ]
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      filename: "components.html",
      code: `<!-- Modern card component with Tailwind CSS -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" 
           src="/img/user-avatar.jpg" alt="User avatar">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        Premium Member
      </div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        John Doe
      </a>
      <p class="mt-2 text-slate-500">
        Full-stack developer with 5+ years of experience in React and Node.js.
      </p>
      <div class="mt-4 flex space-x-2">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Contact
        </button>
        <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  </div>
</div>`,
      reasons: [
        "Utility-first approach speeds up development significantly",
        "No need to write custom CSS or worry about naming conventions",
        "Highly customizable with excellent design system integration"
      ]
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      filename: "server.js",
      code: `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await getUsersFromDatabase();
    res.json({
      success: true,
      data: users,
      count: users.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: error.message
    });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await createUser({ name, email });
    
    res.status(201).json({
      success: true,
      data: newUser,
      message: 'User created successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
      reasons: [
        "JavaScript on the server for full-stack development",
        "Non-blocking I/O for high performance applications",
        "Vast ecosystem with npm packages for everything"
      ]
    },
    {
      name: "Python",
      category: "backend",
      filename: "app.py",
      code: `from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import hashlib
from datetime import datetime

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/users', methods=['GET'])
def get_users():
    try:
        conn = get_db_connection()
        users = conn.execute('SELECT * FROM users ORDER BY created_at DESC').fetchall()
        conn.close()
        
        return jsonify({
            'success': True,
            'data': [dict(user) for user in users],
            'count': len(users)
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Failed to fetch users',
            'error': str(e)
        }), 500

@app.route('/api/users', methods=['POST'])
def create_user():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        
        # Hash password
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        
        conn = get_db_connection()
        cursor = conn.execute(
            'INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, ?)',
            (name, email, hashed_password, datetime.now())
        )
        conn.commit()
        conn.close()
        
        return jsonify({
            'success': True,
            'message': 'User created successfully',
            'user_id': cursor.lastrowid
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Failed to create user',
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True)`,
      reasons: [
        "Clean and readable syntax that's easy to learn and maintain",
        "Extensive libraries for data science, AI, and web development",
        "Strong community support with excellent documentation"
      ]
    },
    {
      name: "PostgreSQL",
      category: "backend",
      filename: "queries.sql",
      code: `-- Create users table with proper constraints
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster email lookups
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);

-- Insert sample data
INSERT INTO users (name, email, password_hash) VALUES
('John Doe', 'john@example.com', 'hashed_password_1'),
('Jane Smith', 'jane@example.com', 'hashed_password_2'),
('Bob Johnson', 'bob@example.com', 'hashed_password_3');

-- Complex query with joins and aggregations
SELECT 
    u.name,
    u.email,
    COUNT(p.id) as post_count,
    MAX(p.created_at) as last_post_date
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name, u.email
HAVING COUNT(p.id) > 0
ORDER BY post_count DESC, last_post_date DESC
LIMIT 10;

-- Update user status with timestamp
UPDATE users 
SET status = 'inactive', updated_at = CURRENT_TIMESTAMP 
WHERE last_login < CURRENT_DATE - INTERVAL '90 days';`,
      reasons: [
        "ACID compliance ensures data integrity and reliability",
        "Advanced features like JSON support and full-text search",
        "Excellent performance with complex queries and large datasets"
      ]
    },
    {
      name: "MongoDB",
      category: "backend",
      filename: "database.js",
      code: `const { MongoClient } = require('mongodb');

class UserDatabase {
  constructor(connectionString) {
    this.client = new MongoClient(connectionString);
    this.db = null;
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db('myapp');
    console.log('Connected to MongoDB');
  }

  async createUser(userData) {
    const users = this.db.collection('users');
    
    const newUser = {
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    };

    const result = await users.insertOne(newUser);
    return { ...newUser, _id: result.insertedId };
  }

  async findUsers(filter = {}, options = {}) {
    const users = this.db.collection('users');
    
    return await users
      .find(filter)
      .sort(options.sort || { createdAt: -1 })
      .limit(options.limit || 50)
      .toArray();
  }

  async updateUser(userId, updateData) {
    const users = this.db.collection('users');
    
    const result = await users.updateOne(
      { _id: new ObjectId(userId) },
      { 
        $set: { 
          ...updateData, 
          updatedAt: new Date() 
        } 
      }
    );

    return result.modifiedCount > 0;
  }

  async aggregateUserStats() {
    const users = this.db.collection('users');
    
    return await users.aggregate([
      { $match: { status: 'active' } },
      { $group: {
          _id: '$department',
          count: { $sum: 1 },
          avgAge: { $avg: '$age' }
        }
      },
      { $sort: { count: -1 } }
    ]).toArray();
  }
}

module.exports = UserDatabase;`,
      reasons: [
        "Flexible schema design adapts to changing requirements",
        "Horizontal scaling capabilities for large applications",
        "JSON-like documents work naturally with JavaScript"
      ]
    },

    // Tools & DevOps
    {
      name: "Docker",
      category: "tools",
      filename: "Dockerfile",
      code: `# Multi-stage build for Node.js application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Create app directory
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# Start the application
CMD ["npm", "start"]`,
      reasons: [
        "Consistent environments across development, testing, and production",
        "Lightweight containers with efficient resource utilization",
        "Easy deployment and scaling with container orchestration"
      ]
    },
    {
      name: "Git",
      category: "tools",
      filename: "git-workflow.sh",
      code: `#!/bin/bash

# Git workflow automation script

# Function to create a new feature branch
create_feature_branch() {
    local branch_name=$1
    
    echo "Creating feature branch: $branch_name"
    git checkout main
    git pull origin main
    git checkout -b "feature/$branch_name"
    git push -u origin "feature/$branch_name"
}

# Function to finish a feature branch
finish_feature() {
    local current_branch=$(git branch --show-current)
    
    echo "Finishing feature branch: $current_branch"
    
    # Ensure we're on a feature branch
    if [[ $current_branch != feature/* ]]; then
        echo "Error: Not on a feature branch"
        exit 1
    fi
    
    # Update main and rebase feature branch
    git checkout main
    git pull origin main
    git checkout $current_branch
    git rebase main
    
    # Push changes and create pull request
    git push origin $current_branch
    echo "Feature branch ready for pull request"
}

# Function to clean up merged branches
cleanup_branches() {
    echo "Cleaning up merged branches..."
    
    # Delete local branches that have been merged
    git branch --merged main | grep -v "main" | xargs -n 1 git branch -d
    
    # Delete remote tracking branches that no longer exist
    git remote prune origin
    
    echo "Branch cleanup complete"
}

# Main script logic
case "$1" in
    "feature")
        create_feature_branch "$2"
        ;;
    "finish")
        finish_feature
        ;;
    "cleanup")
        cleanup_branches
        ;;
    *)
        echo "Usage: $0 {feature|finish|cleanup} [branch-name]"
        exit 1
        ;;
esac`,
      reasons: [
        "Distributed version control enables flexible collaboration workflows",
        "Powerful branching and merging capabilities for parallel development",
        "Industry standard with extensive tooling and platform integration"
      ]
    },
    {
      name: "GitHub Actions",
      category: "tools",
      filename: "ci-cd.yml",
      code: `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '18'
  REGISTRY: ghcr.io\
  IMAGE_NAME: ${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:\
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linting
      run: npm run lint
      
    - name: Run tests
      run: npm run test:coverage
      
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    permissions:
      contents: read
      packages: write
      
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Log in to Container Registry
      uses: docker/login-action@v3
      with:\
        registry: ${{ env.REGISTRY }}\
        username: ${{ github.actor }}\
        password: ${{ secrets.GITHUB_TOKEN }}
        
    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true\
        tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
        
    - name: Deploy to production
      run: |
        echo "Deploying to production environment"
        # Add deployment commands here`,
      reasons: [
        "Seamless integration with GitHub repositories and workflows",
        "Extensive marketplace of pre-built actions for common tasks",
        "Free for public repositories with generous limits for private ones"
      ]
    },
    {
      name: "AWS",
      category: "tools",
      filename: "infrastructure.yml",
      code: `# AWS CloudFormation template for web application
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Scalable web application infrastructure'

Parameters:
  Environment:
    Type: String
    Default: production
    AllowedValues: [development, staging, production]
  
  InstanceType:
    Type: String
    Default: t3.micro
    Description: EC2 instance type

Resources:
  # VPC and networking
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      EnableDnsSupport: true
      Tags:
        - Key: Name
          Value: !Sub '\${Environment}-vpc'

  PublicSubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: !Select [0, !GetAZs '']
      MapPublicIpOnLaunch: true

  # Application Load Balancer
  ApplicationLoadBalancer:
    Type: AWS::ElasticLoadBalancingV2::LoadBalancer
    Properties:
      Name: !Sub '\${Environment}-alb'
      Scheme: internet-facing
      Type: application
      Subnets:
        - !Ref PublicSubnet
      SecurityGroups:
        - !Ref ALBSecurityGroup

  # Auto Scaling Group
  AutoScalingGroup:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      VPCZoneIdentifier:
        - !Ref PublicSubnet
      LaunchTemplate:
        LaunchTemplateId: !Ref LaunchTemplate
        Version: !GetAtt LaunchTemplate.LatestVersionNumber
      MinSize: 1
      MaxSize: 5
      DesiredCapacity: 2
      TargetGroupARNs:
        - !Ref TargetGroup

  # RDS Database
  Database:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceIdentifier: !Sub '\${Environment}-database'
      DBInstanceClass: db.t3.micro
      Engine: postgres
      MasterUsername: admin
      MasterUserPassword: !Ref DatabasePassword
      AllocatedStorage: 20
      VPCSecurityGroups:
        - !Ref DatabaseSecurityGroup

Outputs:
  LoadBalancerDNS:
    Description: DNS name of the load balancer
    Value: !GetAtt ApplicationLoadBalancer.DNSName`,
      reasons: [
        "Comprehensive cloud services covering compute, storage, and networking",
        "Global infrastructure with high availability and disaster recovery",
        "Pay-as-you-use pricing model with extensive free tier options"
      ]
    }
  ]

  const categories = [
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend", icon: Database },
    { id: "tools", label: "Tools & DevOps", icon: Wrench },
  ]

  const filteredTechnologies = technologies.filter((tech) => tech.category === selectedCategory)
  const selectedTechnology = technologies.find((tech) => tech.name === selectedTech)

  // Set default selection when category changes
  const handleCategoryChange = (category: TechCategory) => {
    setSelectedCategory(category)
    const firstTech = technologies.find((tech) => tech.category === category)
    if (firstTech) {
      setSelectedTech(firstTech.name)
    }
  }

  // Syntax highlighting function
  const highlightCode = (code: string) => {
    return code
      .replace(/(\/\/.*$)/gm, '<span class="text-gray-400">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-400">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>')
      .replace(/(`.*?`)/g, '<span class="text-green-400">$1</span>')
      .replace(
        /(import|export|from|const|let|var|function|return|async|await|try|catch|if|else|for|while|class|extends|new|null|undefined|true|false|this)/g,
        '<span class="text-purple-400">$1</span>',
      )
      .replace(/(\b\d+\b)/g, '<span class="text-blue-400">$1</span>')
      .replace(
        /(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|TABLE|INDEX|PRIMARY|KEY|NOT|NULL|DEFAULT|TIMESTAMP)/g,
        '<span class="text-purple-400">$1</span>',
      )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-3rem)]">
          {/* Left Column - Technology Selection */}
          <div className="space-y-6">
            {/* Category Tabs */}
            <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id as TechCategory)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all text-sm font-medium",
                      selectedCategory === category.id
                        ? "bg-slate-800 text-white border border-cyan-400"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                )
              })}
            </div>

            {/* Technology Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <AnimatePresence mode="wait">
                {filteredTechnologies.map((tech) => (
                  <motion.button
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedTech(tech.name)}
                    className={cn(
                      "p-4 rounded-lg text-left transition-all border",
                      selectedTech === tech.name
                        ? "bg-slate-800 border-cyan-400 text-white"
                        : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600",
                    )}
                  >
                    <div className="font-medium text-sm">{tech.name}</div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Code Preview */}
          <div className="space-y-6">
            {selectedTechnology && (
              <>
                {/* Code Preview Panel */}
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  {/* File Tab */}
                  <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-4 text-sm text-gray-300 font-mono">{selectedTechnology.filename}</span>
                    </div>
                  </div>

                  {/* Code Block */}
                  <div className="p-4 overflow-auto max-h-96">
                    <pre className="text-sm font-mono leading-relaxed">
                      <code
                        dangerouslySetInnerHTML={{
                          __html: highlightCode(selectedTechnology.code),
                        }}
                      />
                    </pre>
                  </div>
                </div>

                {/* Why We Love Section */}
                <motion.div
                  key={selectedTechnology.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Why we love {selectedTechnology.name}</h3>
                  <div className="space-y-3">
                    {selectedTechnology.reasons.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">{reason}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
