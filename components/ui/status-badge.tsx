import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "actif" | "inactif"
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isActive = status === "actif"

  return (
    <Badge
      variant="secondary"
      className={cn(
        "absolute top-3 right-3 z-10 text-xs font-semibold border",
        isActive
          ? "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700"
          : "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-700",
        className
      )}
    >
      {isActive ? "🟢 Actif" : "🔴 Inactif"}
    </Badge>
  )
}