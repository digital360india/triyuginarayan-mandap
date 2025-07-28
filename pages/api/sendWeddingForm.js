// pages/api/sendWeddingForm.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    brideName,
    groomName,
    phone,
    email,
    weddingDate,
    guests,
    stayNights,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Triyuginarayan-mandap ${process.env.EMAIL_USER}`,
    to: "shaadivyahwork@gmail.com",
    subject: "New Wedding Form Submission",
    html: `
      <h2>Wedding Form Details from 
Triyuginarayan-mandap </h2>
      <p><strong>Bride's Name:</strong> ${brideName}</p>
      <p><strong>Groom's Name:</strong> ${groomName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Wedding Date:</strong> ${weddingDate}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Stay Nights:</strong> ${stayNights}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
