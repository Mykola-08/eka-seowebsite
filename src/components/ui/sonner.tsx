"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"

import {
  CheckmarkCircle01Icon,
  InformationCircleIcon,
  Loading01Icon,
  CancelCircleIcon,
  AlertTriangle,
} from "@/lib/icons"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: <CheckmarkCircle01Icon className="size-4" />,
        info: <InformationCircleIcon className="size-4" />,
        warning: <AlertTriangle className="size-4" />,
        error: <CancelCircleIcon className="size-4" />,
        loading: <Loading01Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
