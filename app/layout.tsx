import "./globals.css"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-background text-foreground">
        
        {/* New Futuristic Animated Background */}
        <AnimatedBackground />

        {children}

      </body>
    </html>
  )
}
