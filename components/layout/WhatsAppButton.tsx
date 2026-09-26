import { contactInfo } from "@/lib/data/contact";

// Floating "chat on WhatsApp" button, rendered on every page from the root
// layout. A plain anchor to wa.me — no client JS: WhatsApp itself decides
// whether to open the app or web.whatsapp.com.
//
// Renders nothing while contactInfo.whatsapp is still the all-zeroes
// placeholder (same TODO(client) as the rest of that file) — a button that
// opens a chat with a number the business doesn't own is worse than no
// button.
export function WhatsAppButton() {
  const digits = contactInfo.whatsapp.replace(/\D/g, "");
  if (!digits || /0{8}/.test(digits)) return null;

  const href = `https://wa.me/${digits}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 lg:bottom-8 lg:right-8"
    >
      {/* WhatsApp glyph — lucide has no brand icons, so the standard logo
          path is inlined; aria-hidden because the anchor's aria-label
          already names the action. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M16.004 4c-6.627 0-12 5.373-12 12 0 2.121.553 4.19 1.604 6.02L4 28l6.135-1.577A11.94 11.94 0 0 0 16.004 28c6.627 0 12-5.373 12-12s-5.373-12-12-12Zm0 21.818a9.77 9.77 0 0 1-4.985-1.362l-.357-.212-3.642.936.973-3.55-.233-.365A9.77 9.77 0 0 1 6.186 16c0-5.415 4.405-9.818 9.818-9.818 5.414 0 9.818 4.403 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818Zm5.384-7.355c-.295-.148-1.745-.861-2.016-.959-.27-.099-.467-.148-.664.147-.197.296-.762.96-.934 1.157-.172.197-.344.222-.639.074-.295-.148-1.246-.459-2.373-1.464-.877-.782-1.469-1.748-1.641-2.043-.172-.296-.019-.456.129-.603.133-.132.295-.345.443-.517.148-.173.197-.296.295-.493.099-.197.05-.37-.024-.518-.074-.147-.664-1.6-.91-2.19-.24-.576-.483-.499-.664-.508l-.566-.01c-.197 0-.517.074-.788.37-.27.295-1.033 1.01-1.033 2.463 0 1.453 1.058 2.858 1.205 3.055.148.197 2.082 3.18 5.044 4.458.705.305 1.255.487 1.684.623.708.225 1.352.193 1.861.117.568-.085 1.745-.713 1.991-1.402.246-.69.246-1.28.172-1.403-.074-.123-.27-.197-.566-.345Z" />
      </svg>
    </a>
  );
}
