```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); 
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This is the problem - you are calling setCount twice in quick succession
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```