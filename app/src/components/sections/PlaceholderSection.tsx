import { Container } from '@ui/Container';

export function PlaceholderSection({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Container className="py-10">
        <div className="text-center text-white/70">{title} placeholder</div>
      </Container>
    </section>
  );
}
