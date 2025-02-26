import { Component } from "@angular/core";

@Component({
  selector: "app-phrases",
  templateUrl: "./phrases.component.html",
  styleUrls: ["./phrases.component.scss"],
  imports: [],
})
export class PhrasesComponent {
  phrases = [
    {
      phrase:
        "O sucesso é uma combinação perfeita de dedicação, persistência e paixão.",
      author: "Autor Desconhecido",
    },
    {
      phrase: "Acredite em si mesmo e conquiste o mundo.",
      author: "Autor Desconhecido",
    },
    {
      phrase:
        "A felicidade está nas pequenas coisas, basta aprendermos a apreciá-las.",
      author: "Autor Desconhecido",
    },
    {
      phrase: "Educar é mostrar a vida a quem ainda não a viu.",
      author: "Rubem Alves",
    },
    {
      phrase:
        "A vida é uma grande universidade, mas pouco ensina a quem não sabe ser um aluno.",
      author: "Augusto Cury",
    },
    {
      phrase: "A educação tem raízes amargas, mas os seus frutos são doces.",
      author: "Aristóteles",
    },
    {
      phrase: "O homem não é nada além daquilo que a educação faz dele.",
      author: "Immanuel Kant",
    },
    {
      phrase: "Se você acha que educação é cara, experimente a ignorância.",
      author: "Robert Orben",
    },
    {
      phrase:
        "Educação nunca foi despesa. Sempre foi investimento com retorno garantido.",
      author: "Sir Arthur Lewis",
    },
    {
      phrase:
        "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.",
      author: "Machado de Assis",
    },
    {
      phrase:
        "Deus, para a felicidade do homem, inventou a fé e o amor. O Diabo, invejoso, fez o homem confundir fé com religião e amor com casamento.",
      author: "Machado de Assis",
    },
    {
      phrase:
        "Precisar de dominar os outros é precisar dos outros. O chefe é um dependente.",
      author: "Fernando Pessoa",
    },
    {
      phrase: "Eu sou do tamanho do que vejo e não do tamanho da minha altura.",
      author: "Fernando Pessoa",
    },
    {
      phrase: "Feliz aquele que transfere o que sabe e aprende o que ensina.",
      author: "Cora Coralina",
    },
    {
      phrase:
        "Todos estamos matriculados na escola da vida, onde o mestre é o tempo.",
      author: "Cora Coralina",
    },
    {
      phrase:
        "Quando as coisas ficam ruins, é sinal de que as coisas boas estão por perto.",
      author: "Cora Coralina",
    },
    {
      phrase: "Liberdade é pouco. O que desejo ainda não tem nome.",
      author: "Clarice Lispector",
    },
    {
      phrase:
        "Passei a vida tentando corrigir os erros que cometi na minha ânsia de acertar.",
      author: "Clarice Lispector",
    },
    {
      phrase: "Eu não sou tão triste assim, é que hoje eu estou cansada.",
      author: "Clarice Lispector",
    },
    {
      phrase: "Com perdão da palavra, sou um mistério para mim.",
      author: "Clarice Lispector",
    },
    {
      phrase: "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
      author: "Eleanor Roosevelt",
    },
    {
      phrase:
        "Se você tem conhecimento, deixe os outros acenderem as suas velas nele.",
      author: "Margaret Fuller",
    },
    {
      phrase: "O jeito mais eficiente de fazer algo é fazendo.",
      author: "Amelia Earhart",
    },
    {
      phrase: "Sozinhos, pouco podemos fazer; juntos, podemos fazer muito.",
      author: "Helen Keller",
    },
  ];

  phrase = this.phrases[0];

  constructor() {
    this.setPhrase();

    setTimeout(() => {
      this.setPhrase();
    }, 15000);
  }

  setPhrase() {
    this.phrase = this.phrases[this.randomNumber()];
  }

  randomNumber(): number {
    return Math.floor(Math.random() * this.phrases.length);
  }
}
