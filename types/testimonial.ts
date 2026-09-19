export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Illustrative placeholder pending real, permissioned client testimonials. */
  placeholder?: boolean;
  /** Photo of the actual client, with their permission — never a stock
   * face, which would invent a person endorsing the business. While unset,
   * the Testimonials section renders an icon medallion instead. */
  image?: string;
}
