# Week 1 Cheat Sheet: Internet Communication Fundamentals

## Course Assessment Snapshot
- Homework: **30%**
- Quizzes: **15% total**
- Midterm Exam: **20%**
- Final Project: **35%**

## Core Web Model
**Client** → **Network** → **Server** → **Response back to client**

- A **client** asks for something
- A **server** answers
- The **network** carries the data between them

## URL Basics
Example: `https://www.example.com/products?id=10`

- `https` = protocol
- `www.example.com` = domain
- `/products` = path
- `?id=10` = query string

## IP Address
- Identifies a device on a network
- **IPv4:** `192.168.1.25`
- **IPv6:** `2001:db8::1`
- Devices often get IP settings automatically through **DHCP**

## DNS
**DNS = Domain Name System**

Job:
- converts domain names into IP addresses

Without DNS:
- users would need to memorize numeric IP addresses

## TCP vs. UDP

### TCP
- reliable
- ordered
- connection-oriented
- used by HTTP and HTTPS

### UDP
- fast
- lightweight
- connectionless
- no delivery guarantee
- often used for streaming, gaming, and quick lookups

## HTTP
**HTTP = Hypertext Transfer Protocol**

Used for communication between browsers and servers.

### Common Methods
- `GET` = read data
- `POST` = create/send data
- `PUT` = replace data
- `PATCH` = partially update data
- `DELETE` = remove data

### Common Status Codes
- `200` OK
- `201` Created
- `301`/`302` Redirect
- `400` Bad Request
- `401` Unauthorized
- `403` Forbidden
- `404` Not Found
- `500` Internal Server Error

## HTTPS
- encrypted version of HTTP
- protects data in transit
- uses TLS

## Request-Response Flow
1. User enters a URL
2. DNS finds the IP address
3. Browser opens a network connection
4. Browser sends an HTTP request
5. Server sends an HTTP response
6. Browser renders the result

## Important Headers
- `Content-Type`
- `Accept`
- `Authorization`
- `Cache-Control`
- `Cookie`
- `Set-Cookie`

## Quick Mental Model
If a page does not load, ask:
1. Is the URL correct?
2. Did DNS resolve?
3. Was a connection made?
4. Did the server respond?
5. What HTTP status code came back?

## Week 1 Vocabulary
- client
- server
- packet
- IP address
- DNS
- TCP
- UDP
- HTTP
- HTTPS
- request
- response
- status code
