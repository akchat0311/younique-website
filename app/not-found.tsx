import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="max-w-xl text-center">
        <p className="font-heading text-6xl font-bold text-brand-200">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-stone-900">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-3 text-base text-stone-600">
          The page you&apos;re looking for may have moved. Try one of these
          instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/book-consultation" variant="secondary">
            Let&apos;s Talk
          </Button>
        </div>
      </Container>
    </section>
  );
}
