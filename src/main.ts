import nodemailer from "nodemailer";

import c from "./console";

c.clear();

async function main() {
  c.warning("Iniciando serviço de transporte de emails");

  // Sem sucesso no envio de emails. O Gmail bloqueia o envio de emails, mesmo no Google Workspace.
  const transporter = nodemailer.createTransport();

  await transporter.verify();

  const info = await transporter.sendMail({
    from: "todo@optimusjr.com.br",
    to: "todo@optimusjr.com.br",
    text: "Hello world",
    html: "<b>Hello world</b>",
  });

  c.success("SUCESSO!!!");
  c.log("Mensagem enviada");
  c.log("Id da mensagem:", info.messageId);
}

main().catch((error) => {
  c.error("Um erro ocorreu durante a execução do programa.");
  c.log("Confira se as configurações estão corretas e tente novamente.");
  c.log("Mais informações sobre o erro abaixo:\n");

  c.log(error);
});
