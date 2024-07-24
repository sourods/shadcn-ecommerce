import * as z from "zod"
import { isValidDate } from "../utils"

export const userAuthSchema = z.object({
  email: z.string().email(),
})

const userBirthDaySchema = z.object({
  day: z.string().length(2),
  month: z.string().length(2),
  year: z.string().length(4),
}).refine(({ month, day, year }) => isValidDate(`${month}/${day}/${year}`))

export const userRegisterSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
  dob: userBirthDaySchema
})

