
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card py-8 text-center text-sm text-muted-foreground border-t">
      <div className="container mx-auto px-4 md:px-6">
        <p>&copy; {currentYear} Jigar Sable. All rights reserved.</p>
        <p className="mt-1">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
