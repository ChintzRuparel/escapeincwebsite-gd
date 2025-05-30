"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, X } from "lucide-react"
import CodeEditor from "@/components/code-editor"

type Category = "frontend" | "backend" | "devops"

interface Technology {
  id: string
  name: string
  category: Category
  color: string
  description: string
  codeSnippet: string
  language: string
}

export default function TechShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend")
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  const technologies: Technology[] = [
    // Frontend
    {
      id: "react",
      name: "React",
      category: "frontend",
      color: "#61DAFB",
      description: "A JavaScript library for building user interfaces, particularly single-page applications.",
      codeSnippet: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`,
      language: "jsx",
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      color: "#000000",
      description: "The React framework for production that enables server-side rendering and static site generation.",
      codeSnippet: `// app/page.tsx
export default async function Page() {
  // This function runs on the server
  const data = await fetch('https://api.example.com/data')
    .then(res => res.json());
  
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>Data items: {data.length}</p>
    </main>
  );
}`,
      language: "tsx",
    },
    {
      id: "vue",
      name: "Vue",
      category: "frontend",
      color: "#4FC08D",
      description: "Progressive JavaScript framework for building user interfaces and single-page applications.",
      codeSnippet: `<template>
  <div>
    <p>{{ message }}</p>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      count: 0
    }
  }
}
</script>

<style scoped>
button {
  background-color: #4FC08D;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>`,
      language: "vue",
    },
    {
      id: "angular",
      name: "Angular",
      category: "frontend",
      color: "#DD0031",
      description:
        "Platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.",
      codeSnippet: `import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`,
  styles: [\`
    button {
      background-color: #DD0031;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
    }
  \`]
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}`,
      language: "typescript",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      color: "#38B2AC",
      description: "A utility-first CSS framework for rapidly building custom user interfaces.",
      codeSnippet: `<!-- Tailwind CSS Example -->
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat? We have the perfect location.</p>
    </div>
  </div>
</div>`,
      language: "html",
    },
    {
      id: "sass",
      name: "SASS",
      category: "frontend",
      color: "#CC6699",
      description:
        "Syntactically Awesome Style Sheets - a preprocessor scripting language that is interpreted or compiled into CSS.",
      codeSnippet: `// Variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Helvetica', sans-serif;

// Nesting
nav {
  background-color: $primary-color;
  padding: 10px;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      margin-right: 10px;
      
      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          color: $secondary-color;
        }
      }
    }
  }
}

// Mixins
@mixin button($bg-color) {
  background-color: $bg-color;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary-button {
  @include button($primary-color);
}

.secondary-button {
  @include button($secondary-color);
}`,
      language: "scss",
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      color: "#3178C6",
      description:
        "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      codeSnippet: `// Interface definition
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  role: 'admin' | 'user' | 'guest';
}

// Function with type annotations
function getUserInfo(user: User): string {
  return \`User \${user.name} (ID: \${user.id}) has role \${user.role}\`;
}

// Generic function
function getFirstItem<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

// Class with access modifiers
class UserManager {
  private users: User[] = [];
  
  constructor(initialUsers: User[] = []) {
    this.users = initialUsers;
  }
  
  public addUser(user: User): void {
    this.users.push(user);
  }
  
  public getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}`,
      language: "typescript",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      color: "#F7DF1E",
      description:
        "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
      codeSnippet: `// Modern JavaScript features
// 1. Arrow functions
const add = (a, b) => a + b;

// 2. Destructuring
const person = { name: 'John', age: 30, job: 'Developer' };
const { name, age } = person;

// 3. Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// 4. Template literals
const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// 5. Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, value: 'Success!' };
      resolve(data);
      // reject(new Error('Failed to fetch data'));
    }, 1000);
  });
}

// 6. Async/await
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// 7. Optional chaining
const user = { 
  details: { 
    address: { 
      street: '123 Main St' 
    } 
  } 
};
const street = user?.details?.address?.street;`,
      language: "javascript",
    },

    // Backend and DevOps categories can be added here
  ]

  const filteredTech = technologies.filter((tech) => tech.category === activeCategory)

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Category Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800/80 backdrop-blur-md p-1 rounded-full flex">
          <CategoryButton
            active={activeCategory === "frontend"}
            onClick={() => setActiveCategory("frontend")}
            label="Frontend"
          />
          <CategoryButton
            active={activeCategory === "backend"}
            onClick={() => setActiveCategory("backend")}
            label="Backend"
          />
          <CategoryButton
            active={activeCategory === "devops"}
            onClick={() => setActiveCategory("devops")}
            label="Tools & DevOps"
          />
        </div>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <button
                onClick={() => {
                  setSelectedTech(tech)
                  setIsInfoOpen(true)
                }}
                className="w-full h-full bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-gray-500 rounded-xl p-6 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  boxShadow: `0 0 20px rgba(${hexToRgb(tech.color)}, 0.1)`,
                }}
              >
                {/* Tech Name */}
                <h3 className="text-2xl font-medium" style={{ color: tech.color }}>
                  {tech.name}
                </h3>

                {/* View Details Button */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-3 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs flex items-center text-cyan-400">
                    View Code <Code className="w-3 h-3 ml-1" />
                  </span>
                </div>

                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 70%)`,
                  }}
                ></div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Tech Details Modal */}
      <AnimatePresence>
        {isInfoOpen && selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsInfoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-3xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsInfoOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tech Name and Description */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: selectedTech.color }}>
                  {selectedTech.name}
                </h3>
                <p className="text-gray-300">{selectedTech.description}</p>
              </div>

              {/* Code Snippet */}
              <div className="mb-4">
                <h4 className="text-lg font-medium text-white mb-3">Example Code</h4>
                <CodeEditor
                  code={selectedTech.codeSnippet}
                  language={selectedTech.language}
                  filename={`example.${selectedTech.language}`}
                />
              </div>

              {/* Background Glow */}
              <div
                className="absolute -inset-40 opacity-10 z-0"
                style={{
                  background: `radial-gradient(circle at center, ${selectedTech.color} 0%, transparent 70%)`,
                }}
              ></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CategoryButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition-all ${
        active ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  )
}

// Helper function to convert hex to rgb
function hexToRgb(hex: string) {
  // Remove the # if it exists
  hex = hex.replace("#", "")

  // Parse the hex values
  const r = Number.parseInt(hex.substring(0, 2), 16) || 0
  const g = Number.parseInt(hex.substring(2, 4), 16) || 0
  const b = Number.parseInt(hex.substring(4, 6), 16) || 0

  return `${r}, ${g}, ${b}`
}
