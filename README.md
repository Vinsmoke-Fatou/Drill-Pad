# JS Drill Pad

> Vanilla JavaScript exercises built to prove understanding — not just recognition.

This project is the practical capstone of **Phase 0 – JavaScript Foundations**, a structured self-study sprint covering core and advanced JavaScript concepts from scratch. Each exercise in this repository translates a studied concept into a working, testable function — written without frameworks, without libraries, and without looking at solutions.

---

## What this is

A set of 10 standalone JavaScript functions, each solving a real-world-style problem using the concepts covered in Phase 0. The goal is not to build an app or a UI. The goal is to demonstrate that the knowledge is **usable**, not just readable.

Every function runs in Node.js. Every function produces visible output. Every function was written from a blank file.

---

## Concepts covered

| Concept | Exercises |
|---|---|
| Closures & private state | Cart Manager, Rate Limiter |
| Classes & OOP | Event System, Async Queue |
| Async / Promises / `async-await` | Fetch with Retry, Async Queue |
| Error handling | Fetch with Retry, User Validator |
| Higher-order functions | Memoized Fibonacci, Pipeline Builder |
| Array & object manipulation | Paginator, Deep Object Diff |
| ES6+ patterns | All exercises |
| `this` & scope | Event System, Rate Limiter |

---

## Exercises

```
01 — Cart Manager         Closure-based factory with private state
02 — User Validator       Rule-based validation returning structured errors
03 — Fetch with Retry     Async fetching with automatic retry logic
04 — Event System         EventEmitter class built from scratch
05 — Pipeline Builder     Function composition utility with real-world use
06 — Memoized Fibonacci   Caching wrapper with performance comparison
07 — Paginator            Array pagination with edge case handling
08 — Deep Object Diff     Structural comparison of two plain objects
09 — Rate Limiter         Call frequency limiter using closures and timers
10 — Async Queue          Sequential async task execution with ordering guarantees
```

---

## How to run

**Requirements:** Node.js v18 or higher

```bash
# Clone the repository
git clone https://github.com/your-username/js-drill-pad.git
cd js-drill-pad

# Run a single exercise
node exercises/01-cart-manager.js

# Run all exercises
node run-all.js
```

No `npm install` needed. No dependencies.

---

## Project structure

```
js-drill-pad/
├── exercises/
│   ├── 01-cart-manager.js
│   ├── 02-user-validator.js
│   ├── 03-fetch-with-retry.js
│   ├── 04-event-system.js
│   ├── 05-pipeline-builder.js
│   ├── 06-memoized-fibonacci.js
│   ├── 07-paginator.js
│   ├── 08-deep-object-diff.js
│   ├── 09-rate-limiter.js
│   └── 10-async-queue.js
├── run-all.js
└── README.md
```

---

## Context

This project is part of a personal 6-month roadmap to become a fullstack JavaScript developer. Phase 0 covered:

- Loops and iteration patterns
- Objects: advanced patterns and prototypal inheritance
- Classes and OOP in JavaScript
- Error handling (`try / catch / finally / throw`)
- Asynchronous programming (callbacks → Promises → `async/await`)
- Closures and the module pattern
- Scope, hoisting, and the temporal dead zone
- `this` — all four binding rules
- ES6+ syntax and modern patterns

The Drill Pad is the proof-of-work for that phase.

---

## Author

Built by a software engineering student based in Dakar, Senegal.
Part of a structured fullstack JavaScript learning path — April 2026.
