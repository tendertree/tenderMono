import Link from "next/link"
import { Home, Info, BookOpen, GraduationCap, Mail } from "lucide-react"
import { Button } from "../shadcn/button"

export default function NavMobileBottom() {
  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/tutorial", icon: GraduationCap, label: "Tutorial" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-2 md:hidden">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            asChild
            className="flex flex-col items-center justify-center h-16 flex-1"
          >
            <Link href={item.href}>
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}
