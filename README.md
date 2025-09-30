# 🍳 Vibes Cooking - Windsurf Vibe Battle

A creative cooking app featuring AI-generated recipes and the **Windsurf Vibe Battle** competition platform!

## ✨ Features

### 🎯 Windsurf Vibe Battle
- **Event Banner**: Eye-catching event information at the top
- **Waitlist Form**: Collect participant info (email, nickname, city)
- **Participants Page**: View all registered battle participants
- **Supabase Integration**: Real-time database for participant management

### 🍳 Recipe Generator
- **Ingredient-Based**: Tell us what's in your fridge
- **Vibe-Matched**: Get recipes that match your mood (cozy, healthy, fancy, quick, etc.)
- **Budget-Aware**: Recipes tailored to your budget
- **AI-Powered**: Uses OpenAI GPT-4 to generate creative, personalized recipes
- **Beautiful UI**: Modern, responsive design with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- Supabase account ([Sign up here](https://supabase.com))

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up Supabase database:

Follow the detailed instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to:
- Create the participants table
- Get your Supabase credentials

3. Set up your environment variables:

```bash
# Copy the example env file
cp env.example .env.local

# Edit .env.local and add your keys
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel project settings:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy! 🎉

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI**: OpenAI GPT-4
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Deployment**: Vercel

## 📝 How It Works

1. Enter your available ingredients
2. Describe your desired vibe (e.g., "cozy comfort food", "healthy and fresh")
3. Set your budget
4. AI generates 2-3 personalized recipes with:
   - Creative names
   - Complete ingredient lists
   - Step-by-step instructions
   - Cost estimates
   - Prep time
   - Vibe match explanation

## 🌟 Example Vibes

- Cozy comfort food
- Fresh and healthy
- Fancy date night
- Quick and easy
- Budget-friendly meals
- Exotic and adventurous
- Family-friendly
- Meal prep Sunday

Enjoy cooking with your vibes! 👨‍🍳✨
