"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Breakpoint, useBreakpoint } from "@/hooks/media-query";
import { DialogOverlay } from "@radix-ui/react-dialog";
import React, { forwardRef } from "react";

function responsiveComponentBetween<
  PropsA extends object,
  PropsB extends object
>(
  ComponentA: React.FunctionComponent<PropsA>,
  ComponentB: React.FunctionComponent<PropsB>,
  breakpoint: Breakpoint
) {
  const Component = (
    { ...props }: PropsA & PropsB,
    ref: React.ElementRef<any>
  ) => {
    const isBreakpointValid = useBreakpoint(breakpoint);

    if (isBreakpointValid) return <ComponentA ref={ref} {...props} />;

    return <ComponentB ref={ref} {...props} />;
  };

  return forwardRef(Component);
}

const ResponsiveModal = responsiveComponentBetween(Dialog, Drawer, "sm");
ResponsiveModal.displayName = "ResponsiveModal";

const ResponsiveModalTrigger = responsiveComponentBetween(
  DialogTrigger,
  DrawerTrigger,
  "sm"
);
ResponsiveModalTrigger.displayName = "ResponsiveModalTrigger";

const ResponsiveModalPortal = responsiveComponentBetween(
  DialogPortal,
  DrawerPortal,
  "sm"
);
ResponsiveModalPortal.displayName = "ResponsiveModalPortal";

const ResponsiveModalClose = responsiveComponentBetween(
  DialogClose,
  DrawerClose,
  "sm"
);
ResponsiveModalClose.displayName = "ResponsiveModalClose";

const ResponsiveModalOverlay = responsiveComponentBetween(
  DialogOverlay,
  DrawerOverlay,
  "sm"
);
ResponsiveModalOverlay.displayName = "ResponsiveModalOverlay";

const ResponsiveModalContent = responsiveComponentBetween(
  DialogContent,
  DrawerContent,
  "sm"
);
ResponsiveModalContent.displayName = "ResponsiveModalContent";

const ResponsiveModalHeader = responsiveComponentBetween(
  DialogHeader,
  DrawerHeader,
  "sm"
);
ResponsiveModalHeader.displayName = "ResponsiveModalHeader";

const ResponsiveModalFooter = responsiveComponentBetween(
  DialogFooter,
  DrawerFooter,
  "sm"
);
ResponsiveModalFooter.displayName = "ResponsiveModalFooter";

const ResponsiveModalTitle = responsiveComponentBetween(
  DialogTitle,
  DrawerTitle,
  "sm"
);
ResponsiveModalTitle.displayName = "ResponsiveModalTitle";

const ResponsiveModalDescription = responsiveComponentBetween(
  DialogDescription,
  DrawerDescription,
  "sm"
);
ResponsiveModalDescription.displayName = "ResponsiveModalDescription";

export {
  ResponsiveModal,
  ResponsiveModalPortal,
  ResponsiveModalOverlay,
  ResponsiveModalTrigger,
  ResponsiveModalClose,
  ResponsiveModalContent,
  ResponsiveModalHeader,
  ResponsiveModalFooter,
  ResponsiveModalTitle,
  ResponsiveModalDescription,
};
