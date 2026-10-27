<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase';
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import TrendingReads from '$lib/components/home/TrendingReads.svelte';
  import FeaturedAuthors from '$lib/components/home/FeaturedAuthors.svelte';
  import TopCharts from '$lib/components/home/TopCharts.svelte';
  import FeaturedBooks from '$lib/components/home/FeaturedBooks.svelte';
  import AfricanHeritage from '$lib/components/home/AfricanHeritage.svelte';
  import NewsletterSection from '$lib/components/home/NewsletterSection.svelte';
  import ContactSection from '$lib/components/home/ContactSection.svelte';
  import type { BookFull, Author, ChapterItem } from '$lib/components/home/shared';
  import { PLACEHOLDER_BOOK, dailyShuffle, getRandomCoverColor } from '$lib/components/home/shared';

  // Shared state passed down
  let allCovers: BookFull[] = [];
  let trendingBooks: BookFull[] = [];
  let featuredBooks: BookFull[] = [];
  let heritageBooks: BookFull[] = [];
  let rankedBooks: BookFull[] = [];
  let featuredAuthors: Author[] = [];
  let votingActive = false;
  let progressMap = new Map<string, string>();

  async function loadUserProgress() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.id) return;
    const { data: progress } = await supabase
      .from('reading_progress').select('story_id, chapter_slug').eq('user_id', user.id);
    progressMap = new Map(progress?.map(p => [p.story_id, p.chapter_slug]) || []);
  }

  async function fetchHeroCovers() {
    try {
      const { data, error } = await supabase.from('books').select('id,title,slug,cover_url,description')
        .not('cover_url', 'is', null).not('slug', 'is', null)
        .order('created_at', { ascending: false }).limit(30);
      if (!error && data) allCovers = data.map(b => ({ ...b, imgUrl: b.cover_url ?? PLACEHOLDER_BOOK, source_type: 'book' as const }));
    } catch {}
  }

  async function fetchAllBooks() {
    try {
      const { data: booksData, error } = await supabase.from('books').select(`
        id,title,slug,description,cover_url,created_at,format,
        book_categories(category_id,categories:categories(id,name,slug)),
        book_authors(primary_author,authors:authors(pen_name))
      `).not('slug', 'is', null).order('created_at', { ascending: false });
      if (error) throw error;
      const regularBooks: BookFull[] = (booksData || []).map((b: any, i: number) => ({
        ...b, coverColor: getRandomCoverColor(), imgUrl: b.cover_url ?? PLACEHOLDER_BOOK,
        format: b.format ?? 'Digital Book', categories: b.book_categories,
        authors: b.book_authors, isCompleted: i % 2 === 0, source_type: 'book' as const
      }));
      // For brevity — add your chapter/book merge logic here
      const combined = regularBooks;
      const allMixedBooks = dailyShuffle(combined);
      const t = allMixedBooks.length;
      trendingBooks = allMixedBooks.slice(0, Math.floor(t * 0.35));
      featuredBooks = allMixedBooks.slice(Math.floor(t * 0.35), Math.floor(t * 0.7));
      heritageBooks = dailyShuffle([...combined]).slice(0, 6);
      rankedBooks = [...combined].sort((a, b) => 
        (b.chapters_count || 0) - (a.chapters_count || 0) || 
        new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
      ).slice(0, 9);
    } catch {
      trendingBooks = featuredBooks = heritageBooks = rankedBooks = [];
    }
  }

  async function loadFeaturedData() {
    try {
      const { data: authData, error: authErr } = await supabase.from('authors').select('id,pen_name,profile_picture,bio')
        .eq('is_featured', true).order('featured_order', { ascending: true, nullsFirst: false });
      if (authErr) throw authErr;
      featuredAuthors = (authData || []).map(a => ({
        id: a.id, pen_name: a.pen_name, bio: a.bio || 'No biography available.',
        profile_picture: a.profile_picture, link: `/authors/${a.id}`, bookLink: `/books?author=${a.id}`
      }));
      const { data: voteData } = await supabase.from('system_settings').select('value').eq('key', 'voting_active').limit(1).single();
      votingActive = voteData?.value === 'true';
    } catch { featuredAuthors = []; votingActive = false; }
  }

  onMount(async () => {
    await Promise.all([
      fetchHeroCovers(),
      fetchAllBooks(),
      loadFeaturedData(),
      loadUserProgress()
    ]);
  });
</script>

<svelte:head>
  <title>Novella Books — Stories That Keep You Turning Pages</title>
</svelte:head>

<!-- Hero Section -->
<HeroSection {allCovers} />

<!-- App Prompt -->
<div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 md:py-10">
  {#if votingActive}<div class="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-2xl mb-8 md:mb-10 text-sm md:text-base">🗳️ Author voting is now open! Support your favourite writers → <a href="/vote" class="font-bold underline hover:text-blue-900">Vote Now</a></div>{/if}

  <div class="app-prompt animate-fade-in mb-8">
    <p class="app-prompt-text">📖 Enjoying the story? Get the full <strong>Novella Books app</strong> for offline reading, personalised recommendations, and faster updates!</p>
    <a href="https://play.google.com/store/apps/details?id=com.novella.novella" target="_blank" rel="noopener noreferrer" class="app-prompt-btn">📲 Download the App</a>
  </div>

  <!-- All Sections as Components -->
  <TrendingReads {trendingBooks} {progressMap} />
  <FeaturedAuthors {featuredAuthors} />
  <TopCharts {rankedBooks} {progressMap} />
  <FeaturedBooks {featuredBooks} {progressMap} />
  <AfricanHeritage {heritageBooks} {progressMap} />
  <NewsletterSection />
  <ContactSection />
</div>
