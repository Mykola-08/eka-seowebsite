-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create user_onboarding table
create table if not exists public.user_onboarding (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  data jsonb not null,
  recommendations jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id)
);

-- Set up RLS (Row Level Security)
alter table public.user_onboarding enable row level security;

create policy "Users can view their own onboarding data"
  on public.user_onboarding for select
  using (auth.uid() = user_id);

create policy "Users can insert/update their own onboarding data"
  on public.user_onboarding for all
  using (auth.uid() = user_id);
