# Exercise 1.3: TCP, UDP, and HTTP Analysis

**Difficulty**: 🟡 Intermediate  
**Time**: 25–30 minutes  
**Concepts**: TCP, UDP, latency, reliability, HTTP status codes

## Learning Objectives
By the end of this exercise, students should be able to:
- compare TCP and UDP in plain language
- choose an appropriate transport protocol for common scenarios
- interpret common HTTP status codes
- connect transport behavior to user experience

## Part 1: Choose TCP or UDP

For each case, decide whether **TCP** or **UDP** is the better fit. Then explain why.

1. Loading a banking website
2. Streaming a live sports broadcast
3. Downloading a PDF
4. A real-time multiplayer game
5. Sending login credentials to an API

## Part 2: Status Code Review

Write a plain-English meaning for each status code:
- `200`
- `201`
- `301`
- `400`
- `404`
- `500`

## Part 3: Scenario Analysis

Read each case and answer the questions.

### Scenario A
A video call occasionally drops a few packets, but the audio continues.
- Why might UDP be acceptable here?
- Why might TCP feel worse to the user in this situation?

### Scenario B
A student submits a form and receives a `404` response.
- What does that likely mean?
- Is the problem definitely with the student's browser? Why or why not?

### Scenario C
An online store page loads very slowly, but eventually succeeds.
- Could TCP still be working correctly? Explain.
- What other parts of the network path might also affect performance?

## Part 4: Group Discussion

Discuss:
1. Why is reliability important for some applications but less important for others?
2. Why do web developers need to understand transport behavior if frameworks hide so much detail?

## Exit Ticket
Answer in 2–3 sentences:

**When would you prefer TCP, and when would you prefer UDP?**
