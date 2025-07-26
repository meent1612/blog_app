export const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    content: `React is a JavaScript library for building user interfaces. It's component-based and allows you to create reusable UI components. In this post, we'll explore the core concepts of React including JSX, components, props, and state.

    ## Key Features:
    - Declarative: React makes it painless to create interactive UIs
    - Component-Based: Build encapsulated components
    - Learn Once, Write Anywhere: React can render on the server or mobile apps
    
    Let us know in the comments what you think about React!`,
    authorId: 1,
    date: "2023-01-10",
    likes: 15,
    comments: [1, 2]
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    content: `Today we'll dive into advanced React patterns that can help make your code more maintainable and performant.

    ## Patterns Covered:
    1. **Compound Components**: Components that work together
    2. **Render Props**: Sharing code between components
    3. **Higher-Order Components**: Reusing component logic
    
    ## Performance Tips:
    - Use React.memo for memoization
    - Implement shouldComponentUpdate wisely
    - Consider virtualization for long lists`,
    authorId: 2,
    date: "2023-01-15",
    likes: 8,
    comments: [3]
  },
  {
    id: 3,
    title: "React Hooks Explained",
    content: `Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class.

    ## Most Used Hooks:
    - useState: For managing state
    - useEffect: For side effects
    - useContext: For accessing context
    - useReducer: For complex state logic
    
    ## Custom Hooks:
    You can even create your own hooks to reuse stateful behavior between components.`,
    authorId: 1,
    date: "2023-01-20",
    likes: 12,
    comments: []
  },
  // Add more dummy posts (20 total for pagination)
  ...Array.from({ length: 17 }, (_, i) => ({
    id: i + 4,
    title: `React Tip #${i + 1}`,
    content: `This is post content for React Tip #${i + 1}. Here we discuss various React concepts and best practices that can help you become a better React developer. 

    Some key points to remember:
    - Always use keys when rendering lists
    - Keep components small and focused
    - Use PropTypes for type checking
    - Consider using TypeScript for larger projects
    
    What are your favorite React tips? Share in the comments!`,
    authorId: i % 2 === 0 ? 1 : 2,
    date: `2023-0${Math.floor((i + 4) / 10) + 1}-${((i + 4) % 10) + 10}`,
    likes: Math.floor(Math.random() * 20),
    comments: []
  }))
];