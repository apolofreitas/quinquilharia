import { NewWishFormSchema } from "@/components/home/new-wish-button/new-wish-form/schema";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

export type Step = 1 | 2;

export interface NewWishFormProps {
  step: Step;
  form: UseFormReturn<NewWishFormSchema, unknown, NewWishFormSchema>;
  onSubmit?: SubmitHandler<NewWishFormSchema>;
  onStepChange?: (step: Step) => void;
}
