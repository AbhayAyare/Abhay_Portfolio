
export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            My Professional Path
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional roles, responsibilities, and accomplishments over the years.
          </p>
        </div>
        {/* Placeholder Content */}
        <div className="text-center text-muted-foreground">
          <p>Professional experience details coming soon...</p>
          <p>This section will detail my job history, positions held, and key achievements.</p>
        </div>
      </div>
    </section>
  );
}
