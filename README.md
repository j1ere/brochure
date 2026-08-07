# CSA Maseno Welcome Guide

A dedicated **Next.js brochure and welcome guide** for the **Catholic Students’ Association (CSA), Maseno University**, deployed at **https://csa.stanneschaplaincy.com**.

This project is a standalone frontend application that introduces first-year students to **St. Anne’s Catholic Chaplaincy** and the **Catholic Students’ Association (CSA)** through a visually rich, SEO-friendly landing experience. It serves as the digital welcome booklet for new students joining the chaplaincy community.

---

## Project purpose

The primary goal of this project is to provide a dedicated onboarding experience for incoming students without affecting the main chaplaincy website.

The welcome guide includes information about:

* St. Anne’s Catholic Chaplaincy
* The Catholic Students’ Association (CSA)
* Prayer houses
* Groups and movements
* Mass schedule
* Signature events
* Welcome week
* Contact information
* Campus location
* Student resources

The project is intentionally designed as a **lightweight, high-performance brochure site** with a strong emphasis on **SEO, accessibility, and mobile experience**.

---

## Technology stack

This project is built with:

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS v4**

The application uses the **Next.js App Router** and is primarily composed of **Server Components** to maximize search engine visibility and performance.

Interactive functionality is isolated into small client components where necessary (such as scroll animations and the placeholder signup form).

---

## Position in the St. Anne’s ecosystem

This project is one part of the broader **St. Anne’s Chaplaincy digital platform**.

### Domain architecture

```text
stanneschaplaincy.com
│
├── Main chaplaincy website (Next.js)
│
├── csa.stanneschaplaincy.com
│   └── CSA Welcome Guide (this project)
│
└── 
```

### Responsibilities

#### Main website (`stanneschaplaincy.com`)

* Public chaplaincy website
* Events
* Prayer resources
* Catholic Ministries
* Leadership
* General chaplaincy content

#### CSA Welcome Guide (`csa.stanneschaplaincy.com`)

* First-year onboarding
* CSA brochure
* Welcome ceremony information
* Community introduction
* Student-focused content

---

## Development

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

---

## Deployment

This project is deployed on **Vercel** and mapped to the custom subdomain:

```text
https://csa.stanneschaplaincy.com
```

The deployment pipeline is independent of the main chaplaincy website.

---

## Design principles

This project follows several important engineering principles:

* **SEO-first rendering**
* **Server Components by default**
* **Progressive enhancement**
* **Minimal client-side JavaScript**
* **Reusable UI sections**
* **Independent deployment architecture**

---

## Author

Designed and developed by **Jeremiah Wambua** as part of the **St. Anne’s Catholic Chaplaincy, Maseno University** digital platform.

This repository represents the **CSA onboarding and welcome experience** within the larger St. Anne’s Chaplaincy ecosystem.
