"use client";

import NewWishForm from "@/components/home/new-wish-button/new-wish-form";
import {
  NewWishFormSchema,
  newWishFormSchema,
} from "@/components/home/new-wish-button/new-wish-form/schema";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useBreakpoint } from "@/hooks/media-query";
import { createWish } from "@/services/wishes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@radix-ui/react-dialog";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function NewWishButton({ ...props }: ButtonProps) {
  const [open, setOpen] = useState(false);
  const isSm = useBreakpoint("sm");

  const form = useForm<NewWishFormSchema>({
    resolver: zodResolver(newWishFormSchema),
    defaultValues: {
      uri: "",
      title: "",
      description: "",
    },
  });
  const [step, setStep] = useState<1 | 2>(1);

  useEffect(() => {
    setStep(1);
  }, [open]);

  const submit: SubmitHandler<NewWishFormSchema> = (values) => {
    setOpen(false);

    createWish({
      uri: values.uri,
      title: values.title,
      description: values.description,
      creatorId: "",
    });
  };

  const title = "New Wish";
  const trigger = <Button {...props}>New Wish</Button>;
  const content = (
    <NewWishForm
      form={form}
      step={step}
      onStepChange={setStep}
      onSubmit={submit}
    />
  );

  if (isSm)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer shouldScaleBackground open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        {content}
      </DrawerContent>
    </Drawer>
  );
}
