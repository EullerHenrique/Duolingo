import {Frase} from "./frase.model";


/* O que é mock (simulaçao) ?

  Bom, quando falamos de teste de unidade, queremos testar as coisas isoladamente sem envolver outros componentes,
  mas o que acontece se seu componente (no caso do angular por exemplo) precisa de outro componente pra funcionar?

  Se você testar um componente que usa outro componente, esse não é mais um teste unitário por que envolve mais
  de uma unidade. Esse é o teste de integração.

  Nesse caso, como transformamos um teste de integração em um teste de unidade? Simulando o comportamento
  do segundo componente. Essa simulação é justamente o Mock.

  O Mock é um cara capaz de simular o comportamento de um componente, tornando possível você testar um
  outro componente isoladamente.

  No Angular, onde isso pode estar? Bom, digamos que seu componente lista e ordena um grupo de dados (usuários por exemplo).
  Como você testa a ordenação e a listagem sem pedir isso direto pra API? Você usa um json local mesmo.
  Isso já poderia ser chamado de Mock, você está simulando os dados da API.

  Esse exemplo é muito básico, só pra te dar a ideia mais ou menos do que é.
  Você pode "mockar" várias coisas: dados, comportamentos, etc..


 */

//Mock
export const FRASES: Frase[] =
  [

    new Frase('I like to learn', 'Eu gosto de aprender'),
    new Frase('I watch tv', 'Eu assisto tv'),
    new Frase('How are you? ', 'Como você está?'),
    new Frase('I eat bread',  'Eu como pão'),
    new Frase('I have an important exam', 'Eu tenho uma prova importante'),
    new Frase('A table for two, please','Uma mesa para dois, por favor'),
    new Frase('He has a car','Ele tem um carro'),
    new Frase('A white shirt','Uma camisa branca'),
    new Frase('I live in a big house','Eu moro em uma casa grande'),
    new Frase('They do not work here','Eles não trabalham aqui'),

  ];
