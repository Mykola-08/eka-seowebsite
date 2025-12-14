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

-- Create session_types table
create table if not exists public.session_types (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  base_price_cents integer not null,
  features jsonb,
  category text,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create user_profiles table
create table if not exists public.user_profiles (
  user_id uuid references auth.users(id) on delete cascade primary key,
  first_name text,
  last_name text,
  is_vip boolean default false,
  vip_expires_at timestamp with time zone,
  vip_tier text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create user_assessments_improved table
create table if not exists public.user_assessments_improved (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  assessment_data jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create appointments table
create table if not exists public.appointments (
  id uuid default uuid_generate_v4() primary key,
  customer_id uuid references auth.users(id) on delete cascade not null,
  therapist_id text default 'default-therapist',
  service_id uuid references public.session_types(id),
  appointment_date text,
  start_time text,
  end_time text,
  status text default 'pending',
  location_type text,
  location_address text,
  price_cents integer,
  customer_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create contact_submissions table
create table if not exists public.contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  service text,
  message text,
  preferred_contact text,
  preferred_time text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up RLS (Row Level Security)
alter table public.user_onboarding enable row level security;
alter table public.session_types enable row level security;
alter table public.user_profiles enable row level security;
alter table public.user_assessments_improved enable row level security;
alter table public.appointments enable row level security;
alter table public.contact_submissions enable row level security;

-- Policies

-- user_onboarding
create policy "Users can view their own onboarding data"
  on public.user_onboarding for select
  using (auth.uid() = user_id);

create policy "Users can insert/update their own onboarding data"
  on public.user_onboarding for all
  using (auth.uid() = user_id);

-- session_types (Public read, Admin write - assuming public read for now)
create policy "Public read access for session_types"
  on public.session_types for select
  using (true);

-- user_profiles
create policy "Users can view their own profile"
  on public.user_profiles for select
  using (auth.uid() = user_id);

-- user_assessments_improved
create policy "Users can view their own assessments"
  on public.user_assessments_improved for select
  using (auth.uid() = user_id);

create policy "Users can insert their own assessments"
  on public.user_assessments_improved for insert
  with check (auth.uid() = user_id);

-- appointments
create policy "Users can view their own appointments"
  on public.appointments for select
  using (auth.uid() = customer_id);

create policy "Users can insert their own appointments"
  on public.appointments for insert
  with check (auth.uid() = customer_id);

-- contact_submissions (Public insert)
create policy "Public insert for contact_submissions"
  on public.contact_submissions for insert
  with check (true);
