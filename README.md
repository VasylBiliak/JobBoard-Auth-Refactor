**To set up and run the project locally, follow these steps:**
1. **Clone the repository**
   ```
   git clone https://github.com/VasylBiliak/JobBoard-Auth-Refactor.git
   cd JobBoard-Auth-Refactor
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Configure environment variables
   Create a .env file in the project root and add:
   ```   
   VITE_SUPABASE_URL=
   VITE_SUPABASE_ANON_KEY=
   VITE_LOCAL_URL=
   VITE_SUPABASE_REDIRECT_URL=
   ```
4. Run the development server
   ```
   npm run dev
   ```
5. Open the app
   Go to
6. The application will run at http://localhost:5173 (or http://localhost:3000 for Next.js).
   ```
   http://localhost:5173
   ```

6. Test authentication:
   * Navigate to the login page.
   * Use Google OAuth to sign in.
   * Verify that the user's email   



**Production Fixes for Supabase:**

Added VITE_SUPABASE_REDIRECT_URL to environment variables for handling production redirects.
Updated AuthProvider to use VITE_SUPABASE_REDIRECT_URL in signInWithOAuth.
Removed fallback to window.location.origin to prevent incorrect localhost redirects in production.
Added redirectTo configuration to the Supabase client for proper OAuth flow.

These changes resulted in a cleaner, more maintainable codebase with logical separation of concerns. No major challenges were encountered, but ensuring correct environment variable configuration for Vercel deployment was key to making authentication work in production.
Additional Notes

For production deployment, ensure all environment variables are correctly set in Vercel dashboard.
If you encounter any issues, check the console for errors related to Supabase connection or authentication setup.

**Deployment (Vercel) notes**

1. Deployed to Vercel at: https://job-board-auth-refactor.vercel.app/
2. Ensure the following environment variables are set in Vercel (Project Settings → Environment Variables):
3. VITE_SUPABASE_URL
4. VITE_SUPABASE_ANON_KEY
5. VITE_SUPABASE_REDIRECT_URL (production redirect URL; must match Supabase OAuth settings)

* Supabase OAuth configuration (quick checklist)

1. Create project at [https://supabase.com](https://supabase.com).
2. In Supabase dashboard → Authentication → Providers → Google: enable and set Google client ID/secret.
3. Add Authorized redirect URIs in Google Cloud console:
   https://job-board-auth-refactor.vercel.app/ (production)
   http://localhost:5173/ (development)
4. In Supabase → Settings → Auth → Redirect URLs add the same values.
5. Add keys to Vercel environment variables.

* Project structure reorganized:

1. components — reusable UI components and modal windows
2. pages — top-level page components (e.g., Home, Login)
3. hooks — custom React hooks for logic reuse (useAuth, useJobs, useTheme)
4. services — API clients and helpers, including Supabase setup and calls
5. utils and types — utility functions and TypeScript type definitions
6. routes — centralized route definitions and routing logic
7. data — static or mock data used in the app
8. contexts — React context providers for shared state management


JobBoard-Auth-Refactor
Project Description
This repository contains a refactored version of a Job Board application.
The original project has been cleaned up and restructured for better organization and maintainability.
Key improvements include:

Reorganized folder structure with clear separation of components, pages, utilities, data, hooks, routs, contexts and services.
Removal of unused files and code.
Integration with Supabase for database management and authentication.
Implementation of user authentication using Supabase Auth with Google OAuth support.
After successful login, the application displays the user's email.

The project aims to provide a clean, modular, and production-ready codebase suitable for a full-stack developer role.

Supabase Integration and Authentication:

Integrated Supabase as the authentication backend and configured auth settings.
Added a Login page with React Router routes to handle sign-in functionality using Supabase.
Updated the Header component to conditionally display a "Sign In" button when logged out,
and the user's email along with a "Sign Out" button when logged in.

Added Routes:

Created src/routes/AppRoutes.tsx to centralize all application route definitions.
Moved routing logic from App.tsx into the AppRoutes component.

Updated App.tsx to utilize AppRoutes.
Created a Layout component to wrap pages with the Header and main content area.
Moved modal components to the specific components where they are used for better encapsulation.

Hooks:
Split useTheme and useAuth hooks into separate files to resolve issues with React Refresh.

Layout Component:
Added a reusable Layout component that wraps page components, consistently rendering the Header and main content area, promoting DRY principles.

Modal Management:
Modal components were relocated to their respective feature components, enhancing encapsulation and modularity.

Link to the deployed Vercel project [https://job-board-auth-refactor.vercel.app](https://job-board-auth-refactor.vercel.app)
