# MarketLift AI

MarketLift AI is an AI-powered marketing platform built for local businesses, creators, and agencies.  
It helps users **generate content, design posts, schedule social media updates, and track performance** — all in one place.

> **Core Promise:** _Lift your marketing with AI._

---

## 🚀 Features

### **MVP**

- **AI Text Generator** (captions, hashtags, descriptions)
- **AI Image/Poster Generator**
- **Template Library** (editable designs)
- **Voice Input** (speech-to-text for faster content creation)
- **Multilingual AI Support**
- **Business & Product Manager**
- **Brand Profiles** (colors, fonts, logos)
- **Post Editor** (colors, fonts, layers, layouts)
- **Post Status Lifecycle**  
  Draft → Generating → Generated → Edited → Scheduled → Published
- **Quota/Usage Tracking**
- **Subscriptions** (Stripe/Razorpay)
- **Social Publishing** (Instagram/Facebook)

### **Upcoming**

- AI Ad Creator (Meta/Google)
- Video/Reels Generator
- Advanced Scheduler Calendar
- Analytics Dashboard
- AI Campaign Generator (30-day plan)
- Brand Kits
- Auto-Ads Optimization

---

## 🏗 Tech Stack

### **Frontend**

- Next.js (App Router)
- Tailwind CSS
- shadcn/ui components

### **Backend**

- Next.js API Routes
- Supabase/PostgreSQL
- Redis + BullMQ (job queues)
- S3/Supabase Storage

### **AI Services**

- Whisper / Google STT
- OpenAI / Gemini LLMs
- Replicate / Stability Image Generation
- FFmpeg (future video processing)

### **Payments**

- Stripe (global)
- Razorpay (India)

---

## 📐 High-Level Architecture

User → Next.js UI → API Routes → Queue (BullMQ) → Workers
↓
Supabase DB
↓
AI Services / Storage

---

## 🗂 Data Model (Simplified)

- **User** — profile, subscription, usage
- **Business** — brand identity, language, assets
- **Product** — name, images, category
- **Template** — layout metadata
- **Post** — caption, images, design JSON
- **PostVersion** — version history
- **GenerationJob** — STT, text, image jobs
- **SocialAccount** — OAuth tokens
- **PublishRecord** — logs after publishing
- **QuotaUsage** — token + image usage

---

## ⚙️ Local Setup

### 1. Clone Repo

```bash
git clone https://github.com/yourusername/marketlift-ai.git
cd marketlift-ai
```
