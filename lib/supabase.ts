import { createClient } from '@supabase/supabase-js';

// Server-side only Supabase client
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Participant = {
  id?: string;
  email: string;
  nickname: string;
  city: string;
  created_at?: string;
};
