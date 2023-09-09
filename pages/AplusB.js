import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react';

export default function Counter() {
  id: 0
  const [count, setCount] = useState(5);

  function handleClick() {
    setCount(count + 10);
  }

const [result, setresult] = useState(1);

  async function conclusion1() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const resulte = await response.json();
    console.log("Успех:", JSON.stringify(resulte));


    function app(){
      const resul = resulte.map(function(item) {
        return <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>;
    });


    }
     setresult({app});
    console.log(resulte);
  } 
  catch (error) {
      console.error("Ошибка:", error);
    }
}

  return (
    <SimpleGrid>
    <Card>

      <CardHeader>
        <Heading size='md'> AplusB</Heading>
      </CardHeader>

      <CardBody>
        <Text>A=5 B=10</Text>
      </CardBody>

      <CardFooter>
        <button  onClick={handleClick}>прибавить 'B' </button>
      </CardFooter>

      <CardBody>
        <Text>result: {count}</Text>
      </CardBody>

      <CardFooter>
        <button  onClick={conclusion1}>выгрузка </button>
      </CardFooter>

      <CardBody>
        <Text> {result.toString() } {JSON.stringify(result)}</Text>
      </CardBody>

  </Card>
  </SimpleGrid>
  )
}


