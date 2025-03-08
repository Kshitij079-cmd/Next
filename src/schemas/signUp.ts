import { z } from "zod";
export const usernameValidation = z.string().min(2, "username must be alteast two characters")
                                                        .max(20, "must not more that 20 character").regex(/^[A-Za-z][A-Za-z0-9_]{7,29}$/,"username must not contain special charactoer")


export const  signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"invalid email"}),
    password: z.string().min(8, "password must be alteast 8 character").
    regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?& ^_]{8,}$/,"password must contain at least one uppercase letter, one lowercase letter one digit and one special character"),
    confirmPassword: z.string().min(8, "password must be alteast 8 character").
    regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&^_]{8,}$/,"password must contain at least one uppercase letter, one lowercase letter one digit and one special character"),
    
})

