import { z } from "zod";

export const emailSchema = z.string().email(messages.email);

export const cpfShema = z
  .string()
  .regex(regex.cpf, { message: messages.cpf })
  .refine((value) => isValidateCPF(value), { message: messages.cpf });

export const rgSchema = z
  .string()
  .refine((value) => isValidRG(value), { message: messages.rg });
