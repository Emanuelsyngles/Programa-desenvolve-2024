import { describe, expect } from '@jest/globals';
import nodemailer from 'nodemailer';
import 'dotenv/config';

nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
    },
});

const verificarConexao = () => new promise((resolver, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) => {
    if (error) {
        reject(error);
    } else {
        resolver(success);
    }
});
});

describe('Testando disparo de email', () => {
    if('O sistema deve validar se a conexão com o sistema de disparo de email', async () => {
        const estaConectado = true;

        const validarConexao = await verificarConexao();

        expect(validarConexao).toStrictEqual(estaConectado);
    })
})

