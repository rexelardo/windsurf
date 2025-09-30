# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or login
3. Click "New Project"
4. Fill in project details and click "Create new project"

## 2. Create the Database Table

Once your project is ready, go to the SQL Editor and run this SQL:

```sql
-- Create participants table
CREATE TABLE participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  nickname TEXT NOT NULL,
  city TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for demo purposes)
-- In production, you should restrict this
CREATE POLICY "Allow all operations on participants" ON participants
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX participants_email_idx ON participants(email);

-- Create index on created_at for sorting
CREATE INDEX participants_created_at_idx ON participants(created_at DESC);
```

## 3. Get Your API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

## 4. Add Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 5. Deploy to Vercel

Add the same environment variables to your Vercel project:
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Redeploy

## Table Schema

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| email | TEXT | Participant's email (unique) |
| nickname | TEXT | Participant's chef name |
| city | TEXT | Participant's city |
| created_at | TIMESTAMP | When they joined |

That's it! Your waitlist is now ready to collect participants! 🎉
