# 🍳 Vibes Cooking

A creative cooking app that generates personalized recipes based on your ingredients, mood, and budget!

## ✨ Features

- **Ingredient-Based**: Tell us what's in your fridge
- **Vibe-Matched**: Get recipes that match your mood (cozy, healthy, fancy, quick, etc.)
- **Budget-Aware**: Recipes tailored to your budget
- **AI-Powered**: Uses OpenAI GPT-4 to generate creative, personalized recipes
- **Beautiful UI**: Modern, responsive design with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up your environment variables:

```bash
# Copy the example env file
cp env.example .env.local

# Edit .env.local and add your OpenAI API key
OPENAI_API_KEY=your_openai_api_key_here
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add your `OPENAI_API_KEY` environment variable in Vercel project settings
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
- **Language**: TypeScript

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
