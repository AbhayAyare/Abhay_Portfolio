
export default function WorkSection() {
  return (
    <section id="work" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            My Contributions
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Work & Projects
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of projects I&apos;ve developed and contributed to.
          </p>
        </div>
        {/* Placeholder Content - This could be similar to the old ProjectsSection */}
        <div className="text-center text-muted-foreground">
          <p>Work and project details coming soon...</p>
          <p>I will showcase key projects, roles, and technologies used here.</p>
        </div>
      </div>
    </section>
  );
}
