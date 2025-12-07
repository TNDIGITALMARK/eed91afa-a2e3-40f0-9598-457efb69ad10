import { createClient } from '@supabase/supabase-js';

// Supabase connection with automatic tenant/project scoping
export const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IldDN2ZnMVNIY0Zmc3pGc2tyeVdPcHRaNkdqZTIiLCJwcm9qZWN0X2lkIjoiZWVkOTFhZmEtYTJlMy00MGYwLTk1OTgtNDU3ZWZiNjlhZDEwIiwianRpIjoiZjE1ZDQ4NTgtM2M2Mi00MjUyLTgzZTMtMTM3OWQzNjY0M2M1IiwiaWF0IjoxNzY1MTIwMTgxLCJleHAiOjE3NjUxMjI4ODF9.W7lVAlsgJEw1FJtEMALBPxNzfpGIN5Cd6czrsZB77cs`
      }
    }
  }
);

// Tenant and project identifiers for manual operations
export const TENANT_ID = 'WC7fg1SHcFfszFskryWOptZ6Gje2';
export const PROJECT_ID = 'eed91afa-a2e3-40f0-9598-457efb69ad10';
