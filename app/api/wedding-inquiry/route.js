import nodemailer from "nodemailer";

export async function POST(request) {
  // const body = await request.json();
  const { brideName, groomName, email, phone, date, guests, nights } = await request.json();

  console.log("Received wedding inquiry:", { brideName, groomName, email, phone, date, guests, nights });

  if (!brideName || !groomName || !email || !phone || !date || !guests || !nights) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Wedding Booking from Tryuginarayan Mandap website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Wedding Booking from Tryuginarayan Mandap website",
    html: `
      <h3>New Wedding Booking Details</h3>
      <p><strong>Bride&apos;s Name:</strong> ${brideName}</p>
      <p><strong>Groom&apos;s Name:</strong> ${groomName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Preferred Wedding Date:</strong> ${date}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>No. of Stay Nights Required:</strong> ${nights}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Inquiry sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response(JSON.stringify({ message: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
