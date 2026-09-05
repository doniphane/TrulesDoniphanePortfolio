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
        "absolute top-3 right-3 z-10 text-xs font-semibold border backdrop-blur-md",
        isActive
          ? "bg-blue-500/90 text-white border-white/10 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
          : "bg-red-500/90 text-white border-white/10 shadow-[0_0_12px_rgba(239,68,68,0.5)]",
        className
      )}
    >
      {isActive ? "Actif" : "Inactif"}
    </Badge>
  )
}