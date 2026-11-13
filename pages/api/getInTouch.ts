import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const contact: {
      name: string;
      email: string;
      message: string;
    } = req.body.contact;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_HOST,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const message = {
      from: `"Perry Smith-Moss Portfolio" <${process.env.EMAIL_FROM}>`, // sender address
      to: process.env.EMAIL_TO as string, // list of receivers
      subject: "New portfolio message", // Subject line
      html: `<div>
        <h1>New portfolio message</h1>
        <h3>From: ${contact.name}</h3>
        <h3>Email: ${contact.email}</h3>
        <h3>Message: ${contact.message}</h3>
        </div>`,
    };

    const emailRes = await transporter
      .sendMail(message)
      .then((info) => {
        return {
          status: 200,
          msg: "Thanks for getting in touch. Your message has been sent.",
          info: info.messageId,
          preview: nodemailer.getTestMessageUrl(info),
        };
      })
      .catch(() => {
        return {
          status: 400,
          msg: "Your message couldn’t be sent. Please email me at perrysmithmoss@gmail.com.",
          info: null,
          preview: null,
        };
      });

    res.status(emailRes.status).json(emailRes);
  } catch (e) {
    res
      .status(400)
      .json({
        status: 400,
        msg: "Your message couldn’t be sent. Please email me at perrysmithmoss@gmail.com.",
        info: null,
        preview: null,
      });
  }
};
