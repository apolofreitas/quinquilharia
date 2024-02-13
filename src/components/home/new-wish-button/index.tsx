"use client";

import NewWishForm from "@/components/home/new-wish-button/new-wish-form";
import {
  NewWishFormSchema,
  newWishFormSchema,
} from "@/components/home/new-wish-button/new-wish-form/schema";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/components/ui/responsive-modal";
import { createWish } from "@/services/wishes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function NewWishButton({ ...props }: ButtonProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const form = useForm<NewWishFormSchema>({
    resolver: zodResolver(newWishFormSchema),
    defaultValues: {
      uri: "",
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (open === false) {
      setStep(1);
      form.reset();
    }
  }, [open]);

  useEffect(() => {
    autoFocus();
  }, [step]);

  const autoFocus = (e?: Event) => {
    e?.preventDefault();

    if (step === 1) {
      form.setFocus("uri");
    } else if (step === 2) {
      form.setFocus("title");
    }
  };

  const submit: SubmitHandler<NewWishFormSchema> = async (values) => {
    setOpen(false);

    await createWish({
      uri: values.uri,
      title: values.title,
      description: values.description,
      creatorId: "",
    });
  };

  return (
    <ResponsiveModal open={open} onOpenChange={setOpen}>
      <ResponsiveModalTrigger asChild>
        <Button {...props}>New Wish</Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent onOpenAutoFocus={autoFocus}>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>New Wish</ResponsiveModalTitle>
        </ResponsiveModalHeader>
        <NewWishForm
          form={form}
          step={step}
          onStepChange={setStep}
          onSubmit={submit}
        />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
}
