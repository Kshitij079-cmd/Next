import { z } from "zod";

export const checkMessageSchema = z.object({
    content: z
    .string()
    .min(10, { message: "Content must be aleast of 10 characters" })
    .max(1000, { message: "Content must be at most 300 characters"})
})