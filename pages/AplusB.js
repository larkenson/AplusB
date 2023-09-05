import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react';

export default function Counter() {
  id: 0
  const [count, setCount] = useState(5);

  function handleClick() {
    setCount(count + 10);
  }


/*  const [result, setresult] = useState(1);
  function conclusion1() {
    setresult(result);
  }
*/













  async function conclusion1() {
    
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then((response) => {
    // Проверяем успешность запроса и выкидываем ошибку
      console.log('Error occurred!')
    })
  

      
    fetch("https://jsonplaceholder.typicode.com/todos/2", {
      credentials: "include",
    });

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append("userId", "1");
    formData.append("Id", "2");
    formData.append("title", "quis ut nam facilis et officia qui");
    formData.append("completed", "false");
    

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/2", {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    console.log("Успех:", JSON.stringify(result));
    return result
  } 
  catch (error) {
      console.error("Ошибка:", error);
    }
    
const [result, setresult] = useState(1);

  setresult(result);
  
}


    

/*
    async function* makeTextFileLineIterator(fileURL) {
      const utf8Decoder = new TextDecoder("utf-8");
      let response = await fetch(fileURL);
      let reader = response.body.getReader();
      let { value: chunk, done: readerDone } = await reader.read();
      chunk = chunk ? utf8Decoder.decode(chunk) : "";
    
      let re = /\n|\r|\r\n/gm;
      let startIndex = 0;
      let result;
    
      for (;;) {
        let result = re.exec(chunk);
        if (!result) {
          if (readerDone) {
            break;
          }
          let remainder = chunk.substr(startIndex);
          ({ value: chunk, done: readerDone } = await reader.read());
          chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
          startIndex = re.lastIndex = 0;
          continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
      }
      if (startIndex < chunk.length) {
        //последняя строка не имеет символа перевода строки в конце
        yield chunk.substr(startIndex);
      }
    }
    
    for await (let line of makeTextFileLineIterator(urlOfFile)) {
      processLine(line);
    }
    /*












    fetch('https://i.imgur.com/C5QXZ7u.mp4').then(async (response) => {
  let received = 0

  // Получаем поток в переменную
  const reader = response.body.getReader()

  // Считываем общую длину данных
  const contentLength = parseInt(response.headers.get('Content-Length'), 10)

  while (true) {
    // После вызова read() возвращается объект, в котором
    // done — boolean-значение о том закончилась ли информация
    // value — массив байт, которые пришли в этот раз
    const { done, value } = await reader.read()

    if (done) {
      console.log('Получено 100%')
      break
    }

    received += Math.ceil(contentLength / value.length)

    console.log(`Получено ${received}%`)
  }
})
















/*
Там кнопка при нажатии на которую Джон с другого сайта импортировался и инфа с него выводилась на экран
Про это?
UseState
Ну изначально
Когда создаешь стейт рандомные данные посещаешь туда
А потом при импорте подменяешь их и всë
*/
    //https://yandex.ru/images/search?pos=8&from=tabbar&img_url=https%3A%2F%2Fi.artfile.ru%2F4286x2848_602820_%5Bwww.ArtFile.ru%5D.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0&rpt=simage&lr=67
 
    //https://jsonplaceholder.typicode.com/todos/2
    
   



















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

      <CardFooter>
        <button  onClick={conclusion1}>выгрузка </button>
      </CardFooter>

  </Card>
  </SimpleGrid>

  ];
}


