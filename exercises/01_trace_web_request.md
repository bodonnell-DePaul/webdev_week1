# Exercise 1.1: Trace a Web Request

**Difficulty**: 🟢 Beginner  
**Time**: 15–20 minutes  
**Concepts**: client/server model, DNS, HTTP, browser requests

## Learning Objectives
By the end of this exercise, students should be able to:
- identify the client and server in a web interaction
- explain what DNS does before a page loads
- describe the request-response cycle in the correct order
- connect a browser action to an HTTP request

## Part 1: Put the Steps in Order

Cut, copy, or rewrite these steps in the correct order:
- The browser sends an HTTP request
- DNS resolves the domain name to an IP address
- The server sends back an HTTP response
- The user types a URL into the browser
- The browser renders the page

### Reflection
1. Which step happens first?
2. Which step involves translating a human-readable name into a network address?
3. Which step includes status codes like `200` or `404`?

## Part 2: Identify the Role

For each item below, write whether it is mostly acting as a **client**, **server**, or **network service**:
- Chrome or Firefox
- `www.depaul.edu`
- a DNS resolver
- a classroom laptop
- a backend API

## Part 3: Browser Observation

Open any website in your browser and inspect the **Network** tab in developer tools.

Record the following:
1. The first document request URL
2. The HTTP method used
3. The status code returned
4. Two additional resources the page requested after the main document

## Discussion Questions
1. Why does one page load often create many network requests?
2. Why is DNS required even if the user never sees an IP address?
3. What does the browser do after receiving the main HTML document?

## Exit Ticket
Write one short paragraph answering this prompt:

**What happens between typing a URL and seeing a page on screen?**
