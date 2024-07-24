import { userRegisterSchema } from "@/lib/validations/auth";
import { z } from "zod";

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>
