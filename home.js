const form = document.getElementById("formulario");
const popup = document.getElementById("popup");
const message = document.getElementById("message");
const footer = document.getElementById("footer");
const title = document.getElementById("title");

const mensagem_personalisada = () => {
  let random = Math.floor(Math.random() * 100);
  let nome = formatar_nome(document.getElementById("input_Nome").value.trim());

  if (random < 7) {
    exibir_popup(
      "Parabéns " +
        nome +
        ", a graça da sorte está ao seu lado, mostre ao Toshio esta mensagem e ganhe outro chocolate <br><br> obs: Válido somente enquanto durarem os estoques!"
    );
  } else {
    switch (remover_acentos(nome)) {
      case "Andre":
        exibir_popup(
          "Bem por vc me deixar ir na STOCK que eu estou fazendo isso.<br><br> Ganhe +1 chocolate<br><br> Hj foi essa página quem sabe na próxima não é o app de controle de caixa haha"
        );
        break;
      case "Ronaldo":
        title.innerHTML =" Feliz Aniversário! ";
        exibir_popup(
          "Bem domingo é/foi o seu aniversário<br><br> Feliz Aniversário lhe dessejo tudo de bom<br><br> Pelo seu aniversário ganhe +1 chocolate"
        );
        break;
      case "Pancada":
        exibir_popup(
          "Achou saboroso o meu ovo?<br> Eu te dou +1 para vc poder saborear os dois hahaha"
        );
        break;
      case "Toshio":
        exibir_popup("Não subestimem o meu Deus Criador!!");
        break;
      case "Jefferson":
        title.innerHTML = "Feliz Natal";
        exibir_popup(
          "Feliz Natal, você é um amigo incrivél ganhe ganhe +1 chocolate!"
        );
        break;
      case "Djerffs":
        title.innerHTML = "Feliz Natal";
        exibir_popup(
          "Feliz Natal, você é um amigo incrivél ganhe ganhe +1 chocolate!"
        );
        break;
      case "Maria Eduarda De Souza Bento":
        exibir_popup(
          "Parabéns vc achou um Easter Egg!<br>+1 chocolate<br><br> Continue procurando quem sabe não tem mais ;)"
        );
        break;
      case "Tomiokamado":
        exibir_popup(
          "Vc está de zoeira cmg. <br><br>  Desde quando seu nome é " +
            nome +
            "??"
        );
        break;
      case "Tomio Kamado":
        exibir_popup(
          "Vc está de zoeira cmg. <br><br>  Desde quando seu nome é " +
            nome +
            "??"
        );
        break;
      case "Tomio":
        exibir_popup(
          "Vc está de zoeira cmg. <br><br>  Desde quando seu nome é " +
            nome +
            "??"
        );
        break;
      case "Netchan":
        title.innerHTML = "Achou !!";
        exibir_popup("");
        break;
      case "Marie":
        title.innerHTML = "Muito Obrigado!";
        exibir_popup(
          " Muito Obrigado pela ajuda com os chocolates. <br><br>Vc quase me ajudou com meu site<br><br> Mas msm assim vc é a melhor irmã de todas ;)"
        );
        break;
      case "Seiji":
        title.innerHTML = "!!  Error :(  !!";
        exibir_popup("Vá ti toma na seu cú");
        break;
      case "Shiro No Oo":
        title.innerHTML = "Muito Obrigado!";
        exibir_popup(
          " Muito Obrigado pela ajuda com os chocolates.<br><br> Vc é meu duo não preciso falar muito, vlw por tudo :)"
        );
        break;
      case "My Love":
        exibir_popup("Se vc for meu amor verdadeiro, ganhe +1 chocolate");
        break;
      case "Easter Egg":
        exibir_popup(
          "Que Easter Egg mais obvio hahaha. <br><br> msm assim +1 chocolate"
        );
        break;
      default:
        exibir_popup(mensagem_padrao(nome, random));
        break;
    }
  }
  document.getElementById("input_Nome").value = "";
};
const exibir_popup = (mensagem) => {
  message.innerHTML = mensagem;
  form.style.display = "none";
  footer.style.display = "none";
  popup.style.display = "flex";
};
const ocultar_popup = () => {
  popup.style.display = "none";
  form.style.display = "block";
  footer.style.display = "block";
};
const mensagem_padrao = (nome, random) => {
  if (random > 68) {
    return nome + ", espero que goste do meu chocolate :)";
  } else if (random > 37) {
    return (
      nome + ", espero que sua páscoa seja repleta de felicidade e esperança!"
    );
  } else if (random > 6) {
    return (
      nome +
      ", que este dia especial seja repleto de paz, amor e muitos chocolates!"
    );
  } else {
    return (
      "Parabéns " +
      nome +
      ", a graça da sorte está ao seu lado, mostre ao Toshio esta mensagem e ganhe outro chocolate <br><br> obs: Válido somente enquanto durarem os estoques!"
    );
  }
};
const remover_acentos = (string) => {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
    .replace(/\s{2,}/g, " ");
};
const formatar_nome = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
const verificar = (event) => {
  event.preventDefault();
  const nome = document.getElementById("input_Nome").value.trim();
  let erro = document.getElementById("erro");
  if (!nome) {
    erro.style.display = "block";
  } else {
    erro.style.display = "none";
    mensagem_personalisada();
  }
};
