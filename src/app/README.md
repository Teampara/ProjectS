# src/app high-level structure

```txt
src/app
├── layout.tsx                 # Global shell with Navbar and page container.
├── page.tsx                   # Landing page + interview wizard section.
├── (auth)/                    # Future auth screens (login, callback, errors).
├── (marketing)/               # Future pricing, FAQ, testimonials pages.
├── create/                    # Future story generation flow.
├── preview/                   # Future story + image preview before payment.
├── checkout/                  # Future Razorpay flow.
├── api/
│   ├── auth/[...nextauth]/    # Auth.js route handler.
│   ├── generate-story/        # Gemini story generation endpoint.
│   ├── generate-images/       # Imagen/DALL-E image generation endpoint.
│   └── export-pdf/            # Puppeteer PDF generation endpoint.
└── globals.css                # Tailwind global styles.
```

> Note: In this phase, only `layout.tsx` and `page.tsx` are implemented.
