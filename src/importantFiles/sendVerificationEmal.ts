/* eslint-disable @typescript-eslint/no-unused-vars */
import { resend } from "../lib/resendMail"; // Corrected import path
import VerificationEmail from "../../../email/verificationEmail"; // Corrected import path
import { ApiResponse } from "../type/ApiResponse"; // Corrected import path

export async function sendVerificationEmail(
    email: string,
    username: string,
    verificationToken: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: "your-email@example.com", // Replace with your email
            to: email,
            subject: "Verify your email",
            react: VerificationEmail({username, otp:verificationToken})
           
        })
        return {
            success:true,
            message: "Verification email sent successfully",
        }
    } catch (emailError) {
        console.log("error sending verification email", emailError)
        return {
            success:false,
            message: "Failed sending verification email",
        }
    }
}
