<script lang="ts">
	import { onMount } from 'svelte';
	import { readingList } from '$lib/stores/readingList';
	import { user } from '$lib/stores/user'; 
	import { supabase } from '$lib/supabase';

	let showNotification = false;
	let listBookIds = new Set<string>();
	let notificationMessage = '';
	let isListNotification = false;
	
	// Show notification
	function showAddNotification(message: string, isList = false) {
		notificationMessage = message;
		isListNotification = isList;
		showNotification = true;
		setTimeout(() => {
			showNotification = false;
		}, 5000);
	}
	
	// Generate a random pastel color for book covers
	function getRandomCoverColor() {
		const colors = [
			'bg-blue-100',
			'bg-green-100',
			'bg-yellow-100',
			'bg-purple-100',
			'bg-pink-100',
			'bg-indigo-100',
			'bg-red-100',
			'bg-orange-100',
			'bg-teal-100',
			'bg-cyan-100',
			'bg-lime-100',
			'bg-amber-100',
			'bg-rose-100',
			'bg-fuchsia-100',
			'bg-violet-100',
			'bg-sky-100'
		];
		return colors[Math.floor(Math.random() * colors.length)];
	}
	
	// Convert book title to URL-friendly slug
	function titleToSlug(title: string): string {
		return title
			.toLowerCase()
			.replace(/[^\w\s-]/g, '') // Remove special characters
			.replace(/\s+/g, '-') // Replace spaces with hyphens
			.replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
			.trim();
	}

	// Get author display name
	function getAuthorDisplayName(book: any): string {
		if (book.authors && book.authors.length > 0) {
			const primaryAuthor = book.authors.find((a: any) => a.primary_author) || book.authors[0];
			if (primaryAuthor.authors?.pen_name) {
				return primaryAuthor.authors.pen_name;
			}
			if (primaryAuthor.authors?.user_profiles) {
				const profile = primaryAuthor.authors.user_profiles;
				return `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'Unknown Author';
			}
		}
		return 'Unknown Author';
	}
	
	// State
	let trendingBooks: any[] = [];
	let bestBargainBooks: any[] = [];
	let bestsellingChildrensBooks: any[] = [];
	
	// Fetch trending books (recent books)
	async function fetchTrendingBooks() {
		try {
			const { data: booksData, error } = await supabase
				.from('books')
				.select(`
					*,
					book_authors(
						author_id,
						primary_author,
						authors(
							pen_name,
							user_profiles(first_name, last_name)
						)
					)
				`)
				.eq('status', 'active')
				.order('created_at', { ascending: false })
				.limit(10);
			
			if (error) {
				console.error('Error fetching trending books:', error);
				return;
			}
			
			trendingBooks = (booksData || []).map((book: any) => {
				const authorMap = new Map();
				(book.book_authors || []).forEach((ba: any) => {
					if (ba.author_id && !authorMap.has(ba.author_id)) {
						authorMap.set(ba.author_id, ba);
					}
				});
				
				return {
					...book,
					coverColor: getRandomCoverColor(),
					imgUrl: book.cover_url || '',
					authors: Array.from(authorMap.values()),
					format: book.format || 'Paperback'
				};
			});
		} catch (err) {
			console.error('Error in fetchTrendingBooks:', err);
		}
	}
	
	// Fetch featured books (bargain category)
	async function fetchBestBargainBooks() {
		try {
			const { data: categoryData } = await supabase
				.from('categories')
				.select('id')
				.eq('slug', 'bargain')
				.single();
			
			if (!categoryData) {
				bestBargainBooks = [];
				return;
			}
			
			const { data: subcategoriesData } = await supabase
				.from('categories')
				.select('id')
				.eq('parent_id', categoryData.id);
			
			const categoryIds = [categoryData.id, ...(subcategoriesData?.map(s => s.id) || [])];
			
			const { data: booksData, error } = await supabase
				.from('books')
				.select(`
					*,
					book_categories!inner(
						category_id,
						categories(*)
					),
					book_authors(
						author_id,
						primary_author,
						authors(
							pen_name,
							user_profiles(first_name, last_name)
						)
					)
				`)
				.eq('status', 'active')
				.in('book_categories.category_id', categoryIds)
				.order('created_at', { ascending: false })
				.limit(20);
			
			if (error) {
				console.error('Error fetching bargain books:', error);
				bestBargainBooks = [];
				return;
			}
			
			bestBargainBooks = (booksData || []).map((book: any) => {
				const authorMap = new Map();
				(book.book_authors || []).forEach((ba: any) => {
					if (ba.author_id && !authorMap.has(ba.author_id)) {
						authorMap.set(ba.author_id, ba);
					}
				});
				
				return {
					...book,
					coverColor: getRandomCoverColor(),
					imgUrl: book.cover_url || '',
					authors: Array.from(authorMap.values()),
					format: book.format || 'Paperback'
				};
			});
		} catch (err) {
			console.error('Error in fetchBestBargainBooks:', err);
			bestBargainBooks = [];
		}
	}
	
	// Fetch bestselling children's books by category
	async function fetchBestsellingChildrensBooks() {
		try {
			const { data: categoryData } = await supabase
				.from('categories')
				.select('id')
				.in('slug', ['children', 'childrens', 'childrens-books'])
				.single();
			
			if (!categoryData) {
				bestsellingChildrensBooks = [];
				return;
			}
			
			const { data: subcategoriesData } = await supabase
				.from('categories')
				.select('id')
				.eq('parent_id', categoryData.id);
			
			const categoryIds = [categoryData.id, ...(subcategoriesData?.map(s => s.id) || [])];
			
			const { data: booksData, error } = await supabase
				.from('books')
				.select(`
					*,
					book_categories!inner(
						category_id,
						categories(*)
					),
					book_authors(
						author_id,
						primary_author,
						authors(
							pen_name,
							user_profiles(first_name, last_name)
						)
					)
				`)
				.eq('status', 'active')
				.in('book_categories.category_id', categoryIds)
				.order('created_at', { ascending: false })
				.limit(20);
			
			if (error) {
				console.error('Error fetching childrens books:', error);
				bestsellingChildrensBooks = [];
				return;
			}
			
			bestsellingChildrensBooks = (booksData || []).map((book: any) => {
				const authorMap = new Map();
				(book.book_authors || []).forEach((ba: any) => {
					if (ba.author_id && !authorMap.has(ba.author_id)) {
						authorMap.set(ba.author_id, ba);
					}
				});
				
				return {
					...book,
					coverColor: getRandomCoverColor(),
					imgUrl: book.cover_url || '',
					authors: Array.from(authorMap.values()),
					format: book.format || 'Paperback'
				};
			});
		} catch (err) {
			console.error('Error in fetchBestsellingChildrensBooks:', err);
			bestsellingChildrensBooks = [];
		}
	}
	
	onMount(async () => {
		fetchTrendingBooks();
		fetchBestBargainBooks();
		fetchBestsellingChildrensBooks();
		// Sync reading list IDs for "already in list" state
		readingList.subscribe(list => {
			listBookIds = new Set(list.items.map(i => i.id));
		});
	});

	let currentIndex = 0;
	const visibleBooks = 4;
	
	function nextBooks() {
		if (currentIndex < trendingBooks.length - visibleBooks) {
			currentIndex++;
		}
	}
	
	function prevBooks() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	let bargainIndex = 0;
	const bargainVisibleBooks = 4;

	function nextBargainBooks() {
		if (bargainIndex < bestBargainBooks.length - bargainVisibleBooks) {
			bargainIndex++;
		}
	}

	function prevBargainBooks() {
		if (bargainIndex > 0) {
			bargainIndex--;
		}
	}

	let childrensIndex = 0;
	const childrensVisibleBooks = 4;

	function nextChildrensBooks() {
		if (childrensIndex < bestsellingChildrensBooks.length - childrensVisibleBooks) {
			childrensIndex++;
		}
	}

	function prevChildrensBooks() {
		if (childrensIndex > 0) {
			childrensIndex--;
		}
	}

	function addToList(book: any) {
		const bookId = book.id || titleToSlug(book.title);
		if (listBookIds.has(bookId)) return;
		readingList.addItem({
			title: book.title,
			author: getAuthorDisplayName(book),
			format: book.format,
			imgUrl: book.imgUrl
		});
		showAddNotification(`Added "${book.title}" to your reading list`, true);
	}
</script>

<svelte:head>
	<title>Novella Books Zimbabwe | Explore & Read Books Online in Zimbabwe & Africa</title>
	<meta name="description" content="Zimbabwe and Africa's premier online reading library. Explore trending reads, bestsellers, children's books and more. Read instantly on any device from Harare, Bulawayo, across Zimbabwe and all of Africa." />

	<!-- Open Graph -->
	<meta property="og:title" content="Novella Books Zimbabwe | Explore Books Online in Zimbabwe & Africa" />
	<meta property="og:description" content="Zimbabwe and Africa's premier reading library. Discover trending reads, bestsellers, and curated books. Read instantly on any device." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://novellabooks.co.zw/images/banners/homepage-01.webp" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Novella Books Zimbabwe | Explore Books Online" />
	<meta name="twitter:description" content="Zimbabwe and Africa's premier reading library. Explore books and read instantly." />
	<meta name="twitter:image" content="https://novellabooks.co.zw/images/banners/homepage-01.webp" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": "https://novellabooks.co.zw/#website",
				"url": "https://novellabooks.co.zw",
				"name": "Novella Books Zimbabwe",
				"description": "Zimbabwe and Africa's premier online reading library for curated books",
				"inLanguage": "en",
				"potentialAction": {
					"@type": "SearchAction",
					"target": "https://novellabooks.co.zw/books?q={search_term_string}",
					"query-input": "required name=search_term_string"
				}
			},
			{
				"@type": "Organization",
				"@id": "https://novellabooks.co.zw/#organization",
				"name": "Novella Books",
				"alternateName": "Novella Books Zimbabwe",
				"url": "https://novellabooks.co.zw",
				"logo": {
					"@type": "ImageObject",
					"url": "https://novellabooks.co.zw/images/banners/homepage-01.webp"
				},
				"contactPoint": {
					"@type": "ContactPoint",
					"email": "support@novellabooks.com",
					"contactType": "customer service",
					"areaServed": ["ZW", "ZA", "BW", "MZ", "ZM", "MW", "NA", "KE", "NG", "GH", "TZ"],
					"availableLanguage": "English"
				},
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Harare",
					"addressCountry": "ZW"
				},
				"sameAs": [
					"https://facebook.com/novellabooks",
					"https://instagram.com/novellabooks",
					"https://twitter.com/NovellaBookZW"
				]
			}
		]
	})}</script>`}
</svelte:head>

<div class="container mx-auto px-6 lg:px-12 xl:px-16 py-8 max-w-[1400px]">
	<!-- Promotional Banners -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
		<!-- Christmas Gift Shop Banner -->
		<a href="/gifts" class="banner-link block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
			<div class="banner-zoom-container overflow-hidden">
				<img 
					src="/images/banners/christmas-gift-shop-01.webp" 
					alt="Christmas Gift Shop" 
					class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
				/>
			</div>
		</a>

		<!-- Featured Books Banner -->
		<a href="/used" class="banner-link block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
			<div class="banner-zoom-container overflow-hidden">
				<img 
					src="/images/banners/homepage-01.webp" 
					alt="Explore Featured Books" 
					class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
				/>
			</div>
		</a>

		<!-- Bestsellers Banner -->
		<a href="/bestsellers" class="banner-link block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
			<div class="banner-zoom-container overflow-hidden">
				<img 
					src="/images/banners/our-bestsellers-01.webp" 
					alt="Our Bestsellers" 
					class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
				/>
			</div>
		</a>
	</div>

	<!-- Trending Reads Section -->
	<div class="mb-12">
		<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
			<h2 class="text-xl sm:text-2xl font-bold text-gray-900">Trending Reads</h2>
			<a href="/books/trending-reads" class="text-green-600 hover:text-green-700 text-xs sm:text-sm font-medium">See More Trending Reads →</a>
		</div>
		<hr class="border-gray-300 my-4">

		<div class="relative">
			<!-- Left Arrow -->
			<button
				onclick={prevBooks}
				disabled={currentIndex === 0}
				aria-label="Previous books"
				class="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 md:-translate-x-6 z-10 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-300"
			>
				<svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<!-- Book Carousel -->
			<div class="overflow-hidden px-8 md:px-10">
				<div class="flex gap-2 md:gap-3 transition-transform duration-300 ease-in-out" style="transform: translateX(calc(-{currentIndex} * (120px + 0.5rem)))">
					{#each trendingBooks as book}
						{@const bookId = book.id || titleToSlug(book.title)}
						<a href="/books/{book.slug || titleToSlug(book.title)}" class="shrink-0 w-[120px] md:w-[140px] block">
							<div class="bg-white overflow-hidden pr-6">
								<!-- Book Cover -->
								<div class="w-full h-[210px] {book.coverColor} flex items-center justify-center mb-1.5">
									{#if book.imgUrl}
										<img src={book.imgUrl} alt={book.title} class="w-full h-full object-cover" />
									{:else}
										<span class="text-gray-400 text-[10px]">Cover</span>
									{/if}
								</div>
								<div class="pb-2">
									<h3 class="font-semibold text-xs text-gray-900 mb-0.5 line-clamp-2 leading-tight min-h-8">{book.title}</h3>
									<p class="text-[10px] text-gray-600 mb-0.5 leading-tight">{getAuthorDisplayName(book)}</p>
									<div class="flex items-center gap-1 mb-1.5">
										<span class="text-[10px] text-gray-500">{book.format}</span>
									</div>
									<button 
										disabled={listBookIds.has(bookId)}
										onclick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											addToList(book);
										}}
										class="w-full py-1 text-[10px] font-medium rounded transition-colors {listBookIds.has(bookId) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}"
									>
										{listBookIds.has(bookId) ? 'In Reading List' : 'Add to List'}
									</button>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<!-- Right Arrow -->
			<button
				onclick={nextBooks}
				disabled={currentIndex >= trendingBooks.length - visibleBooks}
				aria-label="Next books"
				class="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 md:translate-x-6 z-10 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-300"
			>
				<svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>

	<!-- Featured Books Section -->
	<div class="mb-12">
		<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
			<h2 class="text-xl sm:text-2xl font-bold text-gray-900">Featured Books</h2>
			<a href="/books/bargain-books" class="text-green-600 hover:text-green-700 text-xs sm:text-sm font-medium">See More Featured Books →</a>
		</div>
		<hr class="border-gray-300 my-4">

		<div class="relative">
			<!-- Left Arrow -->
			<button
				onclick={prevBargainBooks}
				disabled={bargainIndex === 0}
				aria-label="Previous featured books"
				class="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 md:-translate-x-6 z-10 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200"
			>
				<svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<!-- Book Carousel -->
			<div class="overflow-hidden px-8 md:px-10">
				{#if bestBargainBooks.length === 0}
					<div class="text-center py-12 text-gray-500">
						<p>No books available for now</p>
					</div>
				{:else}
					<div class="flex gap-2 md:gap-3 transition-transform duration-300 ease-in-out" style="transform: translateX(calc(-{bargainIndex} * (120px + 0.5rem)))">
						{#each bestBargainBooks as book}
							{@const bookId = book.id || titleToSlug(book.title)}
							<a href="/books/{book.slug || titleToSlug(book.title)}" class="shrink-0 w-[120px] md:w-[140px] block">
								<div class="bg-white overflow-hidden pr-4">
									<!-- Book Cover -->
									<div class="w-full h-[210px] {book.coverColor} flex items-center justify-center mb-1.5">
										{#if book.imgUrl}
											<img src={book.imgUrl} alt={book.title} class="w-full h-full object-cover" />
										{:else}
											<span class="text-gray-400 text-[10px]">Cover</span>
										{/if}
									</div>
									<div class="pb-2">
										<h3 class="font-semibold text-xs text-gray-900 mb-0.5 line-clamp-2 leading-tight min-h-8">{book.title}</h3>
										<p class="text-[10px] text-gray-600 mb-0.5 leading-tight">{getAuthorDisplayName(book)}</p>
										<div class="flex items-center gap-1 mb-1.5">
											<span class="text-[10px] text-gray-500">{book.format}</span>
										</div>
										<button 
											disabled={listBookIds.has(bookId)}
											onclick={(e) => {
												e.preventDefault();
												e.stopPropagation();
												addToList(book);
											}}
											class="w-full py-1 text-[10px] font-medium rounded transition-colors {listBookIds.has(bookId) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}"
										>
											{listBookIds.has(bookId) ? 'In Reading List' : 'Add to List'}
										</button>
									</div>
								</div>
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Right Arrow -->
			<button
				onclick={nextBargainBooks}
				disabled={bargainIndex >= bestBargainBooks.length - bargainVisibleBooks}
				aria-label="Next featured books"
				class="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 md:translate-x-6 z-10 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-300"
			>
				<svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>

	<!-- Bestselling Children's Books Section -->
	<div class="mb-12">
		<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
			<h2 class="text-xl sm:text-2xl font-bold text-gray-900">Bestselling Children's Books</h2>
			<a href="/books/childrens-books" class="text-green-600 hover:text-green-700 text-xs sm:text-sm font-medium">See More →</a>
		</div>
		<hr class="border-gray-300 my-4">

		<div class="relative">
			<!-- Left Arrow -->
			<button
				onclick={prevChildrensBooks}
				disabled={childrensIndex === 0}
				aria-label="Previous children's books"
				class="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 md:-translate-x-6 z-10 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200"
			>
				<svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<!-- Book Carousel -->
			<div class="overflow-hidden px-8 md:px-10">
				{#if bestsellingChildrensBooks.length === 0}
					<div class="text-center py-12 text-gray-500">
						<p>No books available for now</p>
					</div>
				{:else}
					<div class="flex gap-2 md:gap-3 transition-transform duration-300 ease-in-out" style="transform: translateX(calc(-{childrensIndex} * (120px + 0.5rem)))">
						{#each bestsellingChildrensBooks as book}
							{@const bookId = book.id || titleToSlug(book.title)}
							<a href="/books/{book.slug || titleToSlug(book.title)}" class="shrink-0 w-[120px] md:w-[140px] block">
								<div class="bg-white overflow-hidden pr-4">
									<!-- Book Cover -->
									<div class="w-full h-[210px] {book.coverColor} flex items-center justify-center mb-1.5">
										{#if book.imgUrl}
											<img src={book.imgUrl} alt={book.title} class="w-full h-full object-cover" />
										{:else}
											<span class="text-gray-400 text-[10px]">Cover</span>
										{/if}
									</div>
									<div class="pb-2">
										<h3 class="font-semibold text-xs text-gray-900 mb-0.5 line-clamp-2 leading-tight min-h-8">{book.title}</h3>
										<p class="text-[10px] text-gray-600 mb-0.5 leading-tight">{getAuthorDisplayName(book)}</p>
										<div class="flex items-center gap-1 mb-1.5">
											<span class="text-[10px] text-gray-500">{book.format}</span>
										</div>
										<button 
											disabled={listBookIds.has(bookId)}
											onclick={(e) => {
												e.preventDefault();
												e.stopPropagation();
												addToList(book);
											}}
											class="w-full py-1 text-[10px] font-medium rounded transition-colors {listBookIds.has(bookId) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}"
										>
											{listBookIds.has(bookId) ? 'In Reading List' : 'Add to List'}
										</button>
									</div>
								</div>
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Right Arrow -->
			<button
				onclick={nextChildrensBooks}
				disabled={childrensIndex >= bestsellingChildrensBooks.length - childrensVisibleBooks}
				aria-label="Next children's books"
				class="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 md:translate-x-6 z-10 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-300"
			>
				<svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>
	
	<!-- Notification Toast -->
	{#if showNotification}
		<div class="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-up max-w-md">
			<div class="flex items-center gap-3 {isListNotification ? 'mb-3' : ''}">
				<svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="flex-1">{notificationMessage}</span>
			</div>
			{#if isListNotification}
				<div class="flex gap-2 mt-2 pt-2 border-t border-green-500/30">
					<a 
						href="/reading-list" 
						class="flex-1 text-center bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors"
					>
						View List
					</a>
					<a 
						href="/reading-list" 
						class="flex-1 text-center bg-white text-green-600 hover:bg-gray-100 px-3 py-1.5 rounded text-sm font-medium transition-colors"
					>
						Start Reading
					</a>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	
	@keyframes slide-up {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	
	.animate-slide-up {
		animation: slide-up 0.3s ease-out;
	}
</style>
