// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { Resend } from "resend";
// // import { google } from "googleapis";

// dotenv.config();
// const app = express();

// const corsOptions = {
//   origin: [
//     "https://valenciafinancialgroup.com",
//     "https://www.valenciafinancialgroup.com",
//     "https://valenciafinancialgroup.vercel.app"
//   ],
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type"],
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// const resend = new Resend(process.env.RESEND_API_KEY);

// app.post("/api/contact", async (req, res) => {
//     try {
//         const { firstName, lastName, email, message } = req.body;

//         const data = await resend.emails.send({
//             from: "ValenciaFinancialGroup <onboarding@resend.dev>",
//             to: "madeforurl@gmail.com", 
//             subject: `New Contact Form Message from ${firstName} ${lastName}`,
//             html: `
//                 <h2>New Contact Form Submission</h2>
//                 <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Message:</strong><br/>${message}</p>
//             `
//         });

//         return res.json({ success: true, data });

//     } catch (error) {
//         console.error("RESEND ERROR:", error);

//         return res.status(500).json({
//             success: false,
//             error: error.message
//         });
//     }
// });

// const PORT = process.env.PORT || 8000 ;

// app.listen(PORT, () => {
//     console.log("Server running on port", PORT);
// });
