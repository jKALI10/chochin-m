interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-muted/30 py-12">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
  )
}

