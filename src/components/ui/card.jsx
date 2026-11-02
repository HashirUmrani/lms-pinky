import * as React from "react";
import { cn } from "../../lib/utils";

function Card({ className, ...props }) {
  return <div className={cn("rounded-xl border border-border bg-card text-card-foreground card-shadow", className)} {...props} />;
}
function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-1.5 p-5", className)} {...props} />;
}
function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-sm font-semibold tracking-tight text-foreground", className)} {...props} />;
}
function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm leading-relaxed text-muted-foreground", className)} {...props} />;
}
function CardContent({ className, ...props }) {
  return <div className={cn("px-5 pb-5", className)} {...props} />;
}
function CardFooter({ className, ...props }) {
  return <div className={cn("flex items-center px-5 pb-5", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
