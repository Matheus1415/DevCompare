import { z } from "zod";

export const createCategoriesSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  color_hex: z.string().min(1, "Cor é obrigatória").regex(/^#([0-9A-Fa-f]{3,6})$/, "Cor inválida"), 
  description: z.string().optional(),
  subCategories: z.array(
    z.object({
      name: z.string().min(1, "Nome da subcategoria é obrigatório"),
      color_hex: z.string().min(1, "Cor da subcategoria é obrigatória").regex(/^#([0-9A-Fa-f]{3,6})$/, "Cor inválida"),
      description: z.string().optional(),
    })
  ).optional(),
});


export interface CreateCategoryFormData {
  name: string;
  color: string;
  description?: string;
  subCategories: {
    name: string;
    color: string;
    description?: string;
  }[];
}