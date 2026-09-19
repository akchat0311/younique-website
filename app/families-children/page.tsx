import type { Metadata } from "next";
import { AudienceLanding } from "@/components/sections/AudienceLanding";

export const metadata: Metadata = {
  title: "For Families & Children",
  description:
    "From pregnancy through childhood — Garbh Sanskar prenatal training, DMIT fingerprint analysis, and memory & learning techniques for children and families.",
};

export default function FamiliesChildrenPage() {
  return (
    <AudienceLanding
      eyebrow="For Families & Children"
      title="Support that starts before birth and grows with your child."
      description="From prenatal development to a child's inborn learning style to sharper study habits — YOUnique works with families at every stage, combining scientific technique with cultural tradition."
      painPoints={[
        {
          title: "Pregnancy stress can transfer to the child",
          description:
            "The fetal brain develops fastest during pregnancy. Unmanaged maternal stress, anxiety, and fear during this window can affect that development — and most expecting parents have no structured way to address it.",
        },
        {
          title: "Every child's learning style is different",
          description:
            "Generic study advice assumes one learning style fits all. Without understanding a child's inborn intelligence type, parents and teachers are often guessing at what will actually work.",
        },
        {
          title: "Study struggles are often technique, not ability",
          description:
            "A child who 'can't focus' or 'forgets everything' is frequently missing the right memory and reading technique — not lacking ability.",
        },
        {
          title: "Parenting decisions get made without data",
          description:
            "From choosing extracurriculars to understanding a child's natural strengths, most parenting decisions rely on observation alone rather than a structured assessment.",
        },
      ]}
      whatToExpect={[
        "For Garbh Sanskar: a structured, trimester-by-trimester prenatal training program for expecting mothers and their families.",
        "For DMIT: fingerprint sample collection, biometric analysis, and a follow-up consultation explaining your child's inborn learning style.",
        "For Memory & Learning Techniques: hands-on sessions teaching age-appropriate reading and retention methods.",
        "Guidance for parents and teachers on how to apply the findings day-to-day.",
      ]}
      serviceSlugs={["garbh-sanskar", "dmit-assessment", "memory-learning-techniques"]}
      image="/images/photos/family-teens.jpg"
      imageAlt="A mother sitting outdoors with her teenage son and young daughter"
    />
  );
}
