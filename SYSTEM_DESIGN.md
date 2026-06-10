# 5. System Design

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT SIDE (BROWSER)                      │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                     FRONTEND LAYER                           │  │
│  │  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐   │  │
│  │  │   HTML5        │  │   CSS3         │  │ JavaScript   │   │  │
│  │  │  - Structure   │  │ - Styling      │  │ (ES6+)       │   │  │
│  │  │  - Semantic    │  │ - Animations   │  │ - Validation │   │  │
│  │  │    Markup      │  │ - Responsive   │  │ - DOM Manip. │   │  │
│  │  │  - Forms       │  │ - Dark/Light   │  │ - Fetch API  │   │  │
│  │  │  - Navigation  │  │   Mode         │  │ - Events     │   │  │
│  │  └────────────────┘  └────────────────┘  └──────────────┘   │  │
│  │                                                               │  │
│  │  Components:                                                 │  │
│  │  • Navigation Bar (with theme toggle)                        │  │
│  │  • Hero Section (profile intro)                              │  │
│  │  • About Section                                             │  │
│  │  • Skills Section                                            │  │
│  │  • Projects Section                                          │  │
│  │  • Achievements Section                                      │  │
│  │  • Contact Form (with validation)                            │  │
│  │  • Footer                                                    │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    HTTP/HTTPS (JSON)
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         LOCAL STORAGE LAYER                         │
│                                                                     │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Local Storage (Browser API)                          │  │  │
│  │  │  ├─ Save JSON data directly on client side            │  │  │
│  │  │  ├─ Simulate network delay for UX                     │  │  │
│  │  │  └─ Persist data across sessions                      │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  │                                                               │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                                  │

## Data Flow Diagram

```
┌─────────────────────┐
│  User fills form    │
│  in browser         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│  Client-side Validation (JavaScript)    │
│  • Check required fields                │
│  • Validate email format                │
│  • Check message length                 │
└──────────┬──────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│  Save to Local Storage                  │
│  localStorage.setItem(...)              │
└──────────┬──────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│  Frontend Handles Response              │
│  • Show success/error message           │
│  • Reset form fields                    │
│  • Update UI feedback                   │
└─────────────────────────────────────────┘
```

---

## System Components

### Frontend Components
- **Navigation Bar**: Sticky navigation with theme toggle and mobile hamburger menu
- **Hero Section**: Profile introduction with CTA buttons and social links
- **About Section**: Personal biography and background information
- **Skills Section**: Categorized skills (Languages, Frameworks, Styling, Tools)
- **Projects Section**: Featured projects with descriptions and tech stacks
- **Achievements Section**: Hackathon wins and recognitions
- **Contact Form**: Input validation, error handling, success feedback
- **Footer**: Social links and copyright information
- **Theme Toggle**: Dark/Light mode switcher with localStorage persistence

### Storage Components
- **Local Storage**: Used to persist contact form submissions across sessions locally on the browser.

---

## Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | HTML5 | Semantic markup and structure |
| | CSS3 | Styling, animations, responsive design |
| | JavaScript (ES6+) | Interactivity, validation, DOM manipulation, Local Storage |
| **Icons** | Font Awesome | Icon library |
| **Fonts** | Google Fonts (Inter) | Typography |

---

## Security Considerations

- **Input Validation**: Client-side (JavaScript) to ensure data integrity
- **XSS Prevention**: Ensuring stored messages are safely rendered in the future
- **CORS**: Not applicable as no external requests are made
- **Error Handling**: Generic error messages to users
- **Data Sanitization**: Trimming whitespace, removing special characters
