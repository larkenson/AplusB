import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react';

export default function Counter() {
  const [count, setCount] = useState(5);

  function handleClick() {
    setCount(count + 10);
  }

  return [
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


  </Card>
  </SimpleGrid>

  ];
}


/*
<CardBody>
<button onClick={handleClick}>прибавить B </button>
</CardBody>
*/