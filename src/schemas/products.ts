import { removeTrailingSlash } from "@/lib/utils";
import { z } from "zod";

export const productDetailsSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  url: z
    .string()
    .url()
    .min(1, { message: "url is required" })
    .transform(removeTrailingSlash),
  description: z.string().optional(),
});
