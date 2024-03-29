interface IMailConfig {
    driver: 'ethereal' | 'ses';

    defaults: {
        from: {
            email: string;
            name: string;
        }
    };
}

export default {
    driver: process.env.MAIL_DRIVER || 'ethereal',

    defaults: {
        from: {
            email: 'teste@dominioobrigatorio.com.br',
            name: 'Teste do Dominio',
        }
    }
} as IMailConfig;