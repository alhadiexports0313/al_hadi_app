import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactFormData, ApiResponse } from "@/types";

interface ExtendedContactFormData extends ContactFormData {
  company: string;
  phone: string;
  subject: string;
  productInterest?: string;
  orderQuantity?: string;
  timeline?: string;
  budget?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // API route called
    const body: ExtendedContactFormData = await request.json();
    // Request body received

    const {
      name,
      email,
      company,
      phone,
      subject,
      message,
      productInterest,
      orderQuantity,
      timeline,
      budget,
    } = body;

    // Validate required fields
    if (!name || !email || !company || !phone || !subject || !message) {
      // Validation failed - missing required fields
      return NextResponse.json(
        { 
          success: false, 
          message: "Missing required fields",
          error: "Missing required fields" 
        },
        { status: 400 },
      );
    }

    // Validation passed

    // Form data received and validated

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      // Missing email credentials in environment variables
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please contact administrator.",
          error: "Email service not configured. Please contact administrator.",
        },
        { status: 500 },
      );
    }

    // Create transporter using Gmail SMTP with enhanced configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports (587 uses STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      // SMTP connection verified successfully
    } catch {
      // SMTP verification failed
      return NextResponse.json(
        { 
          success: false,
          message: "Email service connection failed. Please try again later.",
          error: "Email service connection failed. Please try again later." 
        },
        { status: 500 },
      );
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Quote Request - AL HADI EXPORTS</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Custom Quote Inquiry from Website</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Full Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px 0; color: #333;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${phone}</td>
            </tr>
          </table>

          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Subject:</td>
              <td style="padding: 8px 0; color: #333;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Product Interest:</td>
              <td style="padding: 8px 0; color: #333;">${productInterest}</td>
            </tr>
            ${
              orderQuantity
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Order Quantity:</td>
              <td style="padding: 8px 0; color: #333;">${orderQuantity}</td>
            </tr>
            `
                : ""
            }
            ${
              timeline
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Timeline:</td>
              <td style="padding: 8px 0; color: #333;">${timeline}</td>
            </tr>
            `
                : ""
            }
            ${
              budget
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Budget Range:</td>
              <td style="padding: 8px 0; color: #333;">${budget}</td>
            </tr>
            `
                : ""
            }
          </table>

          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Detailed Requirements</h2>
          <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
            <p style="margin: 0; line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="background: #333; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">This inquiry was submitted through the AL HADI EXPORTS website contact form.</p>
          <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">Please respond within 24 hours for the best customer experience.</p>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"AL HADI EXPORTS - Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "smshan425@gmail.com",
      subject: `New Quote Request: ${subject} - ${company}`,
      html: emailContent,
      replyTo: email,
    };

    // Send email with comprehensive error handling
    try {
      const emailResult = await transporter.sendMail(mailOptions);
      // Email sent successfully

      return NextResponse.json(
        {
          success: true,
          message:
            "Quote request submitted successfully! We will contact you within 24 hours.",
          data: {
            emailSent: true,
            messageId: emailResult.messageId,
          }
        },
        { status: 200 },
      );
    } catch {
      // Failed to send email

      // Return success to user but log the email failure
      return NextResponse.json(
        {
          success: true,
          message: "Quote request received! We will contact you soon.",
          data: {
            emailSent: false,
          },
          error: "Email delivery may be delayed",
        },
        { status: 200 },
      );
    }
  } catch {
    // Error processing request
    return NextResponse.json(
      { 
        success: false,
        message: "Failed to process quote request. Please try again later.",
        error: "Failed to process quote request. Please try again later." 
      },
      { status: 500 },
    );
  }
}
