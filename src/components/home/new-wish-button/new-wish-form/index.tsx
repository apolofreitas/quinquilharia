"use client";

import { NewWishFormProps } from "@/components/home/new-wish-button/new-wish-form/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function NewWishForm({
  step,
  form,
  onStepChange,
  onSubmit,
}: NewWishFormProps) {
  const goToSecondStep = async () => {
    const valid = await form.trigger("uri");

    if (!valid) return;

    onStepChange?.(2);
  };

  const goToFirstStepAndResetForm = () => {
    onStepChange?.(1);
    form.reset();
  };

  return (
    <Form {...form}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="uri"
            render={({ field }) => (
              <FormItem hidden={step !== 1}>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder="Enter URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem hidden={step !== 2}>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem hidden={step !== 2}>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {step === 1 ? (
          <Button onClick={goToSecondStep}>Continue</Button>
        ) : step === 2 ? (
          <div className="flex gap-2">
            <Button
              className="flex-grow"
              variant="outline"
              onClick={goToFirstStepAndResetForm}
            >
              Back
            </Button>
            <Button
              className="flex-grow"
              onClick={onSubmit ? form.handleSubmit(onSubmit) : undefined}
            >
              Done
            </Button>
          </div>
        ) : null}
      </div>
    </Form>
  );
}
