# Week 1: Internet and Web Foundations

This week is intentionally designed for students who are starting with little or no web background. Before building sites and apps, students need a clear mental model of how the Internet works and how web browsers communicate with servers.

## Week 1 Learning Goals
By the end of week one, students should be able to:
- explain what the course covers and how work will be assessed
- describe the roles of clients, servers, and networks
- explain what IP addresses, DNS, TCP, UDP, HTTP, and HTTPS are
- trace the path of a browser request from a URL to a loaded page
- use browser developer tools to inspect a network request

---

## Syllabus Snapshot
- **Homework:** regular practice and applied assignments throughout the quarter
- **Quizzes:** 3 short quizzes covering core concepts
- **Midterm Exam:** one exam focused on conceptual understanding and applied reasoning
- **Final Project:** a larger web application built over the second half of the course

Students should leave week one understanding both the course structure and the basic communication systems that make web development possible.

---

## 1. The Big Picture: What Happens When You Visit a Website?

When you type a URL into a browser, many systems work together:
1. The browser reads the URL.
2. DNS translates the human-friendly domain name into an IP address.
3. Your device sends packets across one or more networks.
4. TCP or UDP moves that traffic depending on the protocol being used.
5. HTTP or HTTPS defines the format of the request and response.
6. The server returns content such as HTML, CSS, JavaScript, images, and data.
7. The browser renders the page and may make additional requests in the background.

Web development sits on top of this stack. Students need this flow in mind before learning frameworks and APIs.

---

## 2. Clients, Servers, and Packets

### Client
A **client** is a device or application that asks for a resource. In this course, the browser is often the client.

### Server
A **server** is a machine or application that listens for requests and responds with files or data.

### Packet
Data sent across the Internet is broken into smaller units called **packets**. Routers move packets toward their destination. Those packets may not all take the exact same route.

Important idea: the Internet is not one direct wire between a browser and a server. It is a network of networks forwarding packets between devices.

---

## 3. IP Addresses

An **IP address** identifies a device on a network.

### IPv4
IPv4 addresses look like this:
`192.168.1.10`

### IPv6
IPv6 addresses look like this:
`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

### Public vs. Private IP
- **Public IP:** visible to the wider Internet
- **Private IP:** used inside local networks such as homes, schools, or offices

### How Devices Get IP Addresses
Most devices get an address automatically using **DHCP** (Dynamic Host Configuration Protocol). A router or network service assigns:
- an IP address
- a subnet mask
- a default gateway
- DNS server information

### Why This Matters to Web Developers
Every browser request ultimately targets an IP address, even if the user only sees a domain name.

---

## 4. DNS: The Internet's Phone Book

**DNS** stands for **Domain Name System**.

Humans prefer names like:
`www.depaul.edu`

Computers route traffic using IP addresses.

DNS connects those two ideas by translating a domain name into one or more IP addresses.

### Simplified DNS Lookup Flow
1. Browser checks cache
2. Operating system checks cache
3. Resolver asks DNS servers
4. DNS response returns the IP address
5. Browser connects to that address

### Why DNS Matters
- makes the web easier for humans to use
- allows servers to change IP addresses without changing public URLs
- supports services like mail routing, load balancing, and CDN usage

---

## 5. Transport Basics: TCP and UDP

Transport protocols define how data moves between systems.

## TCP
**Transmission Control Protocol** is:
- connection-oriented
- reliable
- ordered
- designed to retransmit lost data

TCP is a good fit when correctness matters more than speed. Web pages, APIs, and most browser traffic rely on TCP.

## UDP
**User Datagram Protocol** is:
- connectionless
- lightweight
- faster to send
- not guaranteed to arrive, arrive once, or arrive in order

UDP is useful when low delay matters more than perfect reliability, such as:
- live voice and video
- online gaming
- some streaming and real-time systems

### Simple Comparison
| Protocol | Reliable | Ordered | Connection Setup | Common Uses |
|----------|----------|---------|------------------|-------------|
| TCP | Yes | Yes | Yes | HTTP, HTTPS, APIs, file transfer |
| UDP | No | No | No | Streaming, VoIP, games, DNS queries |

---

## 6. HTTP and HTTPS

**HTTP** stands for **Hypertext Transfer Protocol**. It defines how clients and servers format requests and responses.

**HTTPS** is HTTP over encryption, typically using TLS. It protects data in transit and verifies the identity of the server.

### Common HTTP Methods
- **GET:** request data
- **POST:** send new data
- **PUT:** replace data
- **PATCH:** update part of existing data
- **DELETE:** remove data

### Example Request Structure
- method
- path
- headers
- optional body

### Example Response Structure
- status code
- headers
- response body

### Common Status Codes
- **200 OK** – request succeeded
- **201 Created** – new resource created
- **301/302** – redirect
- **400 Bad Request** – client sent invalid data
- **401 Unauthorized** – authentication required
- **403 Forbidden** – access denied
- **404 Not Found** – resource does not exist
- **500 Internal Server Error** – problem on the server

### Headers Students Should Recognize
- `Content-Type`
- `Accept`
- `Authorization`
- `Cache-Control`
- `Cookie`
- `Set-Cookie`

---

## 7. The Request-Response Lifecycle

Here is a useful week one mental model:

1. User enters `https://example.com`
2. Browser identifies protocol: HTTPS
3. DNS resolves `example.com` to an IP address
4. Browser opens a TCP connection to the server
5. TLS secures the connection
6. Browser sends an HTTP request
7. Server processes the request
8. Server returns an HTTP response
9. Browser renders the HTML
10. Browser requests linked CSS, JavaScript, fonts, and images

Students should be able to tell this story clearly by the end of the week.

---

## 8. Why Web Developers Need These Fundamentals

These topics are not just theory. They explain:
- why pages load slowly
- why DNS problems break websites
- why APIs return status codes
- why secure sites use HTTPS
- why some applications choose TCP and others use UDP
- why browser network tools are essential for debugging

Understanding the network layer makes later topics like React, authentication, deployment, and API debugging much easier.

---

## 9. Recommended Week 1 Classroom Activities
- Review the syllabus and grading structure together
- Draw the path from browser to server on the board
- Inspect a page load in browser developer tools
- Compare a DNS lookup with an HTTP request
- Sort example use cases into TCP or UDP
- Interpret common HTTP status codes from sample responses

---

## 10. Vocabulary to Master This Week
- browser
- client
- server
- packet
- router
- IP address
- IPv4
- IPv6
- DHCP
- DNS
- TCP
- UDP
- port
- HTTP
- HTTPS
- request
- response
- header
- status code

---

## 11. Looking Ahead

Once students understand how the web moves information, the course can build into:
- HTML structure
- CSS styling
- JavaScript and TypeScript
- React components
- APIs and persistence

Week one lays the foundation for all of that work.
