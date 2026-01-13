import { Project } from "./types";

export const myProjects: Project[] = [
    {
        id: 0,
        slug: "rastros",
        title: "Rastros 2028",
        subtitle: ["Edição Especial Anima Recife", "Desenvolvido como projeto final, referente às disciplinas de CJD (Cultura de Jogos de Digitais) e PI (Projeto Integrado). Posteriormente exposto no Anima Recife 2020."],
        short_description: "Num futuro não muito distante, uma empresa conseguiu reverter o cenário de tráfico, contrabando e homicídios. Cada vez mais, essa empresa conseguiu combater o crime dos países. Mas, com o passar do tempo, os Androids começaram a dominar até o mundo político... ",
        description: "Num futuro não muito distante, uma empresa chamada Misterbot conseguiu reverter o cenário de tráfico, contrabando e homicídios. Mas, com o passar do tempo, os Androids começaram a dominar até o mundo político. Mas o único lugar em que a Misterbot não conseguiu dominar foi o Brasil. No jogo você vai estar na pele da resistência, contra os robôs, ou os próprios robôs.",
        logo: "/projects/Rastros2028_logo.png",
        link: [{ type: "Medium", url: "https://medium.com/nave-recife/rastros-2028-meu-in%C3%ADcio-como-programador-di%C3%A1rio-de-um-dev-01-28ce85a3d31b" }, { type: "Youtube", url: "https://www.youtube.com/channel/UCK2yvPo0a5I7P0e_4lTuzUQ" }, { type: "Instagram", url: "https://www.instagram.com/rastros2028/%22" }],
        tech: ["C#", "Windows Forms", "Adobe Photoshop", "Github"],
        theme: ["bg-pink-500", "bg-violet-700", "bg-amber-500", "#fa398c"]
    }, {
        id: 1,
        slug: "quarentenado",
        title: "Quarentenado",
        subtitle: ["Um Simulador de Quarentena", "Desenvolvido no início da Pandemia, durante a CoronaJam, uma GameJam promovida pelo desenvolvedor e youtuber Amdré Young."],
        short_description: "Em Quarentenado, você assume o papel de André, um garoto que diante de uma situação de pandemia, é obrigado a cuidar dos afazeres da casa enquanto sua mãe está no trabalho, já que ela não foi liberada.",
        description: "Em Quarentenado, você assume o papel de André, um garoto que diante de uma situação de pandemia, é obrigado a cuidar dos afazeres da casa enquanto sua mãe está no trabalho, já que ela não foi liberada.\nO jogo foi desenvolvido no início da Pandemia do Corona Víruis, durante a CoronaJam, uma GameJam realizada pelo André Young. Não fomos os ganhadores, mas ficamos entre os 50 melhores.",
        logo: "/projects/Quarentenado_logo.png",
        link: [{ type: "Medium", url: "https://otaldol2.medium.com/quarentenado-inspirado-no-pokemon-red-ou-na-realidade-di%C3%A1rio-de-um-dev-02-ed0bfe8dd18e" }],
        tech: ["C#", "Unity", "Adobe Photoshop", "Discord", "Github"],
        theme: ["bg-green-400", "bg-green-500", "bg-green-600", "#57e089"]
    }, {
        id: 2,
        slug: "integrarte",
        title: "INTEGRARTE",
        subtitle: ["Digitalizando atividades manuais", "Um projeto desenvolvido para trazer praticidade e evolução para a ONG INTEGRARTE - (Centro Pró-Integração, Cidadania e Arte)"],
        short_description: "Programa desenvolvido para ter melhor controle de receita e gastos pela ONG INTEGRARTE. Foi um trabalho voluntário prestado, tendo como objetivo digitalizar atividades realizadas pela administração da mesma.",
        description: "Programa desenvolvido para ter melhor controle de receita e gastos pela ONG. Foi um trabalho voluntário prestado para uma ONG, que utilizava muito papel e, por conta de razões maiores, perdeu alguns de seus registros. Um dos desafios, foi desenvolver um programa simples e leve, que guarde os registros localmente e que seria utilizado por pessoas com noção limitada de computação. Além de não ter custos futuros e manutenção.",
        logo: "/projects/Integrarte_logo.jpg",
        link: [{ type: "Github", url: "https://github.com/OTalDoL2/integrarte" }],
        tech: ["Python", "Pandas", "TkInter", "Github"],
        theme: ["bg-neutral-300", "bg-neutral-300", "bg-neutral-300", "#c9c9c9"]
    }, {
        id: 3,
        slug: "registro_inteligente",
        title: "Registro Inteligente",
        subtitle: ["Uma lista de tarefas é útil, mas as vezes é necessário um pouco mais.", "Desenvolvido para ajudar meu pai, tornando seu trabalho mais prático."],
        short_description: "Aplicação Mobile de registro de entregas e geração de um relatório para prestação de contas.",
        description: 'A aplicação mobile "Registro Inteligente" foi desenvolvida exclusivamente para o uso do meu pai. Após uma observação minha e uma conversa, cheguei a conclusão que ele anotava a rota que trabalhou (as cidades), o valor da diária e a data do dia. A cada 15 dias ele sentava e preenchia uma tabela, escaneava e enviava para a empresa quem presta o serviço. Então, fiz a aplicação que permite ele fazer tais registros e armazenar na memória do próprio telefone, e no final do mês, clica no botão e gera a planilha (já na estrutura que ele costumava fazer).\nO projeto foi feito com React Native e Expo, e posteriormente refiz usando Typescript.',
        logo: "/projects/Expo_app_logo.png",
        link: [{ type: "Medium", url: "https://medium.com/@otaldol2/morre-um-antigo-projeto-renasce-um-mais-estruturado-di%C3%A1rio-de-um-dev-6-1db25f1bf6d4" }, { type: "Github", url: "https://github.com/OTalDoL2/registro-inteligente-tsx" }],
        tech: ["React Native", "Typescript", "Styled-Components", "Redux"],
        theme: ["bg-sky-500", "bg-sky-600", "bg-sky-700", "#0084d1"]
    }, {
        id: 4,
        slug: "propig",
        title: "Rastreamento de Maquinetas - Propig",
        subtitle: ["Para pedir e acompanhar suas maquinetas", "Um projeto desenvolvido para a empresa Propig, durante a disciplina de Residência Tecnológica."],
        short_description: "O projeto consiste em uma atualização da página de rastreamento de maquinetas para uma empresa provedora de soluções que conecta a tecnologia a favor dos clientes.",
        description: "O projeto consiste em uma atualização da página de rastreamento de maquinetas para uma empresa provedora de soluções que conecta a tecnologia a favor dos clientes. O projeto foi realizado durante a disciplina de Residência Tecnológica.",
        logo: "/projects/Propig_logo.png",
        link: [{ type: "Github", url: "https://github.com/gustavoMarquesz/propig" }],
        tech: ["ReactJS", "Javascript", "Trello", "Discord"],
        theme: ["bg-sky-800", "bg-sky-800", "bg-sky-800", "#035885"]
    }, {
        id: 5,
        slug: "recentro",
        title: "Registro de Imóveis",
        subtitle: ["De olho em imóveis disponíveis nos bairros do centro de Recife.", "Um projeto desenvolvido para empresa municipal Recentro, durante a displina de Residência Tecnológica."],
        short_description: "Plataforma dashboard criada para acompanhamento de Imóveis para locação nos bairros: Santo Amaro, Boa Vista e Centro do Recife.",
        description: "Plataforma dashboard criada para acompanhamento de Imóveis para locação nos bairros: Santo Amaro, Boa Vista e Centro do Recife. O projeto foi realizado durante a disciplina de Residência Tecnológica. A plataforma foi desenvolvida para solucionar dificuldades enferentadas pela empresa Recentro - Revitalização do centro do Recife. Foi necessário também a utilização de python, para limpeza de dados e Java, para construção de um backend bem estruturado.",
        logo: "/projects/Recentro_log.png",
        link: [{ type: "Github", url: "https://github.com/marcosilva2336/Squad-16-Recentro" }],
        tech: ["ReactJS", "Styled-Components", "Javascript", "Java", "Python", "Mapbox", "Docker", "Trello", "Discord"],
        theme: ["bg-orange-400", "bg-orange-500", "bg-orange-600", "#F97316"]
    }]