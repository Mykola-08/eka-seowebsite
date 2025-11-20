CREATE TABLE user_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  interaction_type TEXT NOT NULL,
  element_text TEXT,
  page_path TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_interactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own interactions"
  ON user_interactions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anyone can insert interactions (for anonymous tracking)"
  ON user_interactions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admins can view all interactions"
  ON user_interactions
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'service_role'); 
  -- Note: standard users shouldn't see everyone's logs. 
  -- If there is an admin role, use that. For now, I'll just allow service_role or maybe just leave it restricted.
  -- Actually, let's allow users to see their own interactions if needed.

CREATE POLICY "Users can view their own interactions"
  ON user_interactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
