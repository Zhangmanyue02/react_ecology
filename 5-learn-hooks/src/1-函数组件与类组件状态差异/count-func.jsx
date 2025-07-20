export default function CountFunc() {
  let count = 0;
  const increment = () => {
    console.log(count);
    count++;
  };
  return <button onClick={increment}>Cobuttonc:{count}</button>;
}
