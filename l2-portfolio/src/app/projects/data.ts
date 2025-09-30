import { Project } from "./types";

export const myProjects: Project[] = [
    {
        id: 0,
        slug: "rastros",
        title: "Rastros 2028",
        subtitle: "Rastros 2028",
        short_description: "Num futuro não muito distante, uma empresa conseguiu reverter o cenário de tráfico, contrabando e homicídios. Cada vez mais, essa empresa conseguiu combater o crime dos países. Mas, com o passar do tempo, os Androids começaram a dominar até o mundo político... ",
        description: "Num futuro não muito distante, uma empresa chamada Misterbot conseguiu reverter o cenário de tráfico, contrabando e homicídios. Mas, com o passar do tempo, os Androids começaram a dominar até o mundo político. Mas o único lugar em que a Misterbot não conseguiu dominar foi o Brasil. No jogo você vai estar na pele da resistência, contra os robôs, ou os próprios robôs.",
        logo: "/projects/Rastros2028_logo.png",
        link: [{ type: "Medium", url: "https://medium.com/nave-recife/rastros-2028-meu-in%C3%ADcio-como-programador-di%C3%A1rio-de-um-dev-01-28ce85a3d31b"}],
        tech: [""]
    }, {
        id: 1,
        slug: "quarentenado",
        title: "Quarentenado",
        subtitle: "Quarentenado",
        short_description: "Em Quarentenado, você assume o papel de André, um garoto que diante de uma situação de pandemia, é obrigado a cuidar dos afazeres da casa enquanto sua mãe está no trabalho, já que ela não foi liberada. ",
        description: "Em Quarentenado, você assume o papel de André, um garoto que diante de uma situação de pandemia, é obrigado a cuidar dos afazeres da casa enquanto sua mãe está no trabalho, já que ela não foi liberada.\nO jogo foi desenvolvido no início da Pandemia do Corona Víruis, durante a CoronaJam, uma GameJam realizada pelo André Young. Não fomos os ganhadores, mas ficamos entre os 50 melhores.",
        logo: "/projects/Quarentenado_logo.png",
        link: [{ type: "Medium", url: "https://otaldol2.medium.com/quarentenado-inspirado-no-pokemon-red-ou-na-realidade-di%C3%A1rio-de-um-dev-02-ed0bfe8dd18e"}],
        tech: [""]
    }, {
        id: 2,
        slug: "integrarte",
        title: "INTEGRARTE",
        subtitle: "INTEGRARTE",
        short_description: "Programa desenvolvido para ter melhor controle de receita e gastos pela ONG INTEGRARTE. Foi um trabalho voluntário prestado, tendo como objetivo digitalizar atividades realizadas pela administração da mesma.",
        description: "Programa desenvolvido para ter melhor controle de receita e gastos pela ONG. Foi um trabalho voluntário prestado para uma ONG, que utilizava muito papel e, por conta de razões maiores, perdeu alguns de seus registros. Um dos desafios, foi desenvolver um programa simples e leve, que guarde os registros localmente e que seria utilizado por pessoas com noção limitada de computação. Além de não ter custos futuros e manutenção.",
        logo: "/projects/Integrarte_logo.jpg",
        link: [{ type: "Github", url: "https://github.com/OTalDoL2/integrarte"}],
        tech: ["Python", "Pandas", "TkInter"]
    }, {
        id: 3,
        slug: "resgistro_inteligente",
        title: "Registro Inteligente",
        subtitle: "Uma lista de tarefas é útil, mas as vezes é necessário um pouco mais.",
        short_description: "Aplicação Mobile de registro de entregas e geração de um relatório para prestação de contas.",
        description: 'A aplicação mobile "Registro Inteligente" foi desenvolvida exclusivamente para o uso do meu pai. Após uma observação minha e uma conversa, cheguei a conclusão que ele anotava a rota que trabalhou (as cidades), o valor da diária e a data do dia. A cada 15 dias ele sentava e preenchia uma tabela, escaneava e enviava para a empresa quem presta o serviço. Então, fiz a aplicação que permite ele fazer tais registros e armazenar na memória do próprio telefone, e no final do mês, clica no botão e gera a planilha (já na estrutura que ele costumava fazer).\nO projeto foi feito com React Native e Expo, e posteriormente refiz usando Typescript.',
        logo: "/projects/Expo_app_logo.png",
        link: [{ type: "Medium", url: "https://medium.com/@otaldol2/morre-um-antigo-projeto-renasce-um-mais-estruturado-di%C3%A1rio-de-um-dev-6-1db25f1bf6d4"}, { type: "Github", url: "https://github.com/OTalDoL2/registro-inteligente-tsx"}],
        tech: ["React Native", "Typescript", "Style Component", "Redux"]
    }, {
        id: 4,
        slug: "propig",
        title: "Rastreamento de Maquinetas - Propig",
        subtitle: "Rastreamento de Maquinetas - Propig",
        short_description: "O projeto consiste em uma atualização da página de rastreamento de maquinetas para uma empresa provedora de soluções que conecta a tecnologia a favor dos clientes.",
        description: "O projeto consiste em uma atualização da página de rastreamento de maquinetas para uma empresa provedora de soluções que conecta a tecnologia a favor dos clientes. O projeto foi realizado durante a disciplina de Residência Tecnológica.",
        logo: "/projects/Propig_logo.png",
        link: [{ type: "Github", url: "https://github.com/gustavoMarquesz/propig"}],
        tech: ["React", "Javascript", "Trelo", "Discord"]
    }, {
        id: 5,
        slug: "recentro",
        title: "Registro de Imóveis - Recentro",
        subtitle: "Registro de Imóveis - Recentro",
        short_description: "Plataforma dashboard criada para acompanhamento de Imóveis para locação nos bairros: Santo Amaro, Boa Vista e Centro do Recife.",
        description: "Plataforma dashboard criada para acompanhamento de Imóveis para locação nos bairros: Santo Amaro, Boa Vista e Centro do Recife. O projeto foi realizado durante a disciplina de Residência Tecnológica. A plataforma foi desenvolvida para solucionar dificuldades enferentadas pela empresa Recentro - Revitalização do centro do Recife. Foi necessário também a utilização de python, para limpeza de dados e Java, para construção de um backend bem estruturado.",
        logo: "/projects/Recentro_log.png",
        link: [{ type: "Github", url: "https://github.com/marcosilva2336/Squad-16-Recentro"}],
        tech: ["React", "Javascript", "Java", "Python", "Mapbox", "Docker", "Trelo", "Discord"]
    }]