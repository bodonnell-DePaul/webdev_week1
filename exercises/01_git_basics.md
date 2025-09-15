# Exercise 1.1: Git Basics

**Difficulty**: 🟢 Beginner  
**Time**: 15 minutes  
**Concepts**: Git commands, repository setup, basic workflow

## Learning Objectives
By the end of this exercise, you will be able to:
- Initialize a new Git repository
- Add and commit files
- Check repository status and history
- Understand the basic Git workflow

## Prerequisites
- Git installed on your computer
- Basic command line knowledge
- Text editor (VS Code recommended)

## Instructions

### Part 1: Repository Setup (5 minutes)

1. **Create a new directory** for this exercise:
   ```bash
   mkdir git-practice
   cd git-practice
   ```

2. **Initialize a Git repository**:
   ```bash
   git init
   ```

3. **Configure Git** (if you haven't already):
   ```bash
   git config --global user.name "Your Full Name"
   git config --global user.email "your.email@example.com"
   ```

4. **Verify the repository** was created:
   ```bash
   ls -la
   # You should see a .git directory
   ```

### Part 2: Basic Git Workflow (10 minutes)

5. **Create a simple HTML file** called `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My First Git Project</title>
   </head>
   <body>
       <h1>Welcome to Git!</h1>
       <p>This is my first file tracked by Git.</p>
   </body>
   </html>
   ```

6. **Check the repository status**:
   ```bash
   git status
   ```
   **Question**: What color is the filename? What does this mean?

7. **Add the file to staging**:
   ```bash
   git add index.html
   ```

8. **Check status again**:
   ```bash
   git status
   ```
   **Question**: How did the output change?

9. **Commit your first file**:
   ```bash
   git commit -m "Add initial HTML file"
   ```

10. **Create a CSS file** called `styles.css`:
    ```css
    body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f0f0f0;
    }
    
    h1 {
        color: #333;
        text-align: center;
    }
    
    p {
        font-size: 1.1em;
        line-height: 1.6;
    }
    ```

11. **Update the HTML file** to link the CSS:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My First Git Project</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Welcome to Git!</h1>
        <p>This is my first file tracked by Git.</p>
        <p>Now with styling!</p>
    </body>
    </html>
    ```

12. **Check status and add all changes**:
    ```bash
    git status
    git add .
    git status
    ```

13. **Commit all changes**:
    ```bash
    git commit -m "Add CSS styling and update HTML"
    ```

14. **View your commit history**:
    ```bash
    git log --oneline
    ```

## Challenge Questions

Answer these questions and discuss with a partner:

1. **What's the difference between `git add filename` and `git add .`?**

2. **Why do we use two-step process (add then commit) instead of committing directly?**

3. **What would happen if you made changes to a file but forgot to `git add` before committing?**

4. **Try this experiment**:
   - Make a small change to `index.html` (add another paragraph)
   - Run `git status`
   - Run `git diff`
   - What information does `git diff` provide that `git status` doesn't?

## Expected Output

When you run `git log --oneline`, you should see something like:
```
a1b2c3d Add CSS styling and update HTML
e4f5g6h Add initial HTML file
```

Your `git status` should show:
```
On branch main
nothing to commit, working tree clean
```

## Common Issues and Solutions

### Problem: "Author identity unknown"
**Solution**: Configure your Git identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Problem: "fatal: not a git repository"
**Solution**: Make sure you're in the correct directory and have run `git init`

### Problem: Can't see .git directory
**Solution**: Use `ls -la` to show hidden files, or check that `git init` completed successfully

## Reflection Questions

1. How does the staging area help with organizing commits?
2. When would you want to commit frequently vs. less frequently?
3. How might this workflow help when working on team projects?

## Next Steps

In the next exercise, you'll learn about:
- Working with remote repositories
- Branching and merging
- Collaborative workflows

## Extension Activities

If you finish early:

1. **Practice the workflow**: Create a JavaScript file that adds interactivity to your HTML
2. **Experiment with commands**: Try `git show`, `git diff --cached`, `git log --graph`
3. **Help a classmate**: Share your experience with someone who might be struggling

## Vocabulary Review

- **Repository (repo)**: A directory that contains your project files and Git history
- **Staging area**: A place to prepare changes before committing
- **Commit**: A snapshot of your project at a specific point in time
- **Working directory**: The current state of files in your project folder

Remember: Git is a powerful tool that will become second nature with practice. Don't worry if it feels overwhelming at first!
