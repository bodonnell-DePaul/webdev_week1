# Exercise 1.2: HTML Structure

**Difficulty**: 🟢 Beginner  
**Time**: 20 minutes  
**Concepts**: Semantic HTML, forms, accessibility, document structure

## Learning Objectives
By the end of this exercise, you will be able to:
- Create well-structured HTML documents using semantic elements
- Build accessible forms with proper labels and validation
- Understand the importance of document structure for SEO and accessibility
- Use various HTML elements appropriately

## Prerequisites
- Basic HTML knowledge
- Text editor (VS Code recommended)
- Web browser for testing

## Instructions

### Part 1: Semantic Document Structure (10 minutes)

Create a new file called `student-profile.html` with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Student profile page for web development course">
    <title>Student Profile - [Your Name]</title>
</head>
<body>
    <!-- Your task: Fill in the sections below -->
</body>
</html>
```

**Your task**: Inside the `<body>` tag, create the following semantic structure:

1. **Header section** (`<header>`) containing:
   - Main heading with your name
   - Navigation menu (`<nav>`) with links to: Home, About, Projects, Contact

2. **Main content area** (`<main>`) with:
   - **About section** (`<section>`) containing:
     - Section heading "About Me"
     - Paragraph describing your background
     - Unordered list of your hobbies/interests
   
   - **Academic section** (`<section>`) containing:
     - Section heading "Academic Information"
     - Article (`<article>`) about your current studies
     - Ordered list of courses you're taking this semester

   - **Skills section** (`<section>`) containing:
     - Section heading "Technical Skills"
     - Definition list (`<dl>`) with terms and descriptions:
       - Programming Languages: [list languages you know/want to learn]
       - Tools: [list development tools]
       - Frameworks: [list any frameworks]

3. **Aside section** (`<aside>`) containing:
   - Heading "Quick Facts"
   - Address element with your school information
   - Time element showing when you started your program

4. **Footer section** (`<footer>`) containing:
   - Copyright notice
   - Contact information

### Part 2: Form Creation (10 minutes)

Add a **Contact Form** section to your main content area:

```html
<section>
    <h2>Contact Me</h2>
    <form action="#" method="post">
        <!-- Your task: Build a complete contact form -->
    </form>
</section>
```

**Your task**: Create a form with these fields:

1. **Personal Information fieldset**:
   - Full Name (required text input)
   - Email (required email input)
   - Phone (optional tel input)

2. **Message fieldset**:
   - Subject (required select dropdown with options: General Inquiry, Project Collaboration, Study Group, Other)
   - Message (required textarea, minimum 10 characters)
   - Priority level (radio buttons: Low, Medium, High)

3. **Preferences fieldset**:
   - Contact method preferences (checkboxes: Email, Phone, Text)
   - Subscribe to newsletter (checkbox)

4. **Form actions**:
   - Submit button
   - Reset button

**Requirements**:
- Use proper `<label>` elements for all inputs
- Add `required` attribute where appropriate
- Use semantic input types (`email`, `tel`, etc.)
- Group related fields with `<fieldset>` and `<legend>`
- Add helpful placeholder text
- Include proper form validation attributes

## Starter Code Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Student profile page for web development course">
    <title>Student Profile - [Your Name]</title>
    <style>
        /* Basic styling for better readability */
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        
        header, section, aside, footer {
            margin-bottom: 2rem;
            padding: 1rem;
            border-left: 4px solid #007bff;
            background-color: #f8f9fa;
        }
        
        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            gap: 1rem;
        }
        
        nav a {
            text-decoration: none;
            color: #007bff;
        }
        
        fieldset {
            margin-bottom: 1rem;
            padding: 1rem;
            border: 1px solid #ddd;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        input[type="radio"], input[type="checkbox"] {
            width: auto;
            margin-right: 0.5rem;
        }
    </style>
</head>
<body>
    <!-- Your HTML structure goes here -->
</body>
</html>
```

## Validation Checklist

Use this checklist to verify your HTML:

### Document Structure
- [ ] Proper DOCTYPE declaration
- [ ] Lang attribute on html element
- [ ] Complete head section with meta tags
- [ ] Semantic elements used appropriately

### Content Organization
- [ ] Header with navigation
- [ ] Main content area with multiple sections
- [ ] Aside with supplementary information
- [ ] Footer with contact info

### Form Requirements
- [ ] All inputs have associated labels
- [ ] Required fields marked with required attribute
- [ ] Appropriate input types used
- [ ] Fieldsets group related form elements
- [ ] Form has submit and reset buttons

### Accessibility
- [ ] Alt text for any images (if added)
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Form labels properly associated with inputs
- [ ] Semantic HTML elements used throughout

## Testing Your Work

1. **Open in browser**: Open your HTML file in a web browser
2. **Test form validation**: Try submitting the form with missing required fields
3. **Check navigation**: Click on navigation links (they should scroll to sections or show # in URL)
4. **Validate HTML**: Use [W3C Markup Validator](https://validator.w3.org/) to check for errors

## Challenge Questions

1. **Why use semantic elements** like `<header>`, `<main>`, `<section>` instead of just `<div>`?

2. **What happens if you forget to associate labels with form inputs?**

3. **How does proper HTML structure help with SEO?**

4. **Try this experiment**:
   - Remove the `for` attribute from one of your labels
   - Test clicking on that label - does it focus the input?
   - What does this tell you about accessibility?

## Common Mistakes to Avoid

1. **Missing closing tags**: Always close your HTML elements
2. **Improper nesting**: Elements should be properly nested (no overlapping)
3. **Missing form labels**: Every input should have an associated label
4. **Incorrect semantic usage**: Don't use `<section>` just for styling

## Extension Activities

If you finish early:

1. **Add more content**: Include a photo, links to social media, or project portfolio
2. **Improve the form**: Add more validation attributes (`minlength`, `maxlength`, `pattern`)
3. **Test accessibility**: Try navigating your page using only the Tab key
4. **Add structured data**: Research and add schema.org markup for your profile

## Expected Result

Your finished page should:
- Display a well-structured student profile
- Have a functional contact form with validation
- Use semantic HTML throughout
- Be accessible to users with screen readers
- Pass HTML validation without errors

## Reflection Questions

1. How does semantic HTML improve the user experience?
2. What role does form validation play in web applications?
3. How might this structure scale for a larger website?

## Next Steps

In the next exercise, you'll learn how to style this HTML structure with CSS, focusing on:
- Layout techniques (Flexbox and Grid)
- Responsive design
- Interactive elements

## Vocabulary Review

- **Semantic HTML**: HTML elements that convey meaning about their content
- **Fieldset**: Groups related form controls together
- **Legend**: Provides a caption for a fieldset
- **Label**: Describes what an input field is for
- **Validation**: Checking that form data meets certain requirements

Remember: Good HTML structure is the foundation of all web development. Take time to get this right!
